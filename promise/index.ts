// const start = (callback: Function) => {
//     setTimeout(() => {
//         callback('Hello');
//         setTimeout(() => {
//             callback('And Welcome');
//             setTimeout(() => {
//                 callback('Để không đồng bộ đang chờ sử dụng TypeScript ');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }
// start((text: string) => console.log(text));

// const startPromise = (cb: Function) => {
//     return new Promise((res) => {
//         setTimeout(res, 1000, "Hello")
//     })
//         .then((data) => {
//             cb(data)
//             return new Promise((res) => {
//                 setTimeout(res, 1000, "And Welcome")
//             })
//         })
//         .then((data) => {
//             cb(data)
//             return new Promise((res: Function) => {
//                 setTimeout(res, 1000, "To Async Await Using TypeScript")
//             })
//         })
//         .then((data) => {
//             cb(data)
//         })
// }
const wait = <U extends number | string>(time: number, value: U): Promise<string> => {
    return new Promise((res: Function) => {
        setTimeout(res, time, value);
    })
}
const startAsyncAwait = async (cb: Function) => {
    const result1 = await wait(1000, 'Hello');
    cb(result1)
    const result2 = await wait(1000, 'And Welcome');
    cb(result2);
    const result3 = await wait(1000, 'To Async Await Using TypeScript');
    cb(result3);
}
startAsyncAwait((text: string) => console.log(text))
// export { }

// Promise.all

type TypeGetHero = {
    key: keyof typeof hero
}

const hero = {
    superman: {
        name: 'Superman',
        alias: 'Clark Kent',
    },
    batman: {
        name: 'Batman',
        alias: 'Bruce Wayne',
    },
    flash: {
        name: 'The Flash',
        alias: 'Barry Allen',
    },
};
function getHero(handle: TypeGetHero): Promise<{ name: string, alias: string }> {
    return new Promise((res: Function) => {
        setTimeout(res, 1000, hero[handle.key]);
    })
}
const keyHero: string[] = [
    'superman',
    'batman',
    'flash'
]

const listPromise: Array<Promise<{ name: string, alias: string }>> = keyHero.map((el: any) => {
    console.log(el)
    return getHero({ key: el })
});


async function getHeros() {
    const result: Array<{ name: string, alias: string }> = await Promise.all(listPromise);
    console.log(result)
}
getHeros()