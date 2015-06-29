var util = {
  get: {
    products: function(){
      var allProducts = [
{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","title":"tartfruitcake Soap","description":"tart fruitcake Powder Cupcake Cheesecake dessert croissant cheesecake canes Oat chocolate marshmallow. jelly-o oat tiramisu cake candy jelly sesame gingerbread Cookie danish pie. cotton roll","additives":["None for Me, Thank you"],"fragrance":["Island Coconut"],"charity":"Woman Made","id":"057263"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/356/188/7c0/a06e09c7385dbe9437056d4/x354-q80.jpg","title":"creammacaroon Soap","description":"cream macaroon chocolate claw sweet cake powder donut. Cheesecake sweet pudding gingerbread beans gummies plum. muffin. liquorice topping. Danish pie bar. bonbon oat candy gummies","additives":["Cocoa Powder"],"fragrance":["Heavenly"],"charity":"Ovarian Cancer Research Fund","id":"536791"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/108/25e/bd1/0d85f64d17454b2850d8e29/x354-q80.jpg","title":"bearsgummi Soap","description":"bears gummi canes bear chocolate marzipan. chocolate roll cupcake cake liquorice pie bonbon. bears. caramels macaroon. soufflé candy sugar canes chocolate Marzipan candy plum fruitcake","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Sandalwood"],"charity":"Woman Made","id":"173824"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5d0/455/97a/ea7788fd0a7102bccd34720/x354-q80.jpg","title":"dropsAmet Soap","description":"drops Amet tiramisu chupa sweet roll Toffee bear caramels candy cake bar. marzipan. sugar cake. topping powder. dessert cake canes gingerbread pie plum. Sesame pie.","additives":["Rosehip Powder","Cocoa Powder"],"fragrance":["Channel Chance"],"charity":"Ovarian Cancer Research Fund","id":"239415"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","title":"bearroll Soap","description":"bear roll. pudding bonbon chocolate roll Marzipan plum Candy drops cake Jelly-o sweet beans dessert macaroon bears lemon pudding. Apple pie dessert danish sugar topping.","additives":["Honey","Oatmeal"],"fragrance":[],"charity":"Woman Made","id":"781036"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/0f2/a60/2c1/33a557bcb0bda69893558b1/x354-q80.jpg","title":"bonbonpastry Soap","description":"bonbon pastry apple liquorice oat candy gummi cupcake cupcake. bear macaroon tiramisu tiramisu gummi Cake chups tootsie Sesame cake. candy candy bears jelly wafer sweet","additives":["Oatmeal","Seaweed"],"fragrance":[],"charity":"Woman Made","id":"679024"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-0.wanelo.com/p/03f/7c2/c16/e0fb6afe519f96a931ae358/x354-q80.jpg","title":"gingerbreadbears Soap","description":"gingerbread. bears icing halvah Danish chupa bear cupcake bears Chupa lemon Sweet Carrot pie pie. roll. drops plum beans beans candy jelly-o Powder Sweet chups","additives":["Poppy Seeds","Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"328705"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","title":"jellyoat Soap","description":"jelly oat roll Fruitcake pastry. icing. Marzipan sugar biscuit Tiramisu dessert canes sweet lemon Jelly caramels roll sesame candy tiramisu tiramisu Jelly cake bear Oat","additives":["Honey","Oatmeal"],"fragrance":["Sweetgrass"],"charity":"Girls Not Brides","id":"294350"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","title":"OatBrownie Soap","description":"Oat Brownie fruitcake carrot fruitcake donut cake gingerbread Muffin bar. macaroon jelly powder dessert toffee chocolate sweet roll Danish claw tiramisu gingerbread. brownie jelly Donut","additives":["Green Tea","Strawberry Seeds"],"fragrance":[],"charity":"National Breast Cancer Research","id":"715926"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/ba8/b5c/6d8/f50273cbadcd419be462e43/x354-q80.jpg","title":"pietart Soap","description":"pie. tart jelly-o jelly biscuit jelly-o. canes dessert oat Chocolate jujubes cake Marzipan cheesecake oat candy candy tart Bonbon dessert gingerbread toffee macaroon bears gingerbread.","additives":["Seaweed","None for Me, Thank you"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"064385"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","title":"Powdermacaroon Soap","description":"Powder macaroon sugar drops bear dessert oat chocolate. biscuit marzipan. cream drops danish Soufflé Danish Powder candy Cookie Powder tart chocolate cake cookie. danish beans","additives":["Cranberry Seeds","Rosehip Powder"],"fragrance":[],"charity":"Woman Made","id":"123854"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/e01/432/7b4/27d07b53c547464c2b9c61f/x354-q80.jpg","title":"pastrycake Soap","description":"pastry. cake chocolate wafer sweet oat danish sweet tart Gummies bar sweet pastry Brownie brownie plum soufflé biscuit plum. gummi chocolate bonbon. Ice gummies lollipop","additives":["Seaweed"],"fragrance":[],"charity":"National Breast Cancer Research","id":"504163"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/3a0/16b/8bb/a339bebb85ff0179f1116c5/x354-q80.jpg","title":"tartsweet Soap","description":"tart sweet croissant bar claw sugar donut. pie. plum bar. roll pastry soufflé plum. oat gingerbread. marshmallow. Apple jelly Cookie bonbon cream Ice cake Jelly","additives":["Honey","None for Me, Thank you"],"fragrance":[],"charity":"Girls Not Brides","id":"914502"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/5fa/1eb/383/2748f7af9cc1d9cf7fe017c/x354-q80.jpg","title":"gingerbreadcaramels Soap","description":"gingerbread caramels gingerbread pie. toffee candy claw apple sweet gingerbread snaps bear oat pie danish topping jujubes cake. gummies plum. biscuit chocolate pie lollipop. Cookie","additives":["Shea Butter"],"fragrance":["Peach Nectar"],"charity":"Girls Not Brides","id":"697238"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-2.wanelo.com/p/2d8/0bf/5be/770530d2841bf1dc16708a8/x354-q80.jpg","title":"tartChocolate Soap","description":"tart Chocolate bar chocolate chupa carrot pie roll Gummies cake donut wafer bears bear pastry wafer carrot jujubes. sesame candy toffee roll. bears pie sit.","additives":["Honey","Cranberry Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"710842"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-1.wanelo.com/p/198/6f5/3ce/d08b3f8af53258fe15af68b/x354-q80.jpg","title":"toffeeDrag Soap","description":"toffee Dragée Donut Gummies pie. topping. claw cheesecake jujubes pastry jelly-o roll bar bear dessert cream claw brownie beans halvah plum. wafer tart canes claw.","additives":["Oatmeal"],"fragrance":["Orange cream"],"charity":"Woman Made","id":"147398"},

{"type":"soap","price":12,"photoUrl":"https://cdn-img-3.wanelo.com/p/795/ac5/abf/4278e4cbead35f04f74fd64/x354-q80.jpg","title":"puddingroll Soap","description":"pudding roll cotton Tootsie cookie. candy macaroon chocolate cake. soufflé donut powder Dragée jelly-o pastry snaps. donut pie gummi dessert tiramisu cream icing. tart drops","additives":["Poppy Seeds"],"fragrance":[],"charity":"Ovarian Cancer Research Fund","id":"672180"}];
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
