//Promise
{
    //基本定义
    let ajax = (cb) => {
        console.log('执行');
        setTimeout(() => {
            cb && cb.call()
        }, 1000);
    };
    ajax(() => {
        console.log('timeout1');
    })
}

{
    let ajax = () => {
        console.log('执行2');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        })
    };

    ajax().then(() => {
        console.log('promise', 'timeout2');
    })
}

{
    let ajax = () => {
        console.log('执行3');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000)
        })
    };

    ajax()
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        })
        .then(() => {
            console.log('timeout3');
        })
}

{
    let ajax = (num) => {
        console.log('执行4');
        return new Promise((resolve, reject) => {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('出错了');
            }
        })
    }

    ajax(6).then(() => {
        console.log('log', 6);
    }).catch((err) => {
        console.log('catch', err);
    })

    ajax(3).then(() => {
        console.log('log', 3);
    }).catch((err) => {
        console.log('catch', err);
    })
}

{
    //所有图片加载完再加载页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            }
            img.onerror = (err) => {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(img => {
            document.body.appendChild(img);
        });
    }
    Promise.all([
        loadImg('https://i.pinimg.com/564x/4d/25/68/4d2568bc41b91500ee3d395dc600319a.jpg'),
        loadImg('https://i.pinimg.com/originals/48/0e/a2/480ea2c70774a629fd3d6924eee5f127.jpg'),
        loadImg('https://pm1.narvii.com/6060/bed92a715829ef06a8bc9970a7397073df25540a_hq.jpg'),
        loadImg('https://pm1.narvii.com/6060/b6fda369b3559aa7da82bb4986b1243175a9e4fb_hq.jpg'),
        loadImg('https://pm1.narvii.com/6060/fb4ac6c7ff485f12297bd9986cffe8e4319e834a_hq.jpg')
    ]).then(showImgs)
}

{
    //有一个图片加载完就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = () => {
                resolve(img);
            }
            img.onerror = (err) => {
                reject(err);
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('https://i.pinimg.com/564x/4d/25/68/4d2568bc41b91500ee3d395dc600319a.jpg'),
        loadImg('https://i.pinimg.com/originals/48/0e/a2/480ea2c70774a629fd3d6924eee5f127.jpg'),
        loadImg('https://pm1.narvii.com/6060/bed92a715829ef06a8bc9970a7397073df25540a_hq.jpg'),
        loadImg('https://pm1.narvii.com/6060/b6fda369b3559aa7da82bb4986b1243175a9e4fb_hq.jpg'),
        loadImg('https://pm1.narvii.com/6060/fb4ac6c7ff485f12297bd9986cffe8e4319e834a_hq.jpg')
    ]).then(showImgs)
}