use solarSystem;
db.dropDatabase();

var solarSystem = {};

var planets = [];

solarSystem.planets = planets;

// PLANETS ------------------------------------------
var mercury = {
  "Name": "Mercury",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [],

  "mainImage": {
    "label": "Mercury",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
  {
    "label": "Radius",
    "value": "2439.7" + "km"
  },
  {
    "label": "temperatureCelsius",
    "value": 167
  }],

  "description": [
  {
    "type": "paragraph",
    "title": "info on mercury",
    "value": "info on mercury"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]

}

var venus = {
  "Name": "Venus",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [],

  "mainImage": {
    "label": "Venus",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
  {
    "label": "Radius",
    "value": "6051.8" + "km"
  },
  {
    "label": "temperatureCelsius",
    "value": 464
  }],

  "description": [
  {
    "type": "paragraph",
    "title": "info on venus",
    "value": "info on venus"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]

}

var earth = {
  "Name": "Earth",

  "breadCrumbs": [
  {
    "label": "Solar System",
    "link": "localHost:3000/route-to-solar-system-page"
  }
  ],

  "links": [
    {
      "label": "Moon",
      "link": "route to moon "
    }
  ],

  "mainImage": {
    "label": "Earth",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "6378.1 km"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": 16
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on earth",
    "value": "info on earth"
  }],

  "gallery": [
  {
    "label": "image 1",
    "lowRes": "link for low-res image",
    "hiRes": "link for hi-res image"
  }],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var uranus = {
  "Name": "Uranus",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links": [],

  "mainImage": {
    "label": "Uranus",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of A Day",
      "value": "17 hours"
    },
    {
      "label": "Average Temperature In Celsius",
      "value": -357
    },
    {
      "label": "Distance From The Sun",
      "value": "2.871 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Uranus",
    "value": "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have different bulk chemical composition from that of the larger gas giants Jupiter and Saturn. For this reason, scientists often classify Uranus and Neptune as 'ice giants' to distinguish them from the gas giants. Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F), and has a complex, layered cloud structure with water thought to make up the lowest clouds and methane the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock."
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "images/uranus1.png",
      "hiRes": "images/uranus1.png"
    },
    {
      "label": "image 2",
      "lowRes": "images/uranus2.png",
      "hiRes": "images/uranus2.png"
    },
    {
      "label": "image 3",
      "lowRes": "images/uranus3.png",
      "hiRes": "images/uranus3.png"
    },
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

var pluto = {
  "Name": "Pluto",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    }
  ],

  "links":[
    {
      "label": "Styx (moon)",
      "link": "localHost:3000/route-to-request-styx",
    },
    {
      "label": "Kerberos (moon)",
      "link": "localHost:3000/route-to-request-kerberos",
    },
  ],

  "mainImage": {
    "label": "Pluto",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Length Of Day",
      "value": "6.4 Earth days",
    },
    {
      "label": "Radius",
      "value": "1,187 km",
    },
    {
      "label": "Average Distance From The Sun",
      "value": "5.9 billion km",
    },
    {
      "label": "Average Distance From The Earth",
      "value": "7.5 billion km",
    },
  ],

  "description": [
    {
      "type": "paragraph",
      "title": "Styx",
      "value": "Nix is a natural satellite of Pluto. It was discovered along with Hydra (Pluto's outermost satellite) in June 2005. It was imaged along with Pluto and its other moons by the New Horizons spacecraft as it flew by the Pluto system in July 2015. Of the four small Plutonian moons the best pictures are of Nix, with resolutions as high as 330 meters per pixel. The formal name 'Nix', from the Greek goddess of darkness and night and mother of Charon (ferryman of Hades), was announced on 21 June 2006 on IAU Circular 8723, where the designation Pluto II is also given. Nix follows a circular orbit in the same plane as Charon.[2] It is in a 3:2 orbital resonance with Hydra, and a 9:11 resonance with Styx (the ratios represent numbers of orbits completed per unit time; the period ratios are the inverses). As a result of this 'Laplace-like' 3-body resonance, it has conjunctions with Styx and Hydra in a 2:3 ratio."
    },
  ],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "images/pluto1.jpg",
      "highRes": "images/pluto1.jpg"
    },
    {
      "label": "image 2",
      "lowRes": "images/pluto2.png",
      "highRes": "images/pluto2.png"
    },
    {
      "label": "image 3",
      "lowRes": "images/pluto3.jpg",
      "highRes": "images/pluto3.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// URANUS MOONS ------------------------------------------

uranus.moons = [];

var ariel = {
  "Name": "Ariel",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Uranus",
      "link": "localHost:3000/route-to-uranus-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Ariel",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "436,000 km"
    },
    {
      "label": "Orbit Radius",
      "value": "190,900 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "2.8 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Ariel is the fourth-largest of the 27 known moons of Uranus. Ariel orbits and rotates in the equatorial plane of Uranus, which is almost perpendicular to the orbit of Uranus, and so has an extreme seasonal cycle. It was discovered in October 1851 by William Lassell, and named for a character in two different pieces of literature. As of 2012, much of the detailed knowledge of Ariel derives from a single flyby of Uranus performed by the spacecraft Voyager 2 in 1986, which managed to image around 35% of the moon's surface. There are no active plans at present to return to study the moon in more detail, although various concepts such as a Uranus orbiter and probe have been proposed from time to time. After Miranda, Ariel is the second-smallest of Uranus' five major rounded satellites, and the second-closest to its planet. Among the smallest of the Solar System's 19 known spherical moons (it ranks 14th among them in diameter), it is believed to be composed of roughly equal parts ice and rocky material. Its mass is approximately equal in magnitude to Earth's hydrosphere.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "image/ariel1.jpg",
      "hiRes": "image/ariel1.jpg"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

// PLUTO MOONS ------------------------------------------

pluto.moons = [];

var kerberos = {
  "Name": "Kerberos",

  "breadCrumbs": [
    {
      "label": "Solar System",
      "link": "localHost:3000/route-to-solar-system-page"
    },
    {
      "label": "Pluto",
      "link": "localHost:3000/route-to-pluto-page"
    },
  ],

  "links": [],

  "mainImage": {
    "label": "Kerberos",
    "link": "image-link-to-go-here"
  },

  "sideBar": [
    {
      "label": "Radius",
      "value": "606km"
    },
    {
      "label": "Orbit Radius",
      "value": "19,640 km"
    },
    {
      "label": "Distance From The Sun",
      "value": "5.9 billion km"
    }
  ],

  "description": [
  {
    "type": "paragraph",
    "title": "info on Kerberos",
    "value": "Kerberos is a small natural satellite of Pluto, about 12 km (7.5 mi) in its longest dimension. It was the fourth moon of Pluto to be discovered and its existence was announced on 20 July 2011. It was imaged, along with Pluto and its four other moons, by the New Horizons spacecraft in July 2015. The first image of Kerberos was released to the public on 22 October 2015. Kerberos appears to be smaller than scientists expected and has a highly-reflective surface, counter to predictions prior to the Pluto flyby in July. “Once again, the Pluto system has surprised us,” said New Horizons Project Scientist Hal Weaver, of the Johns Hopkins University Applied Physics Laboratory in Laurel, Maryland. The new data, downlinked from the New Horizons spacecraft on Oct. 20, show that Kerberos appears to have a double-lobed shape, with the larger lobe approximately 5 miles (8 kilometers) across and the smaller lobe approximately 3 miles (5 kilometers) across. Science team members speculate from its unusual shape that Kerberos could have been formed by the merger of two smaller objects. The reflectivity of Kerberos’ surface is similar to that of Pluto’s other small moons (approximately 50 percent) and strongly suggests Kerberos, like the others, is coated with relatively clean water ice.",
  }],

  "gallery": [
    {
      "label": "image 1",
      "lowRes": "link for low-res image",
      "hiRes": "link for hi-res image"
    }
  ],

  "facts": ["fact 1", "fact 2", "fact 3"]
}

planets.push(mercury);

planets.push(venus);

planets.push(earth);

planets.push(uranus);
uranus.moons.push(ariel);

planets.push(pluto);
pluto.moons.push(kerberos);

db.solarSystem.insert(solarSystem);