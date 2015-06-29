var util = {
  get: {
    products: function(){
      // var allProducts = [{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"tart fruitcake Powder Cupcake Cheesecake dessert croissant cheesecake canes Oat chocolate marshmallow. jelly-o oat tiramisu cake candy jelly sesame gingerbread Cookie danish pie. cotton roll","additives":["None for Me, Thank you"],"fragrance":["Island Coconut"],"charity":"Woman Made","id":"057263"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/6a1/5b1/b06/6f2c50df1d175de6275d311/x200-q90.jpg","description":"beans. pudding. drops apple bears drops sweet Powder lemon chocolate chups tart Danish dessert sweet snaps Brownie Dessert cake cake cake cake pudding Croissant tootsie","additives":["Strawberry Seeds"],"fragrance":["Fresh Mango"],"charity":"National Breast Cancer Research","id":"615037"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/356/188/7c0/a06e09c7385dbe9437056d4/x354-q80.jpg","description":"pie sweet Cake jelly-o gummi Sweet chocolate chups Sesame Fruitcake cheesecake gummi powder chocolate candy cake. bear soufflé cotton Cupcake cake. brownie lemon sesame chocolate","additives":["Vanilla Beans, Ground"],"fragrance":["Elements of Bamboo"],"charity":"Woman Made","id":"614573"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/070/580/bd7/955c21882e18e43eecf993f/x200-q90.jpg","description":"bear halvah halvah. fruitcake donut. gummi liquorice gummi dragée cookie. cupcake marzipan cake gummies bears. Cake cheesecake cake gummies roll lemon dessert liquorice beans. macaroon.","additives":["Seaweed","Vanilla Beans, Ground"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"760532"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/356/188/7c0/a06e09c7385dbe9437056d4/x354-q80.jpg","description":"cream macaroon chocolate claw sweet cake powder donut. Cheesecake sweet pudding gingerbread beans gummies plum. muffin. liquorice topping. Danish pie bar. bonbon oat candy gummies","additives":["Cocoa Powder"],"fragrance":["Heavenly"],"charity":"Ovarian Cancer Research Fund","id":"536791"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/108/25e/bd1/0d85f64d17454b2850d8e29/x354-q80.jpg","description":"bears gummi canes bear chocolate marzipan. chocolate roll cupcake cake liquorice pie bonbon. bears. caramels macaroon. soufflé candy sugar canes chocolate Marzipan candy plum fruitcake","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Sandalwood"],"charity":"Woman Made","id":"173824"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5d0/455/97a/ea7788fd0a7102bccd34720/x354-q80.jpg","description":"drops Amet tiramisu chupa sweet roll Toffee bear caramels candy cake bar. marzipan. sugar cake. topping powder. dessert cake canes gingerbread pie plum. Sesame pie.","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Channel Chance"],"charity":"Ovarian Cancer Research Fund","id":"239415"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","description":"bear roll. pudding bonbon chocolate roll Marzipan plum Candy drops cake Jelly-o sweet beans dessert macaroon bears lemon pudding. Apple pie dessert danish sugar topping.","additives":["Honey","Oatmeal"],"fragrance":[],"charity":"Woman Made","id":"781036"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/7a8/716/ec8/cc2a84b6d7771ebbaf861d6/x200-q90.jpg","description":"cookie. wafer chocolate. macaroon Sesame Cupcake cake lemon claw roll bears. cheesecake topping. roll pudding ice sugar cake bears jelly pudding cheesecake canes roll wafer","additives":["Green Tea"],"fragrance":["Ginger Lime"],"charity":"National Breast Cancer Research","id":"094253"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/cb8/0ce/bf6/6ebeaf9021d75761103219d/x200-q90.jpg","description":"chocolate candy cake. cotton bonbon. bar. dessert jelly-o cookie. drops toffee Cupcake apple soufflé Dragée bar fruitcake beans ice Icing Cupcake gummi jelly pie bar","additives":["Honey"],"fragrance":[],"charity":"National Breast Cancer Research","id":"659073"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/145/0c9/0f3/f8553f5f37afc74f70286e2/x200-q90.jpg","description":"sweet drops donut candy Tiramisu dolor gummies bar. cream lemon carrot toffee gummi Powder fruitcake bonbon canes gummi macaroon croissant. lemon pie cake macaroon. gingerbread","additives":["Honey"],"fragrance":[],"charity":"Woman Made","id":"315207"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/0f2/a60/2c1/33a557bcb0bda69893558b1/x354-q80.jpg","description":"bonbon pastry apple liquorice oat candy gummi cupcake cupcake. bear macaroon tiramisu tiramisu gummi Cake chups tootsie Sesame cake. candy candy bears jelly wafer sweet","additives":["Oatmeal","Seaweed"],"fragrance":[],"charity":"Woman Made","id":"679024"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/03f/7c2/c16/e0fb6afe519f96a931ae358/x354-q80.jpg","description":"gingerbread. bears icing halvah Danish chupa bear cupcake bears Chupa lemon Sweet Carrot pie pie. roll. drops plum beans beans candy jelly-o Powder Sweet chups","additives":["Poppy Seeds","Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"328705"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/c56/796/386/abae2cb57755c8d07e4e6a4/x354-q80.jpg","description":"lemon sweet candy halvah plum biscuit liquorice ice Donut cake Muffin Chocolate dessert roll bear gummi fruitcake Pastry cake tiramisu bears bar fruitcake cake snaps","additives":["Poppy Seeds"],"fragrance":[],"charity":"Woman Made","id":"390682"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/056/0a2/8ac/d5158abcf6372d03b003625/x200-q90.jpg","description":"dessert. roll. dessert cream candy cake cookie cake lemon brownie bears cupcake pie cake. Tootsie pudding brownie Pastry bonbon tootsie soufflé claw. Powder toffee beans","additives":["Strawberry Seeds"],"fragrance":["Honey Almond"],"charity":"National Breast Cancer Research","id":"238756"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/145/0c9/0f3/f8553f5f37afc74f70286e2/x200-q90.jpg","description":"roll gummi gingerbread. wafer Marzipan bar bar cake ice muffin gummies bonbon Cookie Gummi oat Donut candy drops jelly. carrot Powder candy sweet roll ipsum","additives":["Cocoa Powder","Shea Butter"],"fragrance":["Heavenly"],"charity":"Ovarian Cancer Research Fund","id":"485916"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","description":"jelly oat roll Fruitcake pastry. icing. Marzipan sugar biscuit Tiramisu dessert canes sweet lemon Jelly caramels roll sesame candy tiramisu tiramisu Jelly cake bear Oat","additives":["Honey","Oatmeal"],"fragrance":["Sweetgrass"],"charity":"Girls Not Brides","id":"294350"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","description":"Oat Brownie fruitcake carrot fruitcake donut cake gingerbread Muffin bar. macaroon jelly powder dessert toffee chocolate sweet roll Danish claw tiramisu gingerbread. brownie jelly Donut","additives":["Green Tea","Strawberry Seeds"],"fragrance":[],"charity":"National Breast Cancer Research","id":"715926"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","description":"pie. tart jelly-o jelly biscuit jelly-o. canes dessert oat Chocolate jujubes cake Marzipan cheesecake oat candy candy tart Bonbon dessert gingerbread toffee macaroon bears gingerbread.","additives":["Seaweed","None for Me, Thank you"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"064385"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/25b/eb4/028/cf60fa5f898cd9b8f1fe631/x200-q90.jpg","description":"chocolate candy dessert Liquorice wafer powder pastry fruitcake chocolate liquorice Gummies claw. gummi gingerbread. bear ice macaroon sesame candy beans marzipan cheesecake gingerbread Pastry Tart","additives":["Poppy Seeds"],"fragrance":["Lemon Verbena"],"charity":"Woman Made","id":"395601"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"Powder macaroon sugar drops bear dessert oat chocolate. biscuit marzipan. cream drops danish Soufflé Danish Powder candy Cookie Powder tart chocolate cake cookie. danish beans","additives":["Cranberry Seeds","Rosehip Powder"],"fragrance":[],"charity":"Woman Made","id":"123854"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/982/38d/a1d/15cb15beb7da0c143b3c029/x200-q90.jpg","description":"gingerbread cake chups chocolate cupcake candy liquorice. sweet Powder cake. pie dolor powder halvah plum sesame Bonbon cotton macaroon sweet ice oat candy claw Apple","additives":["Poppy Seeds"],"fragrance":[],"charity":"Woman Made","id":"396854"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","description":"pastry. cake chocolate wafer sweet oat danish sweet tart Gummies bar sweet pastry Brownie brownie plum soufflé biscuit plum. gummi chocolate bonbon. Ice gummies lollipop","additives":["Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"504163"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/f26/cbc/2cc/f7ced462b155c00f81f0efa/x200-q90.jpg","description":"lollipop danish macaroon. pie bear croissant. apple Liquorice topping. Amet Ice pie claw gingerbread sweet dessert gummi roll. Danish sweet powder. chocolate roll Donut candy","additives":["Vanilla Beans, Ground"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"637804"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/3a0/16b/8bb/a339bebb85ff0179f1116c5/x354-q80.jpg","description":"tart sweet croissant bar claw sugar donut. pie. plum bar. roll pastry soufflé plum. oat gingerbread. marshmallow. Apple jelly Cookie bonbon cream Ice cake Jelly","additives":["Honey","None for Me, Thank you"],"fragrance":[],"charity":"Girls Not Brides","id":"914502"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/d13/324/728/e7cc09aa2b79e53d473af7d/x200-q90.jpg","description":"plum oat chups carrot Marzipan sweet Dessert candy canes canes Jelly sugar gingerbread. brownie gummies Candy cotton Cookie soufflé bears liquorice drops gummies donut croissant.","additives":["Strawberry Seeds","Cocoa Powder"],"fragrance":[],"charity":"Woman Made","id":"407291"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/25b/eb4/028/cf60fa5f898cd9b8f1fe631/x200-q90.jpg","description":"gingerbread. carrot lollipop. tart bears sugar tiramisu dessert. cake cake. chups claw carrot snaps marshmallow toffee Candy sweet. dragée jelly-o. donut soufflé candy pudding Bonbon","additives":["Seaweed","Vanilla Beans, Ground"],"fragrance":["Clean Air"],"charity":"National Breast Cancer Research","id":"473120"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5fa/1eb/383/2748f7af9cc1d9cf7fe017c/x354-q80.jpg","description":"gingerbread caramels gingerbread pie. toffee candy claw apple sweet gingerbread snaps bear oat pie danish topping jujubes cake. gummies plum. biscuit chocolate pie lollipop. Cookie","additives":["Shea Butter"],"fragrance":["Peach Nectar"],"charity":"Girls Not Brides","id":"697238"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","description":"tart Chocolate bar chocolate chupa carrot pie roll Gummies cake donut wafer bears bear pastry wafer carrot jujubes. sesame candy toffee roll. bears pie sit.","additives":["Honey","Cranberry Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"710842"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/198/6f5/3ce/d08b3f8af53258fe15af68b/x354-q80.jpg","description":"toffee Dragée Donut Gummies pie. topping. claw cheesecake jujubes pastry jelly-o roll bar bear dessert cream claw brownie beans halvah plum. wafer tart canes claw.","additives":["Oatmeal"],"fragrance":["Orange cream"],"charity":"Woman Made","id":"147398"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"pudding roll cotton Tootsie cookie. candy macaroon chocolate cake. soufflé donut powder Dragée jelly-o pastry snaps. donut pie gummi dessert tiramisu cream icing. tart drops","additives":["Poppy Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"672180"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/056/0a2/8ac/d5158abcf6372d03b003625/x200-q90.jpg","description":"carrot cream claw chocolate bear chupa topping chocolate jelly-o gummi sweet chocolate sweet gummi apple cupcake Jelly-o pie. canes toffee. chups chocolate cake. jelly-o pie.","additives":["Honey"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"308245"},{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/070/580/bd7/955c21882e18e43eecf993f/x200-q90.jpg","description":"chocolate. donut jelly cookie. Chupa jelly lollipop cheesecake Pastry beans chocolate chocolate sweet Cake carrot candy Carrot cake. canes bear caramels bar tiramisu dessert plum","additives":["Cocoa Powder"],"fragrance":["Grape"],"charity":"National Breast Cancer Research","id":"671824"}];
      var allProducts = [{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"tart fruitcake Powder Cupcake Cheesecake dessert croissant cheesecake canes Oat chocolate marshmallow. jelly-o oat tiramisu cake candy jelly sesame gingerbread Cookie danish pie. cotton roll","additives":["None for Me, Thank you"],"fragrance":["Island Coconut"],"charity":"Woman Made","id":"057263"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/356/188/7c0/a06e09c7385dbe9437056d4/x354-q80.jpg","description":"cream macaroon chocolate claw sweet cake powder donut. Cheesecake sweet pudding gingerbread beans gummies plum. muffin. liquorice topping. Danish pie bar. bonbon oat candy gummies","additives":["Cocoa Powder"],"fragrance":["Heavenly"],"charity":"Ovarian Cancer Research Fund","id":"536791"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/108/25e/bd1/0d85f64d17454b2850d8e29/x354-q80.jpg","description":"bears gummi canes bear chocolate marzipan. chocolate roll cupcake cake liquorice pie bonbon. bears. caramels macaroon. soufflé candy sugar canes chocolate Marzipan candy plum fruitcake","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Sandalwood"],"charity":"Woman Made","id":"173824"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5d0/455/97a/ea7788fd0a7102bccd34720/x354-q80.jpg","description":"drops Amet tiramisu chupa sweet roll Toffee bear caramels candy cake bar. marzipan. sugar cake. topping powder. dessert cake canes gingerbread pie plum. Sesame pie.","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Channel Chance"],"charity":"Ovarian Cancer Research Fund","id":"239415"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","description":"bear roll. pudding bonbon chocolate roll Marzipan plum Candy drops cake Jelly-o sweet beans dessert macaroon bears lemon pudding. Apple pie dessert danish sugar topping.","additives":["Honey","Oatmeal"],"fragrance":[],"charity":"Woman Made","id":"781036"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/0f2/a60/2c1/33a557bcb0bda69893558b1/x354-q80.jpg","description":"bonbon pastry apple liquorice oat candy gummi cupcake cupcake. bear macaroon tiramisu tiramisu gummi Cake chups tootsie Sesame cake. candy candy bears jelly wafer sweet","additives":["Oatmeal","Seaweed"],"fragrance":[],"charity":"Woman Made","id":"679024"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/03f/7c2/c16/e0fb6afe519f96a931ae358/x354-q80.jpg","description":"gingerbread. bears icing halvah Danish chupa bear cupcake bears Chupa lemon Sweet Carrot pie pie. roll. drops plum beans beans candy jelly-o Powder Sweet chups","additives":["Poppy Seeds","Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"328705"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","description":"jelly oat roll Fruitcake pastry. icing. Marzipan sugar biscuit Tiramisu dessert canes sweet lemon Jelly caramels roll sesame candy tiramisu tiramisu Jelly cake bear Oat","additives":["Honey","Oatmeal"],"fragrance":["Sweetgrass"],"charity":"Girls Not Brides","id":"294350"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","description":"Oat Brownie fruitcake carrot fruitcake donut cake gingerbread Muffin bar. macaroon jelly powder dessert toffee chocolate sweet roll Danish claw tiramisu gingerbread. brownie jelly Donut","additives":["Green Tea","Strawberry Seeds"],"fragrance":[],"charity":"National Breast Cancer Research","id":"715926"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","description":"pie. tart jelly-o jelly biscuit jelly-o. canes dessert oat Chocolate jujubes cake Marzipan cheesecake oat candy candy tart Bonbon dessert gingerbread toffee macaroon bears gingerbread.","additives":["Seaweed","None for Me, Thank you"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"064385"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"Powder macaroon sugar drops bear dessert oat chocolate. biscuit marzipan. cream drops danish Soufflé Danish Powder candy Cookie Powder tart chocolate cake cookie. danish beans","additives":["Cranberry Seeds","Rosehip Powder"],"fragrance":[],"charity":"Woman Made","id":"123854"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","description":"pastry. cake chocolate wafer sweet oat danish sweet tart Gummies bar sweet pastry Brownie brownie plum soufflé biscuit plum. gummi chocolate bonbon. Ice gummies lollipop","additives":["Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"504163"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/3a0/16b/8bb/a339bebb85ff0179f1116c5/x354-q80.jpg","description":"tart sweet croissant bar claw sugar donut. pie. plum bar. roll pastry soufflé plum. oat gingerbread. marshmallow. Apple jelly Cookie bonbon cream Ice cake Jelly","additives":["Honey","None for Me, Thank you"],"fragrance":[],"charity":"Girls Not Brides","id":"914502"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5fa/1eb/383/2748f7af9cc1d9cf7fe017c/x354-q80.jpg","description":"gingerbread caramels gingerbread pie. toffee candy claw apple sweet gingerbread snaps bear oat pie danish topping jujubes cake. gummies plum. biscuit chocolate pie lollipop. Cookie","additives":["Shea Butter"],"fragrance":["Peach Nectar"],"charity":"Girls Not Brides","id":"697238"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","description":"tart Chocolate bar chocolate chupa carrot pie roll Gummies cake donut wafer bears bear pastry wafer carrot jujubes. sesame candy toffee roll. bears pie sit.","additives":["Honey","Cranberry Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"710842"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/198/6f5/3ce/d08b3f8af53258fe15af68b/x354-q80.jpg","description":"toffee Dragée Donut Gummies pie. topping. claw cheesecake jujubes pastry jelly-o roll bar bear dessert cream claw brownie beans halvah plum. wafer tart canes claw.","additives":["Oatmeal"],"fragrance":["Orange cream"],"charity":"Woman Made","id":"147398"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","description":"pudding roll cotton Tootsie cookie. candy macaroon chocolate cake. soufflé donut powder Dragée jelly-o pastry snaps. donut pie gummi dessert tiramisu cream icing. tart drops","additives":["Poppy Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"672180"}];
      return allProducts;
    }
  }
};

var bootstrapDataRoutes = {
  'GET /products': util.get.products
};

angular.module('cloudsdk').factory('cloudstrapper_endpoints',['$q',function($q){
  return bootstrapDataRoutes;

}]);
