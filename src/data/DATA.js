const photo1= require("../assets/teenage-girl-happy-looking-woman-with-curly-ginger-hair-wearing-striped-off-shoulders-blouse-hat-playing-with-strand-hair-smile-isolated-white-wall.jpg");
const photo2= require("../assets/portrait-severe-young-short-haired-bearded-male-frowning-his-eyebrows-keeping-index-finger-his-lips-while-asking-be-quiet-isolated-white-wall.jpg");
const photo3= require("../assets/teenage-shocked-girl-with-blond-hair-gathered-bun-tattoo-wearing-yellow-sweater-eyewear-pointing-index-fingers-up-copy-space-looking-camera-isolated-white-wall.jpg");
const photo4= require("../assets/indoor-shot-young-adult-female-keeps-her-palms-together-praying-position-meditating-smiling-keeps-her-eyes-opened-isolated-white-background.jpg");

export const FEATURES = [
    {
        feature: "Eu Eros Eget", 
        description: "Donec non tellus eu lorem molestie fringilla a sed velit. Curabitur in mattis lectus. Duis risus nisi, semper non eleifend id, ultricies sed eros."
    },
    {
        feature: "Metus Feugiat", 
        description: "Phasellus viverra, diam sit amet volutpat ultricies, nunc augue sodales enim, et elementum elit ante vitae ex. Proin ut tincidunt purus."
    },
    {
        feature: "Sed Placerat", 
        description: "Donec porttitor, mauris a suscipit pulvinar, quam dui lobortis leo, nec luctus arcu neque et dolor. Fusce ornare orci in est volutpat venenatis."
    },
    {
        feature: "In Tempus Velit", 
        description: "Proin lorem enim, maximus a convallis ut, scelerisque et purus. Integer blandit porttitor leo. Sed placerat mi id consectetur commodo."
    }
]

export const OFFERS = [
    {
        title: "Eu Eros Eget", 
        description: "Ut placerat diam ut felis suscipit, eget pharetra mauris vehicula. Donec molestie mi vel pharetra tempor. Sed ut quam lobortis, iaculis erat id, ultricies nisl. Duis vitae elit vitae lorem interdum interdum a id nibh. Donec sem massa, feugiat in mauris ut, convallis bibendum tortor. Aenean ultricies nisi lectus, ut mollis lorem scelerisque at. Sed suscipit auctor risus, a euismod neque accumsan et. Aliquam tortor est, suscipit at ipsum sed, laoreet ultricies diam. Phasellus iaculis eget leo vitae venenatis. Suspendisse eget purus ac eros sodales mattis id et mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus tincidunt arcu non vulputate.",
        id: "offer-1",
        checked: true
    },
    {
        title: "Metus Feugiat", 
        description: "Sed cursus lorem id laoreet hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis fermentum, quam nec sagittis dignissim, nulla ex dictum tellus, eu auctor turpis nunc a dolor. Nulla arcu nisi, tincidunt quis odio at, rhoncus dignissim est. Nunc et ligula et purus congue facilisis. Etiam vitae elit sapien. Vestibulum fermentum eleifend turpis mattis eleifend. Praesent non turpis quis augue efficitur tincidunt at non enim. Duis et tempor diam. Phasellus ac feugiat risus. Donec interdum dui a nisi rutrum finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: "offer-2",
        checked: false
    },
    {
        title: "Sollicitudin Elit", 
        description: "Vestibulum in lacinia tellus. Curabitur vitae laoreet mi. Nunc condimentum ipsum dui, pulvinar sollicitudin diam scelerisque vitae. Maecenas luctus fringilla tristique. Quisque molestie felis eu facilisis accumsan. Praesent eget augue in ipsum volutpat hendrerit laoreet at est. Quisque id maximus dui. Praesent eget nibh sit amet quam euismod sollicitudin. Aliquam eleifend mattis mi non tempor. Pellentesque bibendum euismod elit id tempus. Sed volutpat, sem non malesuada euismod, libero justo hendrerit metus, id hendrerit felis tortor rhoncus dui. Mauris faucibus porttitor posuere. Pellentesque lobortis, orci nec imperdiet varius, augue massa auctor ex, eget dictum neque nibh at massa.",
        id: "offer-3",
        checked: false
    }
]

