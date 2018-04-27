function fn(a, b) {
    return new Promise(function (resolve, reject) {
        if (a === b) {
            resolve();
        } else {
            reject();
        }
    });
}


btn.addEventListener('click', () => {
    fn(2, 2)
        .then(() => fn(5, 4),
            () => {
                console.log('Резолв1 разрешился НЕ успешно!');
                fn(5, 4)
            })
        .then(() => fn(8, 8),
            () => {
                console.log('Резолв2 разрешился НЕ успешно!');
                fn(8, 8)
            })
        .then(() => fn(7, 7),
            () => {
                console.log('Резолв3 разрешился НЕ успешно!');
                fn(7, 7)
            })
        .then(() => fn(5, 5), () => console.log('Резолв4 разрешился НЕ успешно!!!'));
});