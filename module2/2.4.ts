{
  //
  // generic type with (interface)
  //interface --> generic

  interface Developer<T, X = null> {
    name: string;
    laptop: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Apple1 = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<Apple1> = {
    name: "Nahid",
    laptop: {
      brand: "accer",
      model: "accer-4",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "m-2",
      display: "amoled",
    },
  };

  interface Apple2 {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: "Yamaha";
    engineCapacity: "100cc";
  }

  const richDeveloper: Developer<Apple2, YamahaBike> = {
    name: "Rich Man",
    laptop: {
      brand: "accer",
      model: "accer-4",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple-2",
      model: "m-2 pro",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
