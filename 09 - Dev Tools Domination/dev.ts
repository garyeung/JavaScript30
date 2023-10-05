
    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p!.style.color = '#BADA55';
      p!.style.fontSize = '50px';
    }

    // Regular
    const interString = dogs[0].name;
    console.log(dogs);
    // Interpolated
    console.log('This is a dog called %s', interString);

    // Styledp
    console.log('%c I don\'t know I can style console message before', 'font-size: 30px; color: red;');

    // warning!
    console.warn('TAKE CARE!!!');

    // Error :|
    console.error("You can't drink water using your shoe");

    // Info
    console.info("You are doing well");

    // Testing
    const p = document.querySelector("p");
    console.assert(p?.classList.contains("green"), 'There is no class name called green in p element');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach((dog) => {
        console.group(`${dog.name}`);
        console.log(`This is ${dog.name}.`);
        console.log(`${dog.name} is ${dog.age} years old.`)
        console.groupEnd();
    })

    // counting
    const a = "call me A";
    const b = "call me B";
    const abArray = [a,b];
    for(let i = 0; i< 10; i++){
        let coin = Math.round(Math.random());
        console.count(`${abArray[coin]}`);
    }

    // timing
    const fetcingData = 'fedtcing data';
    console.time(fetcingData);
    fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then((data) => {
        console.timeEnd(fetcingData);
        console.table(data);
    });