export const TEAM = [
    {
        name: "Daenerys Targaryen", 
        position: "Financial Director",
        photo: photo1,
        photoLink: "https://www.freepik.com/free-photo/teenage-girl-happy-looking-woman-with-curly-ginger-hair-wearing-striped-off-shoulders-blouse-hat-playing-with-strand-hair-smile-isolated-white-wall_12694734.htm#page=96&position=5&from_view=author"
    },
    {
        name: "Tywin Lannister", 
        position: "Sales Manager",
        photo: photo2,
        photoLink: "https://www.freepik.com/free-photo/portrait-severe-young-short-haired-bearded-male-frowning-his-eyebrows-keeping-index-finger-his-lips-while-asking-be-quiet-isolated-white-wall_12233658.htm#page=137&position=2&from_view=author"
    },
    {
        name: "Sansa Stark", 
        position: "Advertisting Manager",
        photo: photo3,
        photoLink: "https://www.freepik.com/free-photo/teenage-shocked-girl-with-blond-hair-gathered-bun-tattoo-wearing-yellow-sweater-eyewear-pointing-index-fingers-up-copy-space-looking-camera-isolated-white-wall_13229195.htm#page=71&position=22&from_view=author"
    },
    {
        name: "Arya Stark", 
        position: "Web Developer",
        photo: photo4,
        photoLink: "https://www.freepik.com/free-photo/indoor-shot-young-adult-female-keeps-her-palms-together-praying-position-meditating-smiling-keeps-her-eyes-opened-isolated-white-background_18692586.htm#page=25&position=38&from_view=author"
    }
]

export const QUESTIONS = [
    {
        question: "Curabitur venenatis eu elit vitae lobortis. Integer facilisis lobortis interdum?", 
        answer: "Fusce eu quam vitae nibh condimentum rutrum. Nulla et lorem tellus. Mauris a magna rutrum, gravida massa quis, pharetra felis. Mauris blandit a magna nec consequat.",
        isOpen: true
    },
    {
        question: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae?", 
        answer: "In hac habitasse platea dictumst. Vestibulum in dolor quis nisl scelerisque sollicitudin. Suspendisse varius dictum lacinia. Mauris egestas orci ac imperdiet rhoncus. Fusce magna ipsum, luctus et nisl vel, tempus imperdiet sapien.",
        isOpen: false
    },
    {
        question: "Quisque ut massa vitae dolor gravida pharetra?", 
        answer: "Sed fringilla, mauris et euismod suscipit, libero sapien rutrum arcu, non malesuada lectus orci vitae dolor. Suspendisse malesuada odio nisi, sit amet rutrum ligula elementum eget. Nullam sit amet felis et leo sagittis vehicula at in erat.",
        isOpen: false
    },
    {
        question: "Quisque mollis, nisi non blandit semper, urna lectus pellentesque diam?", 
        answer: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eu risus sagittis, scelerisque ante vitae, molestie nisl. Donec eu orci leo.",
        isOpen: false
    },
    {
        question: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas?", 
        answer: "Nam blandit ex enim, vel euismod justo sagittis condimentum. Vivamus quis magna ac sem ornare convallis et non augue. Nullam sodales dui sagittis convallis sodales. Aliquam erat volutpat. Morbi eleifend eu sem quis blandit.",
        isOpen: false
    },
    {
        question: "Nunc diam dolor, interdum id ultricies dignissim, fermentum ac tortor?", 
        answer: "Praesent pellentesque commodo posuere. Integer sed purus cursus, ultrices velit non, volutpat mi. Sed auctor sapien lacus. Suspendisse ac ullamcorper libero. Integer leo sapien, maximus non rhoncus ut, aliquam et lectus.",
        isOpen: false
    },
]