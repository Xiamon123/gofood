const MenuItems = [
    {
      id: 1,
      itemId: "chicken01",
      name: "Chicken",
      imgSrc:
        "https://media.istockphoto.com/id/1282866808/photo/fresh-raw-chicken.jpg?b=1&s=170667a&w=0&k=20&c=tVhkkolwq60QmPMQnDimXAeXyOmgKBuURTykgvFznwo=",
    },
    {
      id: 2,
      itemId: "seafood01",
      name: "Seafood and Fish",
      imgSrc:
        "https://media.istockphoto.com/id/1156027693/photo/fresh-salmon-steak-with-a-variety-of-seafood-and-herbs.jpg?b=1&s=170667a&w=0&k=20&c=RCtGMgXi8WaagIl05XDi7ZyN5ywGNu1xFCEiRatMWbk=",
    },
    {
      id: 3,
      itemId: "mutton01",
      name: "Mutton",
      imgSrc:
      "data:image/jpeg;base64,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",
        
    },
    {
      id: 4,
      itemId: "prawns01",
      name: "Prawns",
      imgSrc:
        "https://media.istockphoto.com/id/1371169770/photo/prawns-platter-isolated-on-white-wooden-table-spanish-food-concept-top-view.jpg?b=1&s=170667a&w=0&k=20&c=qj3IeHVHKkZL0n3AFQe4vN_Q1eYsECgFAks59GPQ3j8=",
    },
    {
      id: 5,
      itemId: "eggs01",
      name: "Eggs",
      imgSrc:
        "https://media.istockphoto.com/id/948646312/photo/eggs-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=3xUqu_NR8ht9t5fuSky-qlZgNQEuW458RYi6mumrpdE=",
    },
  
  ];
  
  const Items = [
    {
      id: 1,
      itemId: "chicken01",
      imgSrc:
        "https://cdn3.mydukaan.io/app/image/100x100/?url=https://mydukaan-prod-new.s3.amazonaws.com/master/products/whole-chicken-curry-cut.png",
      name: "Chicken Curry Cuts",
      ratings: 5,
      price: "₹300",
    },
    {
      id: 2,
      itemId: "chicken01",
      imgSrc:
        "https://media.istockphoto.com/id/1305817492/photo/raw-uncooked-chicken-breast-with-cooking-ingredients.jpg?b=1&s=170667a&w=0&k=20&c=ZvV4Jo3Znn19Ote_a5LYKGmpe5CZtXzBwt_Iy6lDajY=",
      name: "Chicken Breast",
      ratings: 5,
      price: "₹385",
    },
    {
      id: 3,
      itemId: "chicken01",
      imgSrc:
        "https://media.istockphoto.com/id/93456466/photo/raw-skin-on-chicken-legs-cross-each-other.jpg?b=1&s=170667a&w=0&k=20&c=781_jb8bxXKxA8E6L9pinZoWY1o6UJpovYsqpUdrEGs=",
      name: "Chicken Drumstick",
      ratings: 5,
      price: "₹600",
    },
    {
      id: 4,
      itemId: "chicken01",
      imgSrc:
        "https://media.istockphoto.com/id/667094528/photo/raw-chicken-drumsticks.jpg?b=1&s=170667a&w=0&k=20&c=mvLx-dDGTQQVuBX7MGTrP7FIOZ0mAIGWCiFwifVBhWk=",
      name: "Chicken Thigh Bone",
      ratings: 5,
      price: "₹399",
    },
    {
      id: 5,
      itemId: "chicken01",
      imgSrc:
        "https://media.istockphoto.com/id/1296662964/photo/raw-chicken-legs.jpg?b=1&s=170667a&w=0&k=20&c=8F-LDFeWU247V4C0S6XX2PDTgThdh9zuvv9jm1VZdnU=",
      name: "Chicken Gizzard ",
      ratings: 5,
      price: "₹486",
    },
    {
      id: 6,
      itemId: "seafood01",
      imgSrc:
        "https://media.istockphoto.com/id/1362869453/photo/fried-calamari.jpg?b=1&s=170667a&w=0&k=20&c=CTqXVWan5ebOnp6v1iYYmcuDS3itoeP28DV9yM2_XdQ=",
      name: "Squid",
      ratings: 5,
      price: "₹385",
    },
    {
      id: 7,
      itemId: "seafood01",
      imgSrc:
        "https://media.istockphoto.com/id/1426956357/photo/the-rohu-rui-or-roho-labeo-is-a-species-of-fish-of-the-carp-family-found-in-rivers-in-south.jpg?b=1&s=170667a&w=0&k=20&c=IMVkXjca5gM0iySe8y06jds_y2jimr2T4hnug0-ovpY=",
      name: "Rohu Fish",
      ratings: 5,
      price: "₹380",
    },
    {
      id: 8,
      itemId: "seafood01",
      imgSrc:
        "https://media.istockphoto.com/id/1068900056/photo/slices-of-raw-tuna-fish-meat.jpg?b=1&s=170667a&w=0&k=20&c=qBRss1K4jNhlNo6nI3iBk061uwbu3i7YHEtGh8FPAd8=",
      name: "Tuna Fish",
      ratings: 5,
      price: "₹385",
    },
    {
      id: 9,
      itemId: "seafood01",
      imgSrc:
        "https://media.istockphoto.com/id/1405607881/photo/catla-fish.jpg?b=1&s=170667a&w=0&k=20&c=uQ2VZTfUNokRmbxQ2lKHYQhq9roekWizf878lw-m5SY=",
      name: "Catla Fish",
      ratings: 5,
      price: "₹3889",
    },
    {
      id: 10,
      itemId: "mutton01",
      imgSrc:
        "https://media.istockphoto.com/id/1368375263/photo/lambs-liver-on-white.jpg?b=1&s=170667a&w=0&k=20&c=AY2mz9bnLSFCaPZsJx6720363VZn7gRP9xtNrXxRReU=",
      name: "Mutton Liver Chunks",
      ratings: 4,
      price: "456",
    },
    {
      id: 11,
      itemId: "mutton01",
      imgSrc:
        "https://media.istockphoto.com/id/1389082139/photo/fresh-raw-lamb-shanks-with-herbs-and-spices-mutton-meat-black-background-top-view.jpg?b=1&s=170667a&w=0&k=20&c=BIOwD9w3gHgAnB5PZQZuCQH2knBFfQT3-99RG1hsc9w=",
      name: "Goat shoulders",
      ratings: 4,
      price: "12",
    },
    {
      id: 12,
      itemId: "mutton01",
      imgSrc:
        "https://media.istockphoto.com/id/1157855979/photo/raw-sheep-skewers.jpg?b=1&s=170667a&w=0&k=20&c=bKhTgbYrdX6CHB2i6_9Tk3cNSLrFqbQGqYVgGYAqNCI=",
      name: "Goat Mince",
      ratings: 4,
      price: "12",
    },
    {
      id: 13,
      itemId: "mutton01",
      imgSrc:
        "https://media.istockphoto.com/id/116196839/photo/leg-of-lamb.jpg?b=1&s=170667a&w=0&k=20&c=hgaqS5S1mI4puZorAI8XWGEk85PgsEicC2SwRUpKOUM=",
      name: "lamb Boneless",
      ratings: 4,
      price: "12",
    },
    {
      id: 14,
      itemId: "prawns01",
      imgSrc:
        "https://media.istockphoto.com/id/1147384140/photo/fresh-shrimps.jpg?b=1&s=170667a&w=0&k=20&c=0nrXlmLSKvxRtOj23NvgFqU_Q_ZgSWWo0YGa3mHwNLc=",
      name: "White Prawns",
      ratings: 4,
      price: "12",
    },
    {
      id: 15,
      itemId: "prawns01",
      imgSrc:
        "https://media.istockphoto.com/id/1382525563/photo/fresh-chilled-giant-tiger-prawns-at-seafood-supermarket-stall-seafood-selective-focus.jpg?b=1&s=170667a&w=0&k=20&c=UHTWtrNyVNcH8VEfDDxqlMe1zb7BPUEFVHdFuU5tudk=",
      name: "Tiger Prawns",
      ratings: 4,
      price: "12",
    },
    {
      id: 16,
      itemId: "eggs01",
      imgSrc:
        "https://media.istockphoto.com/id/1270152335/photo/still-life-image-of-brown-and-white-eggs-in-cardboard-egg-cartons.jpg?b=1&s=170667a&w=0&k=20&c=2c9LkfAiap6wiSdS1zFXl-NuP-k4xaE3OV7P_AFqI_E=",
      name: "Classic Eggs",
      ratings: 4,
      price: "12",
    },
    {
      id: 17,
      itemId: "eggs01",
      imgSrc:
        "https://media.istockphoto.com/id/1346061658/photo/eggs.jpg?b=1&s=170667a&w=0&k=20&c=kuo477-PVYNQMH0wKIVeg65tTxQLB6LSOiYqvBXJZWg=",
      name: "Country Eggs Pack of 6",
      ratings: 4,
      price: "12",
    },
    {
      id: 18,
      itemId: "eggs01",
      imgSrc:
        "https://media.istockphoto.com/id/1092576374/photo/broken-egg-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=o5XjxZmsHCfm-pvzbyxZW2PZuPBRhJpl4cFQ22j3vW4=",
      name: "Brown Shell Eggs",
      ratings: 3,
      price: "12",
    },
    
    
  ];
  
  export { MenuItems, Items };