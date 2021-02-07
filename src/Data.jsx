import React from 'react';


const Data = [
    {
        key:1,
        reference:'https://www.thrillophilia.com/blog/wp-content/uploads/2015/01/Chadar-trek-1024x577.jpg',
        title:'Chadar Trek',
        city:'Ladakh',
    },
    {
        key:2,
        reference:'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pacuareriverrafting.jpg',
        title:'White River Rafting',
        city:'Rishikesh',
    },
    {
        key:3,
        reference:'https://upload.wikimedia.org/wikipedia/commons/2/22/Filming_of_Bengal_Tiger_in_Jim_Corbett_National_Park.jpg',
        title:'Jim Corbett Safari',
        city:'Uttarakhand',
    },
    {
        key:4,
        reference:'https://upload.wikimedia.org/wikipedia/commons/4/42/Ocean_Tribe_Scuba_Diving_Havelock.jpg',
        title:'Scuba Diving',
        city:'Andaman',
    },
    {
        key:5,
        reference:'https://www.thrillophilia.com/blog/wp-content/uploads/2015/01/Roopkund-Trek-1024x577.jpg',
        title:'Roopkund Trek',
        city:'Uttarakhand',
    },
    {
        key:6,
        reference:'https://www.thrillophilia.com/blog/wp-content/uploads/2015/01/LEH-1024x577.jpg',
        title:'Bike Trip',
        city:'Ladakh',
    },
    {
        key:7,
        reference:'https://upload.wikimedia.org/wikipedia/commons/f/f4/Caving_adventures_in_Meghalaya_India.jpg',
        title:'Caving',
        city:'Meghalaya',
    },
    {
        key:8,
        reference:'https://upload.wikimedia.org/wikipedia/commons/e/ea/Freestyle_skiing_jump2.jpg',
        title:'Skiing',
        city:'Gulmarg',
    },
    {
        key:9,
        reference:'https://d2klr1ixr44jla.cloudfront.net/0/0/assets/images/5a7d73ae51ea0a2045000931.jpg',
        title:'Bungee Jumping',
        city:'Rishikesh',
    },
    {
        key:10,
        reference:'https://adventurejay.com/blog/images/IMG_6526-EFFECTS.jpg',
        title:'River Rafting',
        city:'Uttarakhand',
    },
    {
        key:11,
        reference:'https://upload.wikimedia.org/wikipedia/commons/f/fc/Ballooning_Away_in_Maasai_Mara.jpg',
        title:'Hot Air Ballon',
        city:'Jaipur',
    },
    {
        key:12,
        reference:'data:image/jpeg;base64,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',
        title:'Dune Bashing',
        city:'Jaisalmer',
    },
    {
        key:13,
        reference:'https://upload.wikimedia.org/wikipedia/commons/e/e2/Paragliding_World_Cup_2015_at_nearby_Bir-Billing.jpg',
        title:'Paragliding',
        city:'Himachal Pradesh',
    },
    {
        key:14,
        reference:'https://live.staticflickr.com/5255/5460187499_3df063f488_b.jpg',
        title:'White Water River Rafting',
        city:'Kullu',
    },
    {
        key:15,
        reference:'https://images.thrillophilia.com/image/upload/s--4EHLvJYn--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/058/031/original/2010_mavericks_competition.jpg.jpg?1458161129',
        title:'Surfing',
        city:'Goa',
    },
    {
        key:16,
        reference:'https://www.indian-ocean.com/wp-content/uploads/2017/05/excursion18.jpg',
        title:'Skydiving',
        city:'Mysore',
    },
    {
        key:17,
        reference:'https://www.thrillophilia.com/blog/wp-content/uploads/2017/05/shutterstock_630573320-1024x577.jpg',
        title:'Flying Fox',
        city:'Rajasthan',
    },
    {
        key:18,
        reference:'https://www.nps.gov/deto/learn/news/images/NPS-Photo.jpg',
        title:'Rock Climbing',
        city:'Satpura',
    },
    {
        key:19,
        reference:'https://upload.wikimedia.org/wikipedia/commons/f/f7/Sunset_at_sandakphu.jpg',
        title:'Sandakphu Trek',
        city:'Bengal',
    },
    {
        key:20,
        reference:'https://upload.wikimedia.org/wikipedia/commons/c/c5/Panthera_leo_persica%28Asiatic_Lion%29_Gir.jpg',
        title:'WildLife Safari',
        city:'Gujarat',
    },
    {
        key:21,
        reference:'https://upload.wikimedia.org/wikipedia/commons/2/2c/Dudhsagar_Falls_Triplet.jpg',
        title:'Dudhsagar Trek',
        city:'Goa',
    },
    {
        key:22,
        reference:'https://upload.wikimedia.org/wikipedia/commons/8/87/Touring_kayak_Aquarius_Trek_on_the_river_in_Poland.jpg',
        title:'Kayaking',
        city:'Goa',
    },
    {
        key:23,
        reference:'https://upload.wikimedia.org/wikipedia/commons/7/72/Skiing_manali.jpg',
        title:'Skiing',
        city:'Kurfi',
    },
    {
        key:24,
        reference:'https://66.media.tumblr.com/029f7103d9e6fc3efafca71efa3b85c2/tumblr_inline_o7mioekKCS1t30nrq_1280.jpg',
        title:'Cycling',
        city:'Munnar',
    },
    {
        key:25,
        reference:'https://images.thrillophilia.com/image/upload/s--l6Vkq82u--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/022/324/original/m_Coleman_Camping_Adventure_in_Coorg_(25).jpg.jpg?1458194492',
        title:'Camping',
        city:'Coorg',
    },
    {
        key:26,
        reference:'https://www.bestwebsiteinindia.com/blog/wp-content/uploads/2018/10/Kanha-National-Park.jpg',
        title:'Tiger Safari',
        city:'Madhya Pradesh',
    },
    {
        key:27,
        reference:'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_860,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/mg2e0fssuvit7giykhyf/TheGiantSwinginRishikesh.jpg',
        title:'Giant Swing',
        city:'Rishikesh',
    },
    {
        key:28,
        reference:'https://upload.wikimedia.org/wikipedia/commons/a/a2/Gulmarg_gondola.JPG',
        title:'Gondola Ride',
        city:'Gulmarg',
    },
    {
        key:29,
        reference:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Discover_Scuba_Diving_--_St._Croix%2C_US_Virgin_Islands.jpg',
        title:'Scuba Diving',
        city:'Malvan',
    },
    {
        key:30,
        reference:'https://upload.wikimedia.org/wikipedia/commons/6/66/Airdrome_Airplanes_Fokker_D.VII.jpg',
        title:'Microlight Flying',
        city:'Bangalore',
    },

];

export default Data;