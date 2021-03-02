var creatures = [
  {
    "name":"Rabbit",
    "img":"https://wiki.mediviastats.info/images/b/b1/Rabbit.gif",
    "health":15,
    "experience":0,
    "skin":[
      {
        "name":"Rabbit Ear",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Carrot",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Dog",
    "img":"https://wiki.mediviastats.info/images/9/99/Dog.gif",
    "health":20,
    "experience":0,
    "skin":[
      {
        "name":"Dog Head",
        "value":0
      }
    ],
    "loot":[]
  },
  {
    "name":"Sheep",
    "img":"https://wiki.mediviastats.info/images/2/2b/Sheep.gif",
    "health":20,
    "experience":0,
    "skin":[
      {
        "name":"White Wool",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Black Sheep",
    "img":"https://wiki.mediviastats.info/images/1/15/Black_sheep.png",
    "health":20,
    "experience":0,
    "skin":[
      {
        "name":"Black Wool",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Deer",
    "img":"https://wiki.mediviastats.info/images/2/27/Deer.png",
    "health":25,
    "experience":0,
    "skin":[
      {
        "name":"Antlers",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      }
    ]
  },
  {
    "name":"Pig",
    "img":"https://wiki.mediviastats.info/images/8/8d/Pig.gif",
    "health":25,
    "experience":0,
    "skin":[
      {
        "name":"Pig Tail",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Small Spider",
    "img":"https://wiki.mediviastats.info/images/8/84/Spider.png",
    "health":10,
    "experience":4,
    "skin":[
      {
        "name":"Spiderling Remains",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Injured Rat",
    "img":"https://wiki.mediviastats.info/images/8/8b/Rat.png",
    "health":15,
    "experience":8,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Rat",
    "img":"https://wiki.mediviastats.info/images/8/8b/Rat.png",
    "health":20,
    "experience":10,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cheese",
        "value":0
      }
    ]
  },
  {
    "name":"Snake",
    "img":"https://wiki.mediviastats.info/images/3/32/Snake.gif",
    "health":15,
    "experience":20,
    "skin":[
      {
        "name":"Snake Tongue",
        "value":0
      }
    ],
    "loot":[]
  },
  {
    "name":"Cave Rat",
    "img":"https://wiki.mediviastats.info/images/f/fb/Cave_Rat.gif",
    "health":30,
    "experience":20,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cheese",
        "value":0
      },
      {
        "name":"Cookie",
        "value":0
      }
    ]
  },
  {
    "name":"Spider",
    "img":"https://wiki.mediviastats.info/images/8/84/Spider.png",
    "health":20,
    "experience":24,
    "skin":[
      {
        "name":"Spiderling Remains",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Bee",
    "img":"https://wiki.mediviastats.info/images/5/56/Bee.png",
    "health":30,
    "experience":26,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Wasp",
    "img":"https://wiki.mediviastats.info/images/f/f8/Wasp.png",
    "health":35,
    "experience":30,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Wolf",
    "img":"https://wiki.mediviastats.info/images/c/c8/Wolf.png",
    "health":25,
    "experience":36,
    "skin":[
      {
        "name":"Wolf Paw",
        "value":0
      }
    ],
    "loot":[]
  },
  {
    "name":"Bug",
    "img":"https://wiki.mediviastats.info/images/7/7d/Bug.png",
    "health":29,
    "experience":36,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cherry",
        "value":0
      }
    ]
  },
  {
    "name":"Winter Wolf",
    "img":"https://wiki.mediviastats.info/images/e/e4/Winter_wolf.png",
    "health":30,
    "experience":40,
    "skin":[
      {
        "name":"Winter Wolf Paw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Troll",
    "img":"https://wiki.mediviastats.info/images/1/11/Troll.gif",
    "health":50,
    "experience":40,
    "skin":[
      {
        "name":"Brown Troll Hair",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Leather Helmet",
        "value":4
      },
      {
        "name":"Rope",
        "value":15
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Hand Axe",
        "value":4
      },
      {
        "name":"Wooden Shield",
        "value":5
      },
      {
        "name":"Studded Club",
        "value":0
      },
      {
        "name":"Silver Amulet",
        "value":50
      }
    ]
  },
  {
    "name":"Hyaena",
    "img":"https://wiki.mediviastats.info/images/f/fc/Hyeana.png",
    "health":60,
    "experience":40,
    "skin":[
      {
        "name":"Hyaena fang",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Poison Spider",
    "img":"https://wiki.mediviastats.info/images/d/de/Poison_Spider.gif",
    "health":26,
    "experience":44,
    "skin":[
      {
        "name":"Spiderling Remains",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Frost Troll",
    "img":"https://wiki.mediviastats.info/images/2/26/Frost_troll.png",
    "health":55,
    "experience":46,
    "skin":[
      {
        "name":"Blue Troll Hair",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fish",
        "value":0
      },
      {
        "name":"Rapier",
        "value":5
      },
      {
        "name":"Snow Boots",
        "value":0
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Wooden Shield",
        "value":5
      },
      {
        "name":"Coat",
        "value":0
      },
      {
        "name":"Twigs",
        "value":0
      }
    ]
  },
  {
    "name":"Bee Drone",
    "img":"https://wiki.mediviastats.info/images/c/ca/Bee_Drone.png",
    "health":65,
    "experience":46,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Bear",
    "img":"https://wiki.mediviastats.info/images/a/a4/Bear.png",
    "health":80,
    "experience":46,
    "skin":[
      {
        "name":"Bear Paw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Nether Spiderling",
    "img":"https://wiki.mediviastats.info/images/b/bd/Nether_Spider_Small.gif",
    "health":30,
    "experience":48,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Goblin",
    "img":"https://wiki.mediviastats.info/images/3/38/Goblinik.png",
    "health":50,
    "experience":50,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fish",
        "value":0
      },
      {
        "name":"Short Sword",
        "value":10
      },
      {
        "name":"Small Axe",
        "value":5
      },
      {
        "name":"Small Stone",
        "value":0
      },
      {
        "name":"Bone Club",
        "value":0
      },
      {
        "name":"Leather Armor",
        "value":12
      },
      {
        "name":"Bone",
        "value":0
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Leather Helmet",
        "value":4
      },
      {
        "name":"Mouldy Cheese",
        "value":0
      }
    ]
  },
  {
    "name":"Swamp Troll",
    "img":"https://wiki.mediviastats.info/images/b/bf/Swamp_Troll.gif",
    "health":55,
    "experience":50,
    "skin":[
      {
        "name":"Green Troll Hair",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fish",
        "value":0
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Mouldy Cheese",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Fishing Rod",
        "value":40
      }
    ]
  },
  {
    "name":"Orc",
    "img":"https://wiki.mediviastats.info/images/2/21/Orc.gif",
    "health":70,
    "experience":50,
    "skin":[
      {
        "name":"Patch of Orc Skin",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Studded Armor",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Studded Shield",
        "value":0
      },
      {
        "name":"Sabre",
        "value":12
      },
      {
        "name":"Axe",
        "value":7
      }
    ]
  },
  {
    "name":"Polar Bear",
    "img":"https://wiki.mediviastats.info/images/1/1a/Polar_bear.png",
    "health":85,
    "experience":56,
    "skin":[
      {
        "name":"Polar Bear Paw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Cobra",
    "img":"https://wiki.mediviastats.info/images/0/0e/Cobra.png",
    "health":65,
    "experience":60,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Lion",
    "img":"https://wiki.mediviastats.info/images/4/47/Lion.png",
    "health":80,
    "experience":60,
    "skin":[
      {
        "name":"Lion Mane",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      }
    ]
  },
  {
    "name":"Crystal Worker",
    "img":"https://wiki.mediviastats.info/images/7/71/Crystal_bug.png",
    "health":35,
    "experience":70,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Aquamarine",
        "value":350
      }
    ]
  },
  {
    "name":"Skeleton",
    "img":"https://wiki.mediviastats.info/images/7/72/Skeleton.gif",
    "health":50,
    "experience":70,
    "skin":[
      {
        "name":"Shattered skullz",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Hatchet",
        "value":25
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Sword",
        "value":25
      },
      {
        "name":"Viking Helmet",
        "value":66
      },
      {
        "name":"Bone",
        "value":0
      }
    ]
  },
  {
    "name":"Bat",
    "img":"https://wiki.mediviastats.info/images/a/ad/Bat.png",
    "health":50,
    "experience":70,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Sand Troll",
    "img":"https://wiki.mediviastats.info/images/e/e0/Sand_Troll.gif",
    "health":60,
    "experience":70,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Club",
        "value":1
      },
      {
        "name":"Jacket",
        "value":0
      },
      {
        "name":"Wooden Shield",
        "value":5
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Rapier",
        "value":5
      }
    ]
  },
  {
    "name":"Orc Spearman",
    "img":"https://wiki.mediviastats.info/images/c/ca/Orc_Spearman.gif",
    "health":105,
    "experience":76,
    "skin":[
      {
        "name":"Blue beater",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Studded Legs",
        "value":0
      },
      {
        "name":"Machete",
        "value":0
      },
      {
        "name":"Dirty Fur",
        "value":0
      }
    ]
  },
  {
    "name":"Rotworm",
    "img":"https://wiki.mediviastats.info/images/9/9f/Rotworm.png",
    "health":65,
    "experience":80,
    "skin":[
      {
        "name":"Rotworm mouth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Sword",
        "value":25
      },
      {
        "name":"Legion Helmet",
        "value":8
      },
      {
        "name":"Copper Shield",
        "value":0
      },
      {
        "name":"Katana",
        "value":8
      }
    ]
  },
  {
    "name":"Elf",
    "img":"https://wiki.mediviastats.info/images/8/89/Elf.png",
    "health":100,
    "experience":84,
    "skin":[
      {
        "name":"Elf Ear",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Studded Armor",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Longsword",
        "value":51
      }
    ]
  },
  {
    "name":"Larva",
    "img":"https://wiki.mediviastats.info/images/4/4f/Larva.gif",
    "health":70,
    "experience":88,
    "skin":[
      {
        "name":"Larva eggs",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      }
    ]
  },
  {
    "name":"Scorpion",
    "img":"https://wiki.mediviastats.info/images/f/f9/Scorpion.gif",
    "health":45,
    "experience":90,
    "skin":[
      {
        "name":"Scorpion Tail",
        "value":0
      }
    ],
    "loot":[]
  },
  {
    "name":"Dwarf",
    "img":"https://wiki.mediviastats.info/images/7/73/Dwarf.gif",
    "health":90,
    "experience":90,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Axe",
        "value":7
      },
      {
        "name":"Hatchet",
        "value":25
      },
      {
        "name":"Shovel",
        "value":0
      },
      {
        "name":"Studded Armor",
        "value":0
      },
      {
        "name":"Copper Shield",
        "value":0
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Letter",
        "value":0
      },
      {
        "name":"Dwarven Ring",
        "value":100
      }
    ]
  },
  {
    "name":"Mud Wasp",
    "img":"https://wiki.mediviastats.info/images/1/1e/Mud_Wasp.png",
    "health":70,
    "experience":98,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Sand Spider",
    "img":"https://wiki.mediviastats.info/images/1/1c/Sand_Spider.gif",
    "health":70,
    "experience":100,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
    ]
  },
  {
    "name":"Minotaur",
    "img":"https://wiki.mediviastats.info/images/9/95/Minotaur.gif",
    "health":100,
    "experience":100,
    "skin":[
      {
        "name":"Minotaur Horns",
        "value":0
      },
      {
        "name":"Minotaur Head",
        "value":0
      },
      {
        "name":"Brown leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Axe",
        "value":7
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Brass Helmet",
        "value":30
      },
      {
        "name":"Plate Shield",
        "value":45
      },
      {
        "name":"Sword",
        "value":25
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Shovel",
        "value":0
      },
      {
        "name":"Bronze Amulet",
        "value":50
      },
      {
        "name":"Minotaur Hoof",
        "value":0
      }
    ]
  },
  {
    "name":"Orc Warrior",
    "img":"https://wiki.mediviastats.info/images/9/94/Orc_Warrior.gif",
    "health":125,
    "experience":100,
    "skin":[
      {
        "name":"Iron Headpiece",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Leather beater",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Wooden Shield",
        "value":5
      },
      {
        "name":"Sabre",
        "value":12
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Studded Club",
        "value":0
      },
      {
        "name":"Poison Dagger",
        "value":50
      }
    ]
  },
  {
    "name":"Maggot",
    "img":"https://wiki.mediviastats.info/images/0/08/Maggot.png",
    "health":65,
    "experience":110,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      }
	]
  },
  {
    "name":"Tortoise",
    "img":"https://wiki.mediviastats.info/images/5/5c/Tortoise.gif",
    "health":100,
    "experience":110,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Tortoise Boots",
        "value":0
      }
    ]
  },
  {
    "name":"War Wolf",
    "img":"https://wiki.mediviastats.info/images/a/a4/War_Wolf.gif",
    "health":140,
    "experience":110,
    "skin":[
      {
        "name":"War Wolf Paw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      }
    ]
  },
  {
    "name":"Wild Warrior",
    "img":"https://wiki.mediviastats.info/images/2/2b/Wildwarriorek.png",
    "health":120,
    "experience":120,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Axe",
        "value":7
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Doll",
        "value":0
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"War Hammer",
        "value":1200
      }
    ]
  },
  {
    "name":"Amazon",
    "img":"https://wiki.mediviastats.info/images/5/53/Amazonka.png",
    "health":110,
    "experience":120,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Sabre",
        "value":12
      },
      {
        "name":"Brown Bread",
        "value":0
      },
      {
        "name":"Leather Armor",
        "value":12
      },
      {
        "name":"Studded Shield",
        "value":0
      },
      {
        "name":"Crystal Necklace",
        "value":190
      },
      {
        "name":"Small Ruby",
        "value":250
      }
    ]
  },
  {
    "name":"Rebelling Elf",
    "img":"https://wiki.mediviastats.info/images/8/89/Elf.png",
    "health":null,
    "experience":null,
    "skin":[],
    "loot":[
      {
        "name":"Twigs",
        "value":0
      },
      {
        "name":"Turkey",
        "value":0
      },
      {
        "name":"Brownie",
        "value":0
      },
      {
        "name":"Christmas Light",
        "value":0
      },
      {
        "name":"Green Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Green Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Grey Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Grey Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Red Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Red Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Purple Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Purple Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Grey Christmas Card",
        "value":0
      },
      {
        "name":"Purple Christmas Card",
        "value":0
      },
      {
        "name":"Fancy Hat",
        "value":0
      },
      {
        "name":"Big Snowball",
        "value":0
      },
      {
        "name":"Carrot Nose",
        "value":0
      },
      {
        "name":"Red Scarf",
        "value":0
      },
      {
        "name":"Lump of Coal",
        "value":0
      },
      {
        "name":"Christmas Ball",
        "value":0
      },
      {
        "name":"Christmas Star",
        "value":0
      },
      {
        "name":"Stone Golem Doll",
        "value":0
      },
      {
        "name":"Dragon Doll",
        "value":0
      },
      {
        "name":"Fire Devil Doll",
        "value":0
      },
      {
        "name":"Giant Spider Doll",
        "value":0
      },
      {
        "name":"Cyclops Doll",
        "value":0
      }
    ]
  },
  {
    "name":"Grinsh",
    "img":"https://wiki.mediviastats.info/images/4/48/Grinsh.png",
    "health":null,
    "experience":null,
    "skin":[],
    "loot":[
      {
        "name":"Lemon Icecream",
        "value":0
      },
      {
        "name":"Raspberry Icecream",
        "value":0
      },
      {
        "name":"Blueberry Icecream",
        "value":0
      },
      {
        "name":"Strawberry Icecream",
        "value":0
      },
      {
        "name":"Turkey",
        "value":0
      },
      {
        "name":"Brownie",
        "value":0
      },
      {
        "name":"Green Christmas Hat",
        "value":0
      },
      {
        "name":"Red Christmas Hat",
        "value":0
      },
      {
        "name":"Dark Green Christmas Hat",
        "value":0
      },
      {
        "name":"Red Socks",
        "value":0
      },
      {
        "name":"Green Socks",
        "value":0
      },
      {
        "name":"Purple Socks",
        "value":0
      },
      {
        "name":"Colorful Socks",
        "value":0
      },
      {
        "name":"Green Christmas Sweater",
        "value":0
      },
      {
        "name":"Red Christmas Sweater",
        "value":0
      },
      {
        "name":"Purple Christmas Sweater",
        "value":0
      },
      {
        "name":"Grey Christmas Card",
        "value":0
      },
      {
        "name":"Purple Christmas Card",
        "value":0
      },
      {
        "name":"Purple Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Purple Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Green Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Green Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Grey Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Grey Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Red Christmas Tapestry 1",
        "value":0
      },
      {
        "name":"Red Christmas Tapestry 2",
        "value":0
      },
      {
        "name":"Christmas Light",
        "value":0
      },
      {
        "name":"Christmas Ball",
        "value":0
      },
      {
        "name":"Christmas Star",
        "value":0
      },
      {
        "name":"Grinsh Doll",
        "value":0
      }
    ]
  },
  {
    "name":"Minotaur Archer",
    "img":"https://wiki.mediviastats.info/images/9/9d/Minotaur_Archer.gif",
    "health":100,
    "experience":130,
    "skin":[
      {
        "name":"Minotaur Horns",
        "value":0
      },
      {
        "name":"Minotaur Head",
        "value":0
      },
      {
        "name":"Brown leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Bolt",
        "value":0
      },
      {
        "name":"Hunting Bolt",
        "value":0
      },
      {
        "name":"Crossbow",
        "value":160
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Chain Legs",
        "value":25
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Soldier Helmet",
        "value":16
      },
      {
        "name":"Minotaur Hoof",
        "value":0
      }
    ]
  },
  {
    "name":"Bandit",
    "img":"https://wiki.mediviastats.info/images/d/d4/Bandit.gif",
    "health":245,
    "experience":130,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Axe",
        "value":7
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Chain Helmet",
        "value":17
      }
    ]
  },
  {
    "name":"Dwarf Soldier",
    "img":"https://wiki.mediviastats.info/images/6/6c/Dwarf_Soldier.gif",
    "health":135,
    "experience":140,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Soldier Helmet",
        "value":16
      },
      {
        "name":"Dwarven Shield",
        "value":100
      },
      {
        "name":"Crossbow",
        "value":160
      },
      {
        "name":"Battle Axe",
        "value":80
      },
      {
        "name":"Bolt",
        "value":0
      },
      {
        "name":"Hunting Bolt",
        "value":0
      },
      {
        "name":"Shovel",
        "value":0
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Axe Ring",
        "value":100
      }
    ]
  },
  {
    "name":"Elf Scout",
    "img":"https://wiki.mediviastats.info/images/f/f3/Elf_scout.png",
    "health":160,
    "experience":150,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Poison Arrow",
        "value":0
      },
      {
        "name":"Grapes",
        "value":0
      },
      {
        "name":"Sandals",
        "value":0
      },
      {
        "name":"Studded Armor",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Elven Bow",
        "value":500
      }
    ]
  },
  {
    "name":"Mutated Rat",
    "img":"https://wiki.mediviastats.info/images/c/c4/Mutated_Rat.gif",
    "health":150,
    "experience":160,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cheese",
        "value":0
      },
      {
        "name":"Poison Dagger",
        "value":50
      }
    ]
  },
  {
    "name":"Ghoul",
    "img":"https://wiki.mediviastats.info/images/5/5a/Ghoul.gif",
    "health":100,
    "experience":170,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Brass Helmet",
        "value":30
      },
      {
        "name":"Viking Helmet",
        "value":66
      },
      {
        "name":"Knife",
        "value":0
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Life Ring",
        "value":100
      }
    ]
  },
  {
    "name":"Valkyrie",
    "img":"https://wiki.mediviastats.info/images/6/67/Valkyria.png",
    "health":190,
    "experience":170,
    "skin":[
      {
        "name":"Patch of armor steel",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Crystal Necklace",
        "value":190
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Double Axe",
        "value":260
      }
    ]
  },
  {
    "name":"Eye of Shadow",
    "img":"https://wiki.mediviastats.info/images/5/54/Eye_of_Shadow.gif",
    "health":120,
    "experience":180,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Throwing Knife",
        "value":0
      },
      {
        "name":"Blank Rune",
        "value":0
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Obsidian Lance",
        "value":500
      },
      {
        "name":"Katana",
        "value":8
      }
    ]
  },
  {
    "name":"Crocodile",
    "img":"https://wiki.mediviastats.info/images/d/d6/Crocodile.png",
    "health":140,
    "experience":180,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      }
    ]
  },
  {
    "name":"Crewman",
    "img":"https://wiki.mediviastats.info/images/3/3d/Crewman.png",
    "health":185,
    "experience":190,
    "skin":[],
    "loot":[
      {
        "name":"Pirate Sabre",
        "value":95
      },
      {
        "name":"Cursed Gold Coin",
        "value":250
      },
      {
        "name":"Pirate Eye Patch",
        "value":1000
      },
      {
        "name":"Worn out Pirate Tabard",
        "value":100
      },
      {
        "name":"Pirate Hand Hook",
        "value":1500
      }
    ]
  },
  {
    "name":"Alpha Wolf",
    "img":"https://wiki.mediviastats.info/images/6/6a/Alpha_Wolf.gif",
    "health":340,
    "experience":280,
    "skin":[
      {
        "name":"War Wolf Paw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Alpha Wolf Fang",
        "value":0
      },
      {
        "name":"Alpha Wolf Tooth Chain",
        "value":1000
      }
    ]
  },
  {
    "name":"Valkyrie Cavalry",
    "img":"https://wiki.mediviastats.info/images/b/ba/Valkyrie_Cavalry.gif",
    "health":270,
    "experience":216,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Headhunter Spear",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Plate Armor",
        "value":400
      }
    ]
  },
  {
    "name":"Orc Shaman",
    "img":"https://wiki.mediviastats.info/images/9/9f/Orc_Shaman.gif",
    "health":115,
    "experience":220,
    "skin":[
      {
        "name":"Patch of Orc Skin",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Snake",
        "value":0
      },
      {
        "name":"Corncob",
        "value":0
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Staff",
        "value":1
      },
      {
        "name":"Grey Small Book",
        "value":0
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Blue Spellwand",
        "value":0
      },
      {
        "name":"Orcish Tome",
        "value":0
      }
    ]
  },
  {
    "name":"Orc Rider",
    "img":"https://wiki.mediviastats.info/images/6/67/Orcrider.gif",
    "health":180,
    "experience":220,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Backpack",
        "value":0
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      },
      {
        "name":"Orcish Axe",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Obsidian Lance",
        "value":500
      },
      {
        "name":"Scale Armor",
        "value":75
      }
    ]
  },
  {
    "name":"Fire Devil",
    "img":"https://wiki.mediviastats.info/images/0/02/Fire_devil.png",
    "health":200,
    "experience":220,
    "skin":[
      {
        "name":"Devils Tail",
        "value":0
      },
      {
        "name":"Diabolic Claw",
        "value":0
      },
      {
        "name":"Red leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Blank Rune",
        "value":0
      },
      {
        "name":"Scimitar",
        "value":150
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Guardian Shield",
        "value":2000
      },
      {
        "name":"Red Spellwand",
        "value":0
      }
    ]
  },
  {
    "name":"Waterblob",
    "img":"https://wiki.mediviastats.info/images/7/74/Waterblob.gif",
    "health":260,
    "experience":220,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Ghost",
    "img":"https://wiki.mediviastats.info/images/a/ab/Ghost.gif",
    "health":150,
    "experience":240,
    "skin":[],
    "loot":[
      {
        "name":"Sandals",
        "value":0
      },
      {
        "name":"Shadow Herb",
        "value":0
      },
      {
        "name":"Cape",
        "value":0
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Combat Knife",
        "value":0
      },
      {
        "name":"Orange Book",
        "value":0
      },
      {
        "name":"Ancient Shield",
        "value":900
      },
      {
        "name":"Stealth Ring",
        "value":200
      },
      {
        "name":"Golden Wand",
        "value":0
      }
    ]
  },
  {
    "name":"Witch",
    "img":"https://wiki.mediviastats.info/images/a/ae/Witch.gif",
    "health":300,
    "experience":240,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cookie",
        "value":0
      },
      {
        "name":"Silver Dagger",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Coat",
        "value":0
      },
      {
        "name":"Cape",
        "value":0
      },
      {
        "name":"Cheese",
        "value":0
      },
      {
        "name":"Star Herb",
        "value":0
      },
      {
        "name":"Sickle",
        "value":3
      },
      {
        "name":"Garlic Necklace",
        "value":50
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      },
      {
        "name":"Exquisite Bluegill Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Crystal Bug",
    "img":"https://wiki.mediviastats.info/images/b/b6/Crystal_beetle.png",
    "health":320,
    "experience":240,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Aquamarine",
        "value":350
      }
    ]
  },
  {
    "name":"Scarab",
    "img":"https://wiki.mediviastats.info/images/e/e7/Scarab.gif",
    "health":320,
    "experience":240,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Scarab Coin",
        "value":150
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Heavy Machete",
        "value":0
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Shakirian Mace",
        "value":0
      }
    ]
  },
  {
    "name":"Killer Wasp",
    "img":"https://wiki.mediviastats.info/images/2/27/Killer_Wasp.png",
    "health":175,
    "experience":250,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Hunter",
    "img":"https://wiki.mediviastats.info/images/d/d0/Hunterek.png",
    "health":150,
    "experience":300,
    "skin":[],
    "loot":[
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Orange",
        "value":0
      },
      {
        "name":"Roll",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Brass Helmet",
        "value":30
      },
      {
        "name":"Leather Helmet",
        "value":4
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Dragon Necklace",
        "value":100
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Sweet Maris Feast",
        "value":0
      },
      {
        "name":"Batfish Meal",
        "value":0
      },
      {
        "name":"Green Tunic",
        "value":0
      }
    ]
  },
  {
    "name":"Minotaur Mage",
    "img":"https://wiki.mediviastats.info/images/f/f6/Minotaur_Mage.gif",
    "health":155,
    "experience":300,
    "skin":[
      {
        "name":"Minotaur Horns",
        "value":0
      },
      {
        "name":"Minotaur Head",
        "value":0
      },
      {
        "name":"Brown leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Carrot",
        "value":0
      },
      {
        "name":"Combat Knife",
        "value":0
      },
      {
        "name":"Snake",
        "value":0
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Leather Helmet",
        "value":4
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Knife",
        "value":0
      },
      {
        "name":"Chain Legs",
        "value":25
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Minotaur Hoof",
        "value":0
      },
      {
        "name":"Minotaur Tome",
        "value":0
      }
    ]
  },
  {
    "name":"Mummy",
    "img":"https://wiki.mediviastats.info/images/d/dd/Mummy.gif",
    "health":240,
    "experience":300,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Short Sword",
        "value":10
      },
      {
        "name":"Magic Light Wand",
        "value":35
      },
      {
        "name":"Strange Talisman",
        "value":30
      },
      {
        "name":"Silver Brooch",
        "value":0
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Black Shield",
        "value":800
      }
    ]
  },
  {
    "name":"Gargoyle",
    "img":"https://wiki.mediviastats.info/images/4/44/Gargoyle.png",
    "health":250,
    "experience":300,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Stone",
        "value":0
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      }
    ]
  },
  {
    "name":"Cyclops",
    "img":"https://wiki.mediviastats.info/images/a/a9/Cyclops.png",
    "health":260,
    "experience":300,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Short Sword",
        "value":10
      },
      {
        "name":"Plate Shield",
        "value":45
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      }
    ]
  },
  {
    "name":"Slime",
    "img":"https://wiki.mediviastats.info/images/8/82/Slime.gif",
    "health":150,
    "experience":320,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Minotaur Guard",
    "img":"https://wiki.mediviastats.info/images/9/9b/Minoguard.gif",
    "health":185,
    "experience":320,
    "skin":[
      {
        "name":"Minotaur Horns",
        "value":0
      },
      {
        "name":"Minotaur Head",
        "value":0
      },
      {
        "name":"Brown leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Fishing Rod",
        "value":40
      },
      {
        "name":"Minotaur Hoof",
        "value":0
      },
      {
        "name":"Double Axe",
        "value":260
      }
    ]
  },
  {
    "name":"Stone Golem",
    "img":"https://wiki.mediviastats.info/images/8/83/Stone_Golem.gif",
    "health":270,
    "experience":320,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Stone",
        "value":0
      },
      {
        "name":"Power Ring",
        "value":50
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Carlin Sword",
        "value":118
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Red Gem",
        "value":0
      }
    ]
  },
  {
    "name":"Dwarf Slayer",
    "img":"https://wiki.mediviastats.info/images/3/34/Dwarf_Slayer.gif",
    "health":220,
    "experience":330,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Axe Ring",
        "value":100
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Spicy Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Dwarf Guard",
    "img":"https://wiki.mediviastats.info/images/f/f6/Dwarf_Guard.gif",
    "health":245,
    "experience":330,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Axe Ring",
        "value":100
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Spicy Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Watcher",
    "img":"https://wiki.mediviastats.info/images/5/55/Beholder.gif",
    "health":260,
    "experience":340,
    "skin":[
      {
        "name":"Giant Eye",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Wooden Shield",
        "value":5
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Watcher Shield",
        "value":1200
      }
    ]
  },
  {
    "name":"Elf Arcanist",
    "img":"https://wiki.mediviastats.info/images/e/e6/Elf_arcanist.png",
    "health":220,
    "experience":350,
    "skin":[
      {
        "name":"Tear of nature",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Sandals",
        "value":0
      },
      {
        "name":"Tiny Melon",
        "value":0
      },
      {
        "name":"Bread",
        "value":0
      },
      {
        "name":"Green Tunic",
        "value":0
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Elven Amulet",
        "value":100
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Yellow Gem",
        "value":0
      },
      {
        "name":"Elf Tome",
        "value":0
      },
      {
        "name":"Exquisite Bluegill Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Skeleton Archer",
    "img":"https://wiki.mediviastats.info/images/0/09/Skeleton_archer.png",
    "health":245,
    "experience":360,
    "skin":[
      {
        "name":"Shoulder armorstrap",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Leather Helmet",
        "value":4
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Quiver",
        "value":0
      }
    ]
  },
  {
    "name":"Orc Bowman",
    "img":"https://wiki.mediviastats.info/images/a/a1/Orc_Bowman.gif",
    "health":250,
    "experience":360,
    "skin":[
      {
        "name":"Iron headpiece",
        "value":0
      },
      {
        "name":"Orc head",
        "value":0
      },
      {
        "name":"Leather beater",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Studded Legs",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Dirty Fur",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Spear",
        "value":3
      },
      {
        "name":"Machete",
        "value":0
      }
    ]
  },
  {
    "name":"Swashbuckler",
    "img":"https://wiki.mediviastats.info/images/8/88/Swashbuckler.png",
    "health":400,
    "experience":360,
    "skin":[],
    "loot":[
      {
        "name":"Pirate Sabre",
        "value":95
      },
      {
        "name":"Worn out Pirate Beater",
        "value":200
      },
      {
        "name":"Cursed Gold Coin",
        "value":250
      },
      {
        "name":"Pirate Eye Patch",
        "value":1000
      },
      {
        "name":"Pirate Bandana",
        "value":15000
      }
    ]
  },
  {
    "name":"Elf Guardian",
    "img":"https://wiki.mediviastats.info/images/5/5b/Elf_Guardian.gif",
    "health":300,
    "experience":360,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Studded Helmet",
        "value":0
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Brass Shield",
        "value":16
      },
      {
        "name":"Studded Armor",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Guardian Shield",
        "value":2000
      },
      {
        "name":"Baked Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Ice Elemental",
    "img":"https://wiki.mediviastats.info/images/d/d5/Ice_elemental.png",
    "health":330,
    "experience":380,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Heavy Frozen Missile",
        "value":0
      }
    ]
  },
  {
    "name":"Orc Berserker",
    "img":"https://wiki.mediviastats.info/images/1/16/Orc_Berserker.gif",
    "health":210,
    "experience":390,
    "skin":[
      {
        "name":"Patch of Orc Skin",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Battle Axe",
        "value":80
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Chain Helmet",
        "value":17
      },
      {
        "name":"Exquisite Sweet Puffer Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Pumpkin Warrior",
    "img":"https://wiki.mediviastats.info/images/5/5a/Halloween_Skeleton.png",
    "health":300,
    "experience":null,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Crypt Shambler",
    "img":"https://wiki.mediviastats.info/images/b/bd/Cryptshambler.gif",
    "health":330,
    "experience":390,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Bone Shield",
        "value":100
      },
      {
        "name":"Bone Sword",
        "value":0
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Small Diamond",
        "value":300
      }
    ]
  },
  {
    "name":"Slave Hunter",
    "img":"https://wiki.mediviastats.info/images/8/82/Slave_Hunter.gif",
    "health":450,
    "experience":420,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Shakirian Arrow",
        "value":0
      },
      {
        "name":"Mystic Turban",
        "value":1000
      },
      {
        "name":"Shakirian Bow",
        "value":32000
      }
    ]
  },
  {
    "name":"Green Djinn",
    "img":"https://wiki.mediviastats.info/images/0/0b/Green_djinn.png",
    "health":330,
    "experience":430,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cheese",
        "value":0
      },
      {
        "name":"Grave Flower",
        "value":0
      },
      {
        "name":"Small Oil Lamp",
        "value":0
      },
      {
        "name":"Green Book",
        "value":0
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Mystic Turban",
        "value":1000
      }
    ]
  },
  {
    "name":"Blue Djinn",
    "img":"https://wiki.mediviastats.info/images/6/60/Blue_djinn.png",
    "health":330,
    "experience":430,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Carrot",
        "value":0
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Blue Book",
        "value":0
      },
      {
        "name":"Small Oil Lamp",
        "value":0
      },
      {
        "name":"Blue Rose",
        "value":0
      },
      {
        "name":"Mystic Turban",
        "value":1000
      }
    ]
  },
  {
    "name":"Monk",
    "img":"https://wiki.mediviastats.info/images/4/44/Monk.png",
    "health":240,
    "experience":400,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Power Ring",
        "value":50
      },
      {
        "name":"Leather Armor",
        "value":12
      },
      {
        "name":"Sandals",
        "value":0
      },
      {
        "name":"Ankh",
        "value":100
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Human Tome",
        "value":0
      },
      {
        "name":"Exquisite Perch Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Fire Elemental",
    "img":"https://wiki.mediviastats.info/images/1/18/Fire_Elemental.gif",
    "health":280,
    "experience":440,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Demon Skeleton",
    "img":"https://wiki.mediviastats.info/images/9/96/Demon_skeleton.png",
    "health":400,
    "experience":480,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Mysterious Fetish",
        "value":50
      },
      {
        "name":"Guardian Shield",
        "value":2000
      }
    ]
  },
  {
    "name":"Dwarf Geomancer",
    "img":"https://wiki.mediviastats.info/images/c/c6/Dwarfgeomancer.gif",
    "health":380,
    "experience":490,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Blank Rune",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Magic Light Wand",
        "value":35
      },
      {
        "name":"Studded Legs",
        "value":0
      },
      {
        "name":"Pear",
        "value":0
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Clerical Mace",
        "value":170
      },
      {
        "name":"Dwarven Ring",
        "value":100
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"Dwarven Tome",
        "value":0
      },
      {
        "name":"Exquisite Bluegill Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Commodore",
    "img":"https://wiki.mediviastats.info/images/b/bb/Commodore.png",
    "health":435,
    "experience":490,
    "skin":[],
    "loot":[
      {
        "name":"Pirate Sabre",
        "value":95
      },
      {
        "name":"Worn out Pirate Cape",
        "value":250
      },
      {
        "name":"Pirate Skull Belt",
        "value":3000
      },
      {
        "name":"Pirate Eye Patch",
        "value":1000
      },
      {
        "name":"Cursed Gold Coin",
        "value":250
      },
      {
        "name":"Pirate Hat",
        "value":20000
      }
    ]
  },
  {
    "name":"Harpy",
    "img":"https://wiki.mediviastats.info/images/7/7e/Harpy.gif",
    "health":410,
    "experience":510,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Clerical Mace",
        "value":170
      },
      {
        "name":"Doublet",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Harpy Claw",
        "value":0
      }
    ]
  },
  {
    "name":"Ember Beetle",
    "img":"https://wiki.mediviastats.info/images/1/19/Ember_Beetle.gif",
    "health":420,
    "experience":520,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Dragon Necklace",
        "value":100
      },
      {
        "name":"Ember Coin",
        "value":500
      },
      {
        "name":"Small Ruby",
        "value":250
      }
    ]
  },
  {
    "name":"Orc Leader",
    "img":"https://wiki.mediviastats.info/images/0/0e/Orc_Leader.gif",
    "health":450,
    "experience":540,
    "skin":[
      {
        "name":"Patch of Orc Skin",
        "value":0
      },
      {
        "name":"Orc Head",
        "value":0
      },
      {
        "name":"Teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Throwing Knife",
        "value":0
      },
      {
        "name":"Sword Ring",
        "value":100
      },
      {
        "name":"Scimitar",
        "value":150
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Plate Shield",
        "value":45
      },
      {
        "name":"Backpack",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Fish",
        "value":0
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Broad Sword",
        "value":500
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Warrior Helmet",
        "value":5000
      }
    ]
  },
  {
    "name":"Burning Champion",
    "img":"https://wiki.mediviastats.info/images/8/88/Burning_Champion.gif",
    "health":330,
    "experience":550,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Elder Watcher",
    "img":"https://wiki.mediviastats.info/images/1/10/Elder_beholder.png",
    "health":500,
    "experience":560,
    "skin":[
      {
        "name":"Giant Eye",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Watcher Shield",
        "value":1200
      },
      {
        "name":"Watcher Helmet",
        "value":0
      }
    ]
  },
  {
    "name":"Fiery Skeleton",
    "img":"https://wiki.mediviastats.info/images/b/bf/Fiery_Skeleton.png",
    "health":420,
    "experience":580,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Mysterious Fetish",
        "value":50
      },
      {
        "name":"Heart of Fire",
        "value":50
      },
      {
        "name":"Guardian Shield",
        "value":2000
      }
    ]
  },
  {
    "name":"Bee Queen",
    "img":"https://wiki.mediviastats.info/images/6/63/Bee_Queen.png",
    "health":450,
    "experience":600,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Vampire",
    "img":"https://wiki.mediviastats.info/images/4/4e/Vampire.png",
    "health":475,
    "experience":610,
    "skin":[],
    "loot":[
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Katana",
        "value":8
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Emerald Bangle",
        "value":0
      },
      {
        "name":"Spike Sword",
        "value":1000
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"Ice Rapier",
        "value":1000
      },
      {
        "name":"Vampire Shield",
        "value":15000
      },
      {
        "name":"Bronze Amulet",
        "value":50
      }
    ]
  },
  {
    "name":"Cyclops Warrior",
    "img":"https://wiki.mediviastats.info/images/f/f2/Cyclops_Warrior.gif",
    "health":450,
    "experience":600,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Short Sword",
        "value":10
      },
      {
        "name":"Plate Shield",
        "value":45
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      }
    ]
  },
  {
    "name":"Efreet",
    "img":"https://wiki.mediviastats.info/images/f/f9/Efreet.png",
    "health":550,
    "experience":600,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Pear",
        "value":0
      },
      {
        "name":"Heavy Machete",
        "value":0
      },
      {
        "name":"Small Oil Lamp",
        "value":0
      },
      {
        "name":"Green Tapestry",
        "value":0
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Mystic Turban",
        "value":1000
      },
      {
        "name":"Green Gem",
        "value":0
      }
    ]
  },
  {
    "name":"Marid",
    "img":"https://wiki.mediviastats.info/images/7/74/Marid.png",
    "health":550,
    "experience":600,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Blueberry",
        "value":0
      },
      {
        "name":"Heavy Machete",
        "value":0
      },
      {
        "name":"Pear",
        "value":0
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Flute",
        "value":0
      },
      {
        "name":"Blue Tapestry",
        "value":0
      },
      {
        "name":"Small Oil Lamp",
        "value":0
      },
      {
        "name":"Blue Rose",
        "value":0
      },
      {
        "name":"Mystic Turban",
        "value":1000
      },
      {
        "name":"Blue Gem",
        "value":0
      }
    ]
  },
  {
    "name":"Dark Goblin",
    "img":"https://wiki.mediviastats.info/images/0/06/Dark_Goblin.png",
    "health":750,
    "experience":800,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Sabertooth",
    "img":"https://wiki.mediviastats.info/images/a/a4/Sabertooth.png",
    "health":540,
    "experience":710,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      }
    ]
  },
  {
    "name":"Harpy Spellweaver",
    "img":"https://wiki.mediviastats.info/images/9/9f/Harpy_Spellweaver.gif",
    "health":550,
    "experience":760,
    "skin":[
      {
        "name":"Ss%2B(2016-07-31%2Bat%2B06",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Clerical Mace",
        "value":170
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Harpy Spellweaver Claw",
        "value":0
      },
      {
        "name":"Shakirian Arrow",
        "value":0
      },
      {
        "name":"Stealth Ring",
        "value":200
      },
      {
        "name":"Blue Spellwand",
        "value":0
      }
    ]
  },
  {
    "name":"Skeleton Sharpshooter",
    "img":"https://wiki.mediviastats.info/images/e/e4/Skeleton_sharpshooter.png",
    "health":410,
    "experience":790,
    "skin":[
      {
        "name":"Mangled piece of cloth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Shakirian Arrow",
        "value":0
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Stealth Ring",
        "value":200
      },
      {
        "name":"Shakirian Bow",
        "value":32000
      },
      {
        "name":"Quiver",
        "value":0
      }
    ]
  },
  {
    "name":"Elf Sharpshooter",
    "img":"https://wiki.mediviastats.info/images/c/c6/Elf_Sharpshooter.gif",
    "health":600,
    "experience":800,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Hunting Arrow",
        "value":0
      },
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Hunting Bow",
        "value":1000
      },
      {
        "name":"Assassin Dagger",
        "value":1000
      },
      {
        "name":"Sweet Maris Feast",
        "value":0
      },
      {
        "name":"Quiver",
        "value":0
      }
    ]
  },
  {
    "name":"Priestess",
    "img":"https://wiki.mediviastats.info/images/1/15/Priestess.gif",
    "health":600,
    "experience":800,
    "skin":[],
    "loot":[
      {
        "name":"Apple",
        "value":0
      },
      {
        "name":"Dagger",
        "value":2
      },
      {
        "name":"Goat Grass",
        "value":0
      },
      {
        "name":"Powder Herb",
        "value":10
      },
      {
        "name":"Crystal Ball",
        "value":0
      },
      {
        "name":"Wood Mushroom",
        "value":0
      },
      {
        "name":"Crystal Necklace",
        "value":190
      },
      {
        "name":"Clerical Mace",
        "value":170
      },
      {
        "name":"Talon",
        "value":0
      },
      {
        "name":"Blood Herb",
        "value":0
      },
      {
        "name":"Black Shield",
        "value":800
      },
      {
        "name":"Exquisite Bluegill Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Fledging Dragon",
    "img":"https://wiki.mediviastats.infostyle=",
    "health":650,
    "experience":840,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dragon Ham",
        "value":0
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Green Dragon Scale",
        "value":0
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Dragon Necklace",
        "value":100
      },
      {
        "name":"Crossbow",
        "value":160
      },
      {
        "name":"Broad Sword",
        "value":500
      },
      {
        "name":"Steel Shield",
        "value":80
      }
    ]
  },
  {
    "name":"Dwarf Dragoneater",
    "img":"https://wiki.mediviastats.info/images/5/58/Dwarf_dragoneater.png",
    "health":500,
    "experience":850,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Dragon Ham",
        "value":0
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Explosion",
        "value":0
      }
    ]
  },
  {
    "name":"Deathkiss Watcher",
    "img":"https://wiki.mediviastats.info/images/e/e6/Deathkiss_beholder.png",
    "health":545,
    "experience":860,
    "skin":[
      {
        "name":"Giant Eye",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"Watcher Shield",
        "value":1200
      },
      {
        "name":"Unholy Plate Armor",
        "value":15000
      }
    ]
  },
  {
    "name":"Crystalbeast",
    "img":"https://wiki.mediviastats.info/images/d/d9/Crystalbeast.gif",
    "health":630,
    "experience":930,
    "skin":[
      {
        "name":"Crystalbeast-fur",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Permafrost Crystal",
        "value":3000
      },
      {
        "name":"Permafrost Stone",
        "value":7000
      }
    ]
  },
  {
    "name":"Skeleton Plaguespreader",
    "img":"https://wiki.mediviastats.info/images/2/2c/Skeleton_plaguespreader.png",
    "health":650,
    "experience":950,
    "skin":[
      {
        "name":"Plaguespreader bone",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"White Mushroom",
        "value":0
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Poison Arrow",
        "value":0
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Poison Field",
        "value":0
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Plaguespreader Rod",
        "value":2000
      },
      {
        "name":"Plaguespreader Robe",
        "value":26000
      },
      {
        "name":"Green Spellwand",
        "value":0
      }
    ]
  },
  {
    "name":"Corrupted Watcher",
    "img":"https://wiki.mediviastats.info/images/a/ad/Giant_Jellyfish.gif",
    "health":800,
    "experience":1000,
    "skin":[
      {
        "name":"Tentacle",
        "value":0
      },
      {
        "name":"Zathroth Spawn Eye",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brown Mushroom",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Desintegrate",
        "value":0
      },
      {
        "name":"Venomshot Arrow",
        "value":0
      }
    ]
  },
  {
    "name":"Wendigo",
    "img":"https://wiki.mediviastats.info/images/8/8a/Wendigo.png",
    "health":765,
    "experience":1030,
    "skin":[
      {
        "name":"Wendigo claw",
        "value":0
      },
      {
        "name":"Wendigo Antlers",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Rotten Meat",
        "value":0
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Wendigo Staff",
        "value":900
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Blue Spellwand",
        "value":0
      },
      {
        "name":"Crystallized Crossbow",
        "value":55000
      }
    ]
  },
  {
    "name":"Anubis",
    "img":"https://wiki.mediviastats.info/images/2/26/Anubis.png",
    "health":695,
    "experience":1060,
    "skin":[
      {
        "name":"Anubis ear",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Red Skirt",
        "value":150
      },
      {
        "name":"Life Ring",
        "value":100
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Yellow Robe",
        "value":18000
      },
      {
        "name":"Red Cloth",
        "value":0
      },
      {
        "name":"Golden Staff",
        "value":20000
      }
    ]
  },
  {
    "name":"Bonebeast",
    "img":"https://wiki.mediviastats.info/images/9/9b/Bonebeast.gif",
    "health":515,
    "experience":1160,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Bone Club",
        "value":0
      },
      {
        "name":"Bone Shield",
        "value":100
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Bone Sword",
        "value":0
      },
      {
        "name":"Green Mushroom",
        "value":0
      }
    ]
  },
  {
    "name":"Dark Follower",
    "img":"https://wiki.mediviastats.info/images/2/2b/Black_knight_creature.png",
    "health":null,
    "experience":1000,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Giant Ice Elemental",
    "img":"https://wiki.mediviastats.info/images/6/69/GiantElementalk.png",
    "health":970,
    "experience":1160,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Heavy Frozen Missile",
        "value":0
      },
      {
        "name":"Permafrost Essence",
        "value":0
      }
    ]
  },
  {
    "name":"Necromancer",
    "img":"https://wiki.mediviastats.info/images/5/5d/Necromancer.png",
    "health":580,
    "experience":1160,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Short Sword",
        "value":10
      },
      {
        "name":"Green Mushroom",
        "value":0
      },
      {
        "name":"Clerical Mace",
        "value":170
      },
      {
        "name":"Mystic Turban",
        "value":1000
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Conjure Wand",
        "value":0
      },
      {
        "name":"Boots of Haste",
        "value":30000
      }
    ]
  },
  {
    "name":"Elf Swordmaster",
    "img":"https://wiki.mediviastats.info/images/8/8c/Elf_Swordmaster.gif",
    "health":800,
    "experience":1240,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Sword",
        "value":25
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Leather Armor",
        "value":12
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Broad Sword",
        "value":500
      },
      {
        "name":"Spike Sword",
        "value":1000
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Light Sword",
        "value":4500
      },
      {
        "name":"Cheesy Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Sandbeast",
    "img":"https://wiki.mediviastats.info/images/f/f9/Sandbeast.gif",
    "health":850,
    "experience":1240,
    "skin":[
      {
        "name":"Sandbeast bone",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Scimitar",
        "value":150
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Time Ring",
        "value":100
      }
    ]
  },
  {
    "name":"Harpy Queen",
    "img":"https://wiki.mediviastats.info/images/0/08/Harpy_Queen.gif",
    "health":850,
    "experience":1300,
    "skin":[
      {
        "name":"Golden Feather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Stone",
        "value":0
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Obsidian Lance",
        "value":500
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Harpy Queen Claw",
        "value":0
      },
      {
        "name":"Ancient Boots",
        "value":5000
      }
    ]
  },
  {
    "name":"Imperial Soldier",
    "img":"https://wiki.mediviastats.info/images/6/6d/Thaian_ssoldier.png",
    "health":1100,
    "experience":1300,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Crusader Helmet",
        "value":6000
      },
      {
        "name":"Imperial Soldier Shield",
        "value":3000
      },
      {
        "name":"Imperial Soldier Armor",
        "value":5500
      },
      {
        "name":"Light Sword",
        "value":4500
      },
      {
        "name":"Cheesy Maris Feast",
        "value":0
      },
      {
        "name":"Baked Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Orc Warlord",
    "img":"https://wiki.mediviastats.info/images/4/44/Orc_Warlord.gif",
    "health":950,
    "experience":1340,
    "skin":[
      {
        "name":"Patch of Orc Skin",
        "value":0
      },
      {
        "name":"Orc head",
        "value":0
      },
      {
        "name":"Orc teeth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Herring",
        "value":0
      },
      {
        "name":"Orcish Axe",
        "value":0
      },
      {
        "name":"Scimitar",
        "value":150
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Dragon Hammer",
        "value":2000
      },
      {
        "name":"Crusader Helmet",
        "value":6000
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Stealth Ring",
        "value":200
      },
      {
        "name":"Cheesy Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Evoker",
    "img":"https://wiki.mediviastats.info/images/1/1f/Evoker.png",
    "health":750,
    "experience":1400,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Staff",
        "value":1
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"Dragon Shield",
        "value":4000
      },
      {
        "name":"Crown Armor",
        "value":12000
      }
    ]
  },
  {
    "name":"Dragon",
    "img":"https://wiki.mediviastats.info/images/e/e0/Dragon.gif",
    "health":1000,
    "experience":1400,
    "skin":[
      {
        "name":"Green leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dragon Ham",
        "value":0
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Crossbow",
        "value":160
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Longsword",
        "value":51
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Broad Sword",
        "value":500
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Green Dragon Scale",
        "value":0
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Dragon Hammer",
        "value":2000
      },
      {
        "name":"Serpent Sword",
        "value":900
      },
      {
        "name":"Dragon Shield",
        "value":4000
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Dragon Trophy",
        "value":0
      }
    ]
  },
  {
    "name":"Ancient Scarab",
    "img":"https://wiki.mediviastats.info/images/2/2d/Ancient_scarab.png",
    "health":1000,
    "experience":1440,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Scarab Coin",
        "value":150
      },
      {
        "name":"Magic Light Wand",
        "value":35
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Scarab Amulet",
        "value":500
      },
      {
        "name":"Ancient Amulet",
        "value":500
      },
      {
        "name":"Scarab Shield",
        "value":1500
      },
      {
        "name":"Shakirian Waraxe",
        "value":1000
      }
    ]
  },
  {
    "name":"Swamp Abomination",
    "img":"https://wiki.mediviastats.info/images/6/60/Swamp_Abomination.png",
    "health":1040,
    "experience":600,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Restless Skeleton",
    "img":"https://wiki.mediviastats.info/images/a/a8/Restless_skeleton.png",
    "health":1200,
    "experience":1540,
    "skin":[
      {
        "name":"Restless skull",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Rotten Meat",
        "value":0
      },
      {
        "name":"Bone",
        "value":0
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Axe Ring",
        "value":100
      },
      {
        "name":"Unholy Halberd",
        "value":5500
      },
      {
        "name":"Unholy Plate Armor",
        "value":15000
      }
    ]
  },
  {
    "name":"Crystal Beetle",
    "img":"https://wiki.mediviastats.info/images/3/39/Crystal_scarab.png",
    "health":1100,
    "experience":1550,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Aquamarine",
        "value":350
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Blue Spellwand",
        "value":0
      },
      {
        "name":"Ring of the Sky",
        "value":20000
      },
      {
        "name":"Crystallized Shield",
        "value":16000
      }
    ]
  },
  {
    "name":"Emperor Scorpion",
    "img":"https://wiki.mediviastats.info/images/7/7f/Emperor_scorpion.png",
    "health":950,
    "experience":1600,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Viking Helmet",
        "value":66
      },
      {
        "name":"Chain Armor",
        "value":70
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Green Tunic",
        "value":0
      },
      {
        "name":"Studded Club",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Big Scorpion Tail",
        "value":0
      },
      {
        "name":"Scorpid Hood",
        "value":2300
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"The Stinger",
        "value":7000
      },
      {
        "name":"Tower Shield",
        "value":8000
      }
    ]
  },
  {
    "name":"Snow Ravager",
    "img":"https://wiki.mediviastats.info/images/b/be/Snow_Ravager.gif",
    "health":1120,
    "experience":1600,
    "skin":[
      {
        "name":"Snow ravager fur",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Frost Dagger",
        "value":800
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Permafrost Stone",
        "value":7000
      },
      {
        "name":"Snow Ravager Amulet",
        "value":0
      }
    ]
  },
  {
    "name":"Sandskull Spider",
    "img":"https://wiki.mediviastats.info/images/7/7b/Sandskull_spider.png",
    "health":1220,
    "experience":1680,
    "skin":[
      {
        "name":"Ancient runeplate",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Knight Helmet",
        "value":2500
      },
      {
        "name":"Spider Silk Armor",
        "value":2000
      }
    ]
  },
  {
    "name":"Archer",
    "img":"https://wiki.mediviastats.info/images/6/61/Archer.gif",
    "health":1100,
    "experience":1700,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Bolt",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Crossbow",
        "value":160
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Torch",
        "value":0
      },
      {
        "name":"Hunting Bolt",
        "value":0
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Enhanced Crossbow",
        "value":24000
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Light Armor",
        "value":13000
      },
      {
        "name":"Sweet Maris Feast",
        "value":0
      },
      {
        "name":"Quiver",
        "value":0
      }
    ]
  },
  {
    "name":"Blazing Spider",
    "img":"https://wiki.mediviastats.info/images/3/34/Fiery_spider.png",
    "health":null,
    "experience":1780,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Heart of Fire",
        "value":50
      },
      {
        "name":"Fire Field",
        "value":0
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Ignited Bow",
        "value":5000
      },
      {
        "name":"Fire Sword",
        "value":4000
      },
      {
        "name":"Flaming Bow",
        "value":18000
      },
      {
        "name":"Might Ring",
        "value":250
      }
    ]
  },
  {
    "name":"Lich",
    "img":"https://wiki.mediviastats.info/images/8/86/Lich.png",
    "health":880,
    "experience":1800,
    "skin":[
      {
        "name":"Lich skull",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Staff",
        "value":1
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"White Pearl",
        "value":160
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Castle Shield",
        "value":0
      }
    ]
  },
  {
    "name":"Banshee",
    "img":"https://wiki.mediviastats.info/images/d/d3/Banshee.png",
    "health":1000,
    "experience":1800,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Silver Brooch",
        "value":0
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"White Pearl",
        "value":160
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Wedding Ring",
        "value":0
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Red Robe",
        "value":0
      },
      {
        "name":"Life Crystal",
        "value":85
      }
    ]
  },
  {
    "name":"Giant Spider",
    "img":"https://wiki.mediviastats.info/images/d/d6/Giant_spider.png",
    "health":1300,
    "experience":1800,
    "skin":[
      {
        "name":"Giant spider head",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Knight Legs",
        "value":5000
      }
    ]
  },
  {
    "name":"Dark Goblin Warrior",
    "img":"https://wiki.mediviastats.info/images/a/a0/Dark_Goblin_Warrior.png",
    "health":2000,
    "experience":1800,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Guardian of Isingoma",
    "img":"https://wiki.mediviastats.info/images/2/26/Anubis.png",
    "health":2000,
    "experience":null,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Ogre Gruntz",
    "img":"https://wiki.mediviastats.info/images/5/57/Ogre_Gruntz.png",
    "health":1450,
    "experience":1800,
    "skin":[],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Headhunter Spear",
        "value":0
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Iron Hammer",
        "value":8
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Barbarian Axe",
        "value":0
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Talon",
        "value":0
      },
      {
        "name":"Wolf Tooth Chain",
        "value":0
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Small Emerald",
        "value":250
      }
    ]
  },
  {
    "name":"Tar Monstrosity",
    "img":"https://wiki.mediviastats.info/images/f/f1/Tar_Monstrosity.gif",
    "health":1200,
    "experience":1960,
    "skin":[
      {
        "name":"Glob of tar",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"Ancient Shield",
        "value":900
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Sudden Death Rune",
        "value":0
      },
      {
        "name":"Demonbone Boots",
        "value":14000
      },
      {
        "name":"Gold Ring",
        "value":8000
      }
    ]
  },
  {
    "name":"Drake",
    "img":"https://wiki.mediviastats.info/images/d/da/Drake.png",
    "health":1380,
    "experience":2000,
    "skin":[
      {
        "name":"Drake eye",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Drake Scale Helmet",
        "value":850
      },
      {
        "name":"Spike Sword",
        "value":1000
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Ignited Bow",
        "value":5000
      },
      {
        "name":"Fire Hammer",
        "value":20000
      },
      {
        "name":"Fire Sword",
        "value":4000
      }
    ]
  },
  {
    "name":"Dwarf Renegade",
    "img":"https://wiki.mediviastats.info/images/7/78/Dwarf_Renegade.gif",
    "health":1500,
    "experience":2000,
    "skin":[
      {
        "name":"Dwarf Beard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Explosion",
        "value":0
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Knight Axe",
        "value":2000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Dwarven Tome",
        "value":0
      }
    ]
  },
  {
    "name":"Slave Guard",
    "img":"https://wiki.mediviastats.info/images/d/da/Slave_Guard.gif",
    "health":1200,
    "experience":2000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fish",
        "value":0
      },
      {
        "name":"Mystic Turban",
        "value":1000
      },
      {
        "name":"Sword Ring",
        "value":100
      },
      {
        "name":"Smoking Pipe",
        "value":600
      },
      {
        "name":"Shakirian Shield",
        "value":3000
      },
      {
        "name":"Shakirian Blade",
        "value":35000
      },
      {
        "name":"Exquisite Perch Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Hellfire",
    "img":"https://wiki.mediviastats.info/images/1/18/Fire_Elemental.gif",
    "health":null,
    "experience":null,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Deathslicer",
    "img":"https://wiki.mediviastats.info/images/d/dc/Deathslicer.png",
    "health":null,
    "experience":null,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Jothun",
    "img":"https://wiki.mediviastats.info/images/4/48/Jothun.png",
    "health":1550,
    "experience":2100,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Frozen Ham",
        "value":30
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Viking Shield",
        "value":85
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"War Hammer",
        "value":1200
      },
      {
        "name":"Permafrost Morningstar",
        "value":1600
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Crystallized Shield",
        "value":16000
      },
      {
        "name":"Bitter Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Frost Drake",
    "img":"https://wiki.mediviastats.info/images/c/c6/FrostDrake.png",
    "health":1380,
    "experience":2140,
    "skin":[
      {
        "name":"Frost Drake Tail",
        "value":0
      },
      {
        "name":"Frozen Lung",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Frozen Ham",
        "value":30
      },
      {
        "name":"Plate Shield",
        "value":45
      },
      {
        "name":"Heavy Frozen Missile",
        "value":0
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Energy Ring",
        "value":100
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Frozen Shield",
        "value":29000
      },
      {
        "name":"Royal Helmet",
        "value":30000
      },
      {
        "name":"Crystallized Crossbow",
        "value":55000
      }
    ]
  },
  {
    "name":"Vigilante",
    "img":"https://wiki.mediviastats.info/images/9/97/Vigilante.gif",
    "health":1400,
    "experience":2150,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Doublet",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Crown Boots",
        "value":12000
      },
      {
        "name":"Crown Helmet",
        "value":2500
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Swinging Demolisher",
        "value":16000
      },
      {
        "name":"Exquisite Perch Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Hero",
    "img":"https://wiki.mediviastats.info/images/d/d9/Hero.png",
    "health":1400,
    "experience":2400,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Green Tunic",
        "value":0
      },
      {
        "name":"Bow",
        "value":130
      },
      {
        "name":"Arrow",
        "value":0
      },
      {
        "name":"Scarf",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Grapes",
        "value":0
      },
      {
        "name":"Red Rose",
        "value":0
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"War Hammer",
        "value":1200
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Crown Helmet",
        "value":2500
      },
      {
        "name":"Crown Shield",
        "value":8000
      },
      {
        "name":"Fire Sword",
        "value":4000
      },
      {
        "name":"Crown Armor",
        "value":12000
      },
      {
        "name":"Crown Legs",
        "value":12000
      },
      {
        "name":"Cheesy Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Winged Vermin",
    "img":"https://wiki.mediviastats.info/images/c/c9/Winged_Vermin.png",
    "health":1400,
    "experience":2500,
    "skin":[
      {
        "name":"Giant Insect Wing",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Crown Helmet",
        "value":2500
      }
    ]
  },
  {
    "name":"Giant Cobra",
    "img":"https://wiki.mediviastats.info/images/1/10/Giant_cobra.png",
    "health":1580,
    "experience":2640,
    "skin":[
      {
        "name":"Giant Cobra Fang",
        "value":0
      },
      {
        "name":"Transparent (4)",
        "value":0
      },
      {
        "name":"Giant Cobra Scale",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Iron Helmet",
        "value":150
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Ancient Boots",
        "value":5000
      }
    ]
  },
  {
    "name":"Fiery Beetle",
    "img":"https://wiki.mediviastats.info/images/9/9e/Fiery_Beetle.gif",
    "health":1900,
    "experience":2640,
    "skin":[
      {
        "name":"Golden-beetle-ornament",
        "value":0
      },
      {
        "name":"Fiery-carapace",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Ember Coin",
        "value":500
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Red Tunic",
        "value":5000
      },
      {
        "name":"Fiery Helmet",
        "value":7500
      },
      {
        "name":"Fiery Armor",
        "value":7500
      },
      {
        "name":"Fire Hammer",
        "value":20000
      },
      {
        "name":"Fiery Bow",
        "value":46000
      }
    ]
  },
  {
    "name":"Pumpkin Summoner",
    "img":"https://wiki.mediviastats.info/images/8/8f/Pumpkin_Summoner.png",
    "health":7000,
    "experience":null,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Grim Adept",
    "img":"https://wiki.mediviastats.info/images/6/6b/Grim_Adept.png",
    "health":1750,
    "experience":3050,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Skull",
        "value":0
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Dark Shield",
        "value":0
      },
      {
        "name":"Life Ring",
        "value":100
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Grim Boots",
        "value":0
      },
      {
        "name":"Grim Legs",
        "value":0
      }
    ]
  },
  {
    "name":"Forgotten Pharaoh",
    "img":"https://wiki.mediviastats.info/images/c/ca/Forgotten_Pharaoh.png",
    "health":1650,
    "experience":3100,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Scroll",
        "value":0
      },
      {
        "name":"Crystal Necklace",
        "value":190
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Red Skirt",
        "value":150
      },
      {
        "name":"Ancient Shield",
        "value":900
      },
      {
        "name":"Ancient Amulet",
        "value":500
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Blue Cloth",
        "value":0
      },
      {
        "name":"Red Cloth",
        "value":0
      },
      {
        "name":"Unholy Plate Armor",
        "value":15000
      },
      {
        "name":"Golden Staff",
        "value":20000
      },
      {
        "name":"Pharaoh Boots",
        "value":0
      }
    ]
  },
  {
    "name":"Swamp Demon",
    "img":"https://wiki.mediviastats.info/images/c/c3/Swampdemon.png",
    "health":2150,
    "experience":3150,
    "skin":[
      {
        "name":"Heartofswamp",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Brass Armor",
        "value":150
      },
      {
        "name":"Battle Shield",
        "value":95
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Ruby Necklace",
        "value":900
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Serpent Sword",
        "value":900
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"The Stinger",
        "value":7000
      },
      {
        "name":"Envenomed Crossbow",
        "value":65000
      }
    ]
  },
  {
    "name":"Black Knight",
    "img":"https://wiki.mediviastats.info/images/2/2b/Black_knight_creature.png",
    "health":1800,
    "experience":3200,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Dark Helmet",
        "value":250
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Knight Axe",
        "value":2000
      },
      {
        "name":"Warrior Helmet",
        "value":5000
      },
      {
        "name":"Knight Legs",
        "value":5000
      },
      {
        "name":"Ruby Necklace",
        "value":900
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Dragon Lance",
        "value":9000
      },
      {
        "name":"Boots of Haste",
        "value":30000
      }
    ]
  },
  {
    "name":"Nether Spider",
    "img":"https://wiki.mediviastats.info/images/d/d5/Nether_Spider.gif",
    "health":1900,
    "experience":3500,
    "skin":[
      {
        "name":"Nether Spider Head",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Spider Silk",
        "value":0
      },
      {
        "name":"Obsidian Lance",
        "value":500
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Nether Fang",
        "value":0
      },
      {
        "name":"Nether Shield",
        "value":6600
      },
      {
        "name":"Poisoned Bow",
        "value":16000
      },
      {
        "name":"Nether Spider Doll",
        "value":0
      },
      {
        "name":"Venomshot Bolt",
        "value":0
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Spider Silk Backpack",
        "value":0
      }
    ]
  },
  {
    "name":"Ogre Smasher",
    "img":"https://wiki.mediviastats.info/images/3/37/Ogre_Smasher.png",
    "health":2300,
    "experience":3500,
    "skin":[],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Headhunter Spear",
        "value":0
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Wooden Maul",
        "value":2000
      },
      {
        "name":"Club Ring",
        "value":100
      }
    ]
  },
  {
    "name":"Dragon Lord",
    "img":"https://wiki.mediviastats.info/images/2/21/Dragon_lord.png",
    "health":1900,
    "experience":4200,
    "skin":[
      {
        "name":"Red leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dragon Ham",
        "value":0
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Gemmed Book",
        "value":0
      },
      {
        "name":"Green Mushroom",
        "value":0
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Energy Ring",
        "value":100
      },
      {
        "name":"Red Dragon Scale",
        "value":0
      },
      {
        "name":"Dragon Lord Trophy",
        "value":0
      },
      {
        "name":"Fire Sword",
        "value":4000
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Flaming Bow",
        "value":18000
      },
      {
        "name":"Royal Helmet",
        "value":30000
      },
      {
        "name":"Dragon Scale Mail",
        "value":30000
      }
    ]
  },
  {
    "name":"Ogre Warrior",
    "img":"https://wiki.mediviastats.info/images/2/21/Ogre_Warrior.png",
    "health":3200,
    "experience":4500,
    "skin":[],
    "loot":[
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Headhunter Spear",
        "value":0
      },
      {
        "name":"Leather Legs",
        "value":1
      },
      {
        "name":"Iron Hammer",
        "value":8
      },
      {
        "name":"Mace",
        "value":30
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"War Hammer",
        "value":1200
      },
      {
        "name":"Obsidian Lance",
        "value":500
      },
      {
        "name":"Dragon Hammer",
        "value":2000
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Club Ring",
        "value":100
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Hellforged Helmet",
        "value":0
      }
    ]
  },
  {
    "name":"Dark Ogre",
    "img":"https://wiki.mediviastats.info/images/b/ba/Dark_Ogre.png",
    "health":5000,
    "experience":4000,
    "skin":[],
    "loot":[]
  },
  {
    "name":"Shakirian Prayer",
    "img":"https://wiki.mediviastats.info/images/d/de/Shakirian_Prayer.gif",
    "health":2000,
    "experience":4500,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Aquamarine",
        "value":350
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Heavy Magic Missile",
        "value":0
      },
      {
        "name":"Ultimate Healing Rune",
        "value":0
      },
      {
        "name":"Great Fireball",
        "value":0
      },
      {
        "name":"Shakirian Waraxe",
        "value":1000
      },
      {
        "name":"Ancient Amulet",
        "value":500
      },
      {
        "name":"Sudden Death Rune",
        "value":0
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Smoking Pipe",
        "value":600
      },
      {
        "name":"Shakirian Wand",
        "value":6000
      },
      {
        "name":"Wand of Light",
        "value":4000
      },
      {
        "name":"Shakirian Spellbook",
        "value":1350
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Exquisite Lionfish Feast Recipe",
        "value":0
      }
    ]
  },
  {
    "name":"Traitor",
    "img":"https://wiki.mediviastats.info/images/3/31/Traitor.gif",
    "health":1000,
    "experience":4600,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Throwing Star",
        "value":0
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Doublet",
        "value":0
      },
      {
        "name":"Brass Legs",
        "value":49
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Crown Helmet",
        "value":2500
      },
      {
        "name":"Assassin Legs",
        "value":0
      },
      {
        "name":"Assassin Tunic",
        "value":0
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Assassin Hood",
        "value":0
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Assassin Blade",
        "value":6300
      },
      {
        "name":"Batfish Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Corrupted Spider",
    "img":"https://wiki.mediviastats.info/images/b/b3/Corruption_Spider.gif",
    "health":3400,
    "experience":4700,
    "skin":[
      {
        "name":"Corrupted skin piece",
        "value":0
      },
      {
        "name":"Corrupted fang",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Knight Legs",
        "value":5000
      }
    ]
  },
  {
    "name":"Ancient Golem",
    "img":"https://wiki.mediviastats.info/images/2/26/Ancient_Golem.gif",
    "health":4500,
    "experience":5000,
    "skin":[
      {
        "name":"Giant ruby",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Stone",
        "value":0
      },
      {
        "name":"Wood Mushroom",
        "value":0
      },
      {
        "name":"Poison Arrow",
        "value":0
      },
      {
        "name":"Antidote Rune",
        "value":0
      },
      {
        "name":"Blank Rune",
        "value":0
      },
      {
        "name":"Hatchet",
        "value":25
      },
      {
        "name":"Steel Shield",
        "value":80
      },
      {
        "name":"Scale Armor",
        "value":75
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Axe Ring",
        "value":100
      },
      {
        "name":"Warrior Helmet",
        "value":5000
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Guardian Halberd",
        "value":8000
      },
      {
        "name":"Poisoned Bow",
        "value":16000
      },
      {
        "name":"Ancient Armor",
        "value":75000
      }
    ]
  },
  {
    "name":"Ice Golem",
    "img":"https://wiki.mediviastats.info/images/6/6f/Ice_golem.png",
    "health":3350,
    "experience":5000,
    "skin":[
      {
        "name":"Permafrost shard",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Heavy Frozen Missile",
        "value":0
      },
      {
        "name":"Ice Rapier",
        "value":1000
      },
      {
        "name":"Energy Ring",
        "value":100
      },
      {
        "name":"Permafrost Morningstar",
        "value":1600
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Snowball",
        "value":0
      },
      {
        "name":"Frozen Shield",
        "value":29000
      },
      {
        "name":"Ancient Armor",
        "value":75000
      },
      {
        "name":"Frozen Bracer",
        "value":0
      },
      {
        "name":"Crystallized Crossbow",
        "value":55000
      }
    ]
  },
  {
    "name":"Behemoth",
    "img":"https://wiki.mediviastats.info/images/7/70/Behemoth.gif",
    "health":4000,
    "experience":5000,
    "skin":[
      {
        "name":"Behemoth Horn",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Crowbar",
        "value":50
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Small Amethyst",
        "value":200
      },
      {
        "name":"Strange Symbol",
        "value":0
      },
      {
        "name":"Bright Sword",
        "value":8000
      },
      {
        "name":"Crystal Necklace",
        "value":190
      },
      {
        "name":"Giant Sword",
        "value":17000
      },
      {
        "name":"Green Spellwand",
        "value":0
      },
      {
        "name":"Steel Boots",
        "value":30000
      }
    ]
  },
  {
    "name":"Frost Dragon",
    "img":"https://wiki.mediviastats.info/images/5/56/Frost_dragon.png",
    "health":3000,
    "experience":5200,
    "skin":[
      {
        "name":"Frost dragon wing",
        "value":0
      },
      {
        "name":"Frost dragon tail",
        "value":0
      },
      {
        "name":"Frost dragon claw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Frozen Ham",
        "value":30
      },
      {
        "name":"Gemmed Book",
        "value":0
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Permafrost Morningstar",
        "value":1600
      },
      {
        "name":"Strange Helmet",
        "value":500
      },
      {
        "name":"Heavy Frozen Missile",
        "value":0
      },
      {
        "name":"Heart of Frost Dragon",
        "value":0
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Royal Helmet",
        "value":30000
      },
      {
        "name":"Frozen Shield",
        "value":29000
      },
      {
        "name":"Dragon Slayer",
        "value":40000
      }
    ]
  },
  {
    "name":"Jothun Elder",
    "img":"https://wiki.mediviastats.info/images/f/f0/Jothunelder.png",
    "health":3300,
    "experience":5500,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Leather Boots",
        "value":2
      },
      {
        "name":"Studded Club",
        "value":0
      },
      {
        "name":"Steel Helmet",
        "value":293
      },
      {
        "name":"Battle Hammer",
        "value":120
      },
      {
        "name":"Morning Star",
        "value":100
      },
      {
        "name":"Silver Mace",
        "value":16500
      },
      {
        "name":"Frozen Shield",
        "value":29000
      }
    ]
  },
  {
    "name":"Dwarf General",
    "img":"https://wiki.mediviastats.info/images/a/aa/Dwarf_General.png",
    "health":4000,
    "experience":5500,
    "skin":[
      {
        "name":"Dwarven Shoulderpad",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Ruby",
        "value":250
      },
	  {
        "name":"Small Amethyst",
        "value":200
      },
	  {
        "name":"Dwarven Shield",
        "value":100
      },
	  {
        "name":"Double Axe",
        "value":260
      },
	  {
        "name":"Battle Axe",
        "value":80
      },
	  {
        "name":"White Mushroom",
        "value":0
      },
	  {
        "name":"Halberd",
        "value":400
      },
	  {
        "name":"Axe Ring",
        "value":100
      },
	  {
        "name":"Dwarven Axe",
        "value":1500
      },
	  {
        "name":"Spicy Maris Feast Recipe",
        "value":0
      },
	  {
        "name":"Fire Axe",
        "value":8000
      },
	  {
        "name":"Steel Boots",
        "value":30000
      },
	  {
        "name":"Dwarven Helmet",
        "value":0
      }
    ]
  },
  {
    "name":"Fleshbiter",
    "img":"https://wiki.mediviastats.info/images/e/ed/Fleshbiter.png",
    "health":2550,
    "experience":6000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Painite Crystal Shard",
        "value":0
      },
      {
        "name":"Small Painite Crystal",
        "value":0
      },
      {
        "name":"Giant Sword",
        "value":17000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Large Painite Crystal",
        "value":0
      }
    ]
  },
  {
    "name":"Drake Lord",
    "img":"https://wiki.mediviastats.info/images/0/08/Drake_lord.png",
    "health":3520,
    "experience":6000,
    "skin":[
      {
        "name":"Hot-horn",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Plate Legs",
        "value":115
      },
      {
        "name":"Fire Sword",
        "value":4000
      },
      {
        "name":"Ignited Bow",
        "value":5000
      },
      {
        "name":"Time Ring",
        "value":100
      },
      {
        "name":"Fire Hammer",
        "value":20000
      },
      {
        "name":"Royal Helmet",
        "value":30000
      }
    ]
  },
  {
    "name":"Skull Reaper",
    "img":"https://wiki.mediviastats.info/images/f/f4/Skull_Reaperek.png",
    "health":4200,
    "experience":6280,
    "skin":[
      {
        "name":"Reaper horn",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Blue Cloth",
        "value":0
      },
      {
        "name":"Soul Reaper",
        "value":7500
      },
      {
        "name":"Boots of Haste",
        "value":30000
      },
      {
        "name":"Permafrost Robe",
        "value":26000
      },
      {
        "name":"Blue Hood",
        "value":0
      }
    ]
  },
  {
    "name":"Nightmare",
    "img":"https://wiki.mediviastats.info/images/9/9b/Nightmare.png",
    "health":5600,
    "experience":7000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Black Shield",
        "value":800
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Unholy Plate Armor",
        "value":15000
      },
      {
        "name":"Boots of Haste",
        "value":30000
      }
    ]
  },
  {
    "name":"Lightbringer Knight",
    "img":"https://wiki.mediviastats.info/images/6/64/Lightbringer_Knight_Creature.gif",
    "health":5600,
    "experience":7000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Knight Armor",
        "value":5000
      },
      {
        "name":"Knight Legs",
        "value":5000
      },
      {
        "name":"Hellforged Shield",
        "value":36000
      },
      {
        "name":"Swinging Demolisher",
        "value":16000
      },
      {
        "name":"Silver Mace",
        "value":16500
      },
      {
        "name":"Bitter Maris Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Shattered Soul",
    "img":"https://wiki.mediviastats.info/images/4/45/Shattered_Soul.gif",
    "health":3000,
    "experience":7000,
    "skin":[
      {
        "name":"Torn piece of cloth",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"White Pearl",
        "value":160
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Soul Dagger",
        "value":200
      },
      {
        "name":"Assassin Dagger",
        "value":1000
      },
      {
        "name":"Blue Robe",
        "value":10000
      }
    ]
  },
  {
    "name":"Warlock",
    "img":"https://wiki.mediviastats.info/images/a/a1/Warlock_%28Old%29.gif",
    "health":3500,
    "experience":8000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Cherry",
        "value":0
      },
      {
        "name":"Bread",
        "value":0
      },
      {
        "name":"Poison Dagger",
        "value":50
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Dark Mushroom",
        "value":0
      },
      {
        "name":"Energy Ring",
        "value":100
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Candlestick",
        "value":0
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Talon",
        "value":0
      },
      {
        "name":"Crystal Ring",
        "value":0
      },
      {
        "name":"Ring of the Sky",
        "value":20000
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Red Tome",
        "value":0
      },
      {
        "name":"Wand of Might",
        "value":0
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Exquisite Lionfish Meal",
        "value":0
      },
      {
        "name":"Exquisite Batfish Meal",
        "value":0
      }
    ]
  },
  {
    "name":"Wraith",
    "img":"https://wiki.mediviastats.info/images/7/7c/Wraith.png",
    "health":4000,
    "experience":8400,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Permafrost Longsword",
        "value":900
      },
      {
        "name":"Permafrost Morningstar",
        "value":1600
      },
      {
        "name":"Wand of Light",
        "value":4000
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Blue Cloth",
        "value":0
      },
      {
        "name":"Blue Hood",
        "value":0
      }
    ]
  },
  {
    "name":"Tar Priest",
    "img":"https://wiki.mediviastats.info/images/4/4b/Tar_Priest.gif",
    "health":3250,
    "experience":8400,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ankh",
        "value":100
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Dark Mushroom",
        "value":0
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"Venomshot Arrow",
        "value":0
      },
      {
        "name":"Wand of Light",
        "value":4000
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Demonbone Helmet",
        "value":9000
      },
      {
        "name":"Life Ring",
        "value":100
      },
      {
        "name":"Staff",
        "value":1
      },
      {
        "name":"Boots of Haste",
        "value":30000
      },
      {
        "name":"Ring of the Sky",
        "value":20000
      },
      {
        "name":"Demonbone Armor",
        "value":40000
      }
    ]
  },
  {
    "name":"Lernaean Hydra",
    "img":"https://wiki.mediviastats.info/images/b/b0/Lernaean_Hydra.gif",
    "health":4500,
    "experience":8600,
    "skin":[
      {
        "name":"Hydra Claw",
        "value":0
      },
      {
        "name":"Hydra Tongue",
        "value":0
      },
      {
        "name":"Hydra Head",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Hydra Ham",
        "value":0
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Illumination Ring",
        "value":100
      },
      {
        "name":"Light Sword",
        "value":4500
      },
      {
        "name":"Medusa Shield",
        "value":8000
      },
      {
        "name":"Assassin Blade",
        "value":6300
      },
      {
        "name":"Poisoned Bow",
        "value":16000
      },
      {
        "name":"Arming Sword",
        "value":20000
      },
      {
        "name":"Torn Quicksand Boots",
        "value":10000
      }
    ]
  },
  {
    "name":"Albino Dragon",
    "img":"https://wiki.mediviastats.info/images/0/06/Albino_Dragon.gif",
    "health":5500,
    "experience":8600,
    "skin":[
      {
        "name":"Albino Dragon Tail",
        "value":0
      },
      {
        "name":"Albino Dragon's Skin Piece",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dragon Ham",
        "value":0
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Small Ruby",
        "value":250
      },
      {
        "name":"Burst Arrow",
        "value":0
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Plate Armor",
        "value":400
      },
      {
        "name":"Dragon Shield",
        "value":4000
      },
      {
        "name":"Dragon Hammer",
        "value":2000
      },
      {
        "name":"Fire Sword",
        "value":4000
      },
      {
        "name":"Fire Axe",
        "value":8000
      },
      {
        "name":"Dragon Lance",
        "value":9000
      },
      {
        "name":"Crown Boots",
        "value":12000
      },
      {
        "name":"Royal Helmet",
        "value":30000
      },
      {
        "name":"Dragon Scale Mail",
        "value":30000
      },
      {
        "name":"Blazing Crossbow",
        "value":70000
      },
      {
        "name":"Golden Amulet",
        "value":6600
      },
      {
        "name":"Albino Scale Mail",
        "value":0
      }
    ]
  },
  {
    "name":"Royalist",
    "img":"https://wiki.mediviastats.info/images/f/f4/Royalist.png",
    "health":5500,
    "experience":10000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Hunting Bolt",
        "value":0
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Arming Sword",
        "value":20000
      },
      {
        "name":"Bascinet",
        "value":24000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Imperial Soldier Legs",
        "value":20000
      },
      {
        "name":"Royal Plate Armor",
        "value":35000
      },
      {
        "name":"Exquisite Perch Feast",
        "value":0
      }
    ]
  },
  {
    "name":"Wight",
    "img":"https://wiki.mediviastats.info/images/8/89/Wight.gif",
    "health":6000,
    "experience":10000,
    "skin":[
      {
        "name":"Wight Brain",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Silver Amulet",
        "value":50
      },
      {
        "name":"Protection Amulet",
        "value":100
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"White Pearl",
        "value":160
      },
      {
        "name":"Bone Shield",
        "value":100
      },
      {
        "name":"Devil Helmet",
        "value":1000
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Spellbook",
        "value":0
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Red Robe",
        "value":0
      },
      {
        "name":"Boots of Haste",
        "value":30000
      },
      {
        "name":"Black Tapestry",
        "value":0
      },
      {
        "name":"Royal Dress",
        "value":0
      }
    ]
  },
  {
    "name":"Sphinx",
    "img":"https://wiki.mediviastats.info/images/0/0e/Sphinx.png",
    "health":7600,
    "experience":11000,
    "skin":[
      {
        "name":"Sphinx Claw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Pear",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Blue Cloth",
        "value":0
      },
      {
        "name":"Wand of Light",
        "value":4000
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Torn Quicksand Boots",
        "value":10000
      },
      {
        "name":"Ancient Helmet",
        "value":42000
      },
      {
        "name":"Ancient Legs",
        "value":45000
      },
      {
        "name":"Mastermind Shield",
        "value":50000
      }
    ]
  },
  {
    "name":"Manticore",
    "img":"https://wiki.mediviastats.info/images/0/0b/Manticore.gif",
    "health":8000,
    "experience":11400,
    "skin":[
      {
        "name":"Poisonous Tail",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Green Mushroom",
        "value":0
      },
      {
        "name":"Axe Ring",
        "value":100
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Serpent Sword",
        "value":900
      },
      {
        "name":"Scorpid Hood",
        "value":2300
      },
      {
        "name":"Knight Axe",
        "value":2000
      },
      {
        "name":"Emerald Bangle",
        "value":0
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"The Stinger",
        "value":7000
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Crown Armor",
        "value":12000
      },
      {
        "name":"Ancient Boots",
        "value":5000
      },
      {
        "name":"Hellforged Shield",
        "value":36000
      },
      {
        "name":"Poisoned Bow",
        "value":16000
      },
      {
        "name":"Ancient Legs",
        "value":45000
      },
      {
        "name":"Vanquisher",
        "value":100000
      }
    ]
  },
  {
    "name":"Demon",
    "img":"https://wiki.mediviastats.info/images/c/c4/Demon.png",
    "health":8200,
    "experience":12000,
    "skin":[
      {
        "name":"Demonic Claw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Golden Sickle",
        "value":0
      },
      {
        "name":"Talon",
        "value":0
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"Double Axe",
        "value":260
      },
      {
        "name":"Fire Mushroom",
        "value":0
      },
      {
        "name":"Demon Tusk",
        "value":0
      },
      {
        "name":"Fire Axe",
        "value":8000
      },
      {
        "name":"Purple Tome",
        "value":0
      },
      {
        "name":"Stealth Ring",
        "value":200
      },
      {
        "name":"Devil Helmet",
        "value":1000
      },
      {
        "name":"Ring of Healing",
        "value":100
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Platinum Amulet",
        "value":1500
      },
      {
        "name":"Demon Shield",
        "value":30000
      },
      {
        "name":"Ice Rapier",
        "value":1000
      },
      {
        "name":"Giant Sword",
        "value":17000
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Mastermind Shield",
        "value":50000
      },
      {
        "name":"Golden Legs",
        "value":30000
      },
      {
        "name":"Blazing Crossbow",
        "value":70000
      },
      {
        "name":"Magic Plate Armor",
        "value":200000
      }
    ]
  },
  {
    "name":"Undead Behemoth",
    "img":"https://wiki.mediviastats.info/images/3/31/Undead_behemoth.png",
    "health":9200,
    "experience":13300,
    "skin":[
      {
        "name":"Tangled Bowel",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Warrior Helmet",
        "value":5000
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Arming Sword",
        "value":20000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Hellforged Shield",
        "value":36000
      },
      {
        "name":"Golden Legs",
        "value":30000
      },
      {
        "name":"Strange Symbol",
        "value":0
      },
      {
        "name":"Rotten Meat",
        "value":0
      },
      {
        "name":"Syringe of Disease",
        "value":0
      }
    ]
  },
  {
    "name":"Alphabeast",
    "img":"https://wiki.mediviastats.info/images/f/f5/Alphabeast.png",
    "health":10450,
    "experience":13600,
    "skin":[
      {
        "name":"Spiked backflap",
        "value":0
      },
      {
        "name":"Fine Leather",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Ham",
        "value":0
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Black Shield",
        "value":800
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Bascinet",
        "value":24000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Heavy Halberd",
        "value":35000
      },
      {
        "name":"Ancient Legs",
        "value":45000
      }
    ]
  },
  {
    "name":"Abomination",
    "img":"https://wiki.mediviastats.info/images/0/0b/Abomination.gif",
    "health":12000,
    "experience":15000,
    "skin":[
      {
        "name":"Abominated skin piece",
        "value":0
      },
      {
        "name":"Abominated arm",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Dark Armor",
        "value":400
      },
      {
        "name":"War Hammer",
        "value":1200
      },
      {
        "name":"Venomshot Bolt",
        "value":0
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Warrior Helmet",
        "value":5000
      },
      {
        "name":"Stone Skin Amulet",
        "value":500
      },
      {
        "name":"Dragon Lance",
        "value":9000
      },
      {
        "name":"Giant Sword",
        "value":17000
      },
      {
        "name":"Might Ring",
        "value":250
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Heavy Halberd",
        "value":35000
      }
    ]
  },
  {
    "name":"Chimera",
    "img":"https://wiki.mediviastats.info/images/b/b4/Chimera.gif",
    "health":11000,
    "experience":16800,
    "skin":[
      {
        "name":"Chimera foot",
        "value":0
      },
      {
        "name":"Chimera mane",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Red Mushroom",
        "value":12
      },
      {
        "name":"Small Diamond",
        "value":300
      },
      {
        "name":"Halberd",
        "value":400
      },
      {
        "name":"Orb",
        "value":750
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Crown Legs",
        "value":12000
      },
      {
        "name":"Heavy Halberd",
        "value":35000
      },
      {
        "name":"Hellforged Shield",
        "value":36000
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Ancient Helmet",
        "value":42000
      },
      {
        "name":"Envenomed Crossbow",
        "value":65000
      },
      {
        "name":"Amulet of Loss",
        "value":0
      },
      {
        "name":"Green Spellwand",
        "value":0
      },
      {
        "name":"Ancient Sword",
        "value":40000
      }
    ]
  },
  {
    "name":"Lightbringer Hero",
    "img":"https://wiki.mediviastats.info/images/0/0d/Lightbringer_Hero.gif",
    "health":17000,
    "experience":21000,
    "skin":[],
    "loot":[
      {
        "name":"Meat",
        "value":0
      },
      {
        "name":"Headhunter Spear",
        "value":0
      },
      {
        "name":"Bascinet",
        "value":24000
      },
      {
        "name":"Heavy Halberd",
        "value":35000
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Barbel Feast",
        "value":0
      },
      {
        "name":"Lightbringer Helmet",
        "value":40000
      },
      {
        "name":"Executioner's Sword",
        "value":0
      },
      {
        "name":"Hellforged Legs",
        "value":0
      }
    ]
  },
  {
    "name":"Azure Mercenary",
    "img":"https://wiki.mediviastats.info/images/2/27/Queen%27s_Follower.gif",
    "health":18000,
    "experience":22000,
    "skin":[],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Bread",
        "value":0
      },
      {
        "name":"Knight Axe",
        "value":2000
      },
      {
        "name":"Blue Robe",
        "value":10000
      },
      {
        "name":"Bascinet",
        "value":24000
      },
      {
        "name":"Mercenary Sword",
        "value":45000
      },
      {
        "name":"Shield of the Heroes",
        "value":38000
      },
      {
        "name":"Royal Plate Armor",
        "value":35000
      },
      {
        "name":"Barbel Feast",
        "value":0
      },
      {
        "name":"Demonic Axe",
        "value":0
      },
      {
        "name":"Hellforged Legs",
        "value":0
      }
    ]
  },
  {
    "name":"Shadow Drake",
    "img":"https://wiki.mediviastats.info/images/a/a7/Shadow_drake.png",
    "health":21400,
    "experience":23000,
    "skin":[
      {
        "name":"Void-bone",
        "value":0
      },
      {
        "name":"Void-essence",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Brown Mushroom",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Serpent Sword",
        "value":900
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Ancient Legs",
        "value":45000
      },
      {
        "name":"Desintegrate",
        "value":0
      },
      {
        "name":"Steel Boots",
        "value":30000
      },
      {
        "name":"Ancient Helmet",
        "value":42000
      },
      {
        "name":"Void Staff",
        "value":150000
      },
      {
        "name":"Magic Plate Armor",
        "value":200000
      },
      {
        "name":"Chaos Shield",
        "value":500000
      },
      {
        "name":"Potion of Power",
        "value":0
      }
    ]
  },
  {
    "name":"Blood Sphinx",
    "img":"https://wiki.mediviastats.info/images/d/d5/Blood_Sphinx.png",
    "health":15500,
    "experience":25500,
    "skin":[
      {
        "name":"Blood Sphinx Claw",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Pear",
        "value":0
      },
      {
        "name":"Mind Stone",
        "value":170
      },
      {
        "name":"Wand of Light",
        "value":4000
      },
      {
        "name":"Red Cloth",
        "value":0
      },
      {
        "name":"Golden Armor",
        "value":20000
      },
      {
        "name":"Torn Quicksand Boots",
        "value":10000
      },
      {
        "name":"Gold Ring",
        "value":8000
      },
      {
        "name":"Ancient Helmet",
        "value":42000
      },
      {
        "name":"Mastermind Shield",
        "value":50000
      },
      {
        "name":"Golden Legs",
        "value":30000
      },
      {
        "name":"Vanquisher",
        "value":100000
      },
      {
        "name":"Blood Mace",
        "value":0
      }
    ]
  },
  {
    "name":"Undead Dragon",
    "img":"https://wiki.mediviastats.info/images/b/bb/Undead_Dragon_1_Blue.gif",
    "health":26500,
    "experience":37000,
    "skin":[
      {
        "name":"Pile of Bones",
        "value":0
      }
    ],
    "loot":[
      {
        "name":"Gold Coin",
        "value":1
      },
      {
        "name":"Power Bolt",
        "value":0
      },
      {
        "name":"Energy Ring",
        "value":100
      },
      {
        "name":"Green Mushroom",
        "value":0
      },
      {
        "name":"Gemmed Book",
        "value":0
      },
      {
        "name":"Two Handed Sword",
        "value":450
      },
      {
        "name":"Black Pearl",
        "value":280
      },
      {
        "name":"Small Sapphire",
        "value":250
      },
      {
        "name":"Small Emerald",
        "value":250
      },
      {
        "name":"War Hammer",
        "value":1200
      },
      {
        "name":"Skull Staff",
        "value":6000
      },
      {
        "name":"Dragon Lance",
        "value":9000
      },
      {
        "name":"Tower Shield",
        "value":8000
      },
      {
        "name":"Life Crystal",
        "value":85
      },
      {
        "name":"Ancient Helmet",
        "value":42000
      },
      {
        "name":"Giant Sword",
        "value":17000
      },
      {
        "name":"Dragon Slayer",
        "value":40000
      },
      {
        "name":"Hellforged Shield",
        "value":36000
      },
      {
        "name":"Hellforged Axe",
        "value":50000
      },
      {
        "name":"Ouroboros",
        "value":0
      },
      {
        "name":"Undead Dragon Trophy",
        "value":0
      },
      {
        "name":"Hellforged Armor",
        "value":0
      }
    ]
  },
  {
    "name":"Unknown",
    "img":"https://wiki.mediviastats.info/images/9/94/40330.gif",
    "health":null,
    "experience":null,
    "skin":[],
    "loot":[]
  }
]