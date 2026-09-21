const menuData = [
  {id:"shawarma-rice", title:"ركن الشاورما", items:[
    {name:"ساندوتش شاورما فراخ", prices:[["صغير",55],["وسط",75],["صاروخ",105],["عملاق",160]],img:"shawarma-rice.jpg"},
    {name:"ساندوتش شاورما فراخ موتزاريلا", prices:[["صغير",70],["وسط",90],["صاروخ",125],["عملاق",185]]},
    {name:"ساندوتش شاورما فراخ مشروم موتزاريلا", prices:[["صغير",80],["وسط",100],["صاروخ",140],["عملاق",200]]},
    {name:"ساندوتش شاورما لحمة", prices:[["صغير",75],["وسط",100],["صاروخ",125]]},
    {name:"إضافة موتزاريلا", prices:[["إضافة",20]]},
    {name:"إضافة شاورما", prices:[["إضافة",35]]}
  ]},
  {id:"shawarma-meals", title:"وجبات الشاورما", items:[
    {name:"شاورما فراخ",prices:[["وجبة",140]]},{name:"شاورما عربي موتزاريلا",prices:[["وجبة",155]]},
    {name:"شاورما عربي دبل",prices:[["وجبة",200]]},{name:"شاورما عربي لحمة",prices:[["وجبة",450]]},
    {name:"شاورما عربي عائلي موتزاريلا",prices:[["وجبة",500]]},{name:"وجبة شاورما فراخ",prices:[["وجبة",180]]},
    {name:"فتة شاورما لحمة",prices:[["وجبة",700]]},{name:"فتة شاورما فراخ",prices:[["وجبة",150]]}
  ]},
  {id:"grilled-chicken", title:"الفراخ المشوية", items:[
    {name:"فرخة مشوية مع الأرز البسمتي",prices:[["وجبة",390]],img:"grilled-chicken.jpg"},
    {name:"فرخة مشوية سادة",prices:[["وجبة",325]]},
    {name:"نصف فرخة مشوية مع الأرز البسمتي",prices:[["وجبة",200]]},
    {name:"ربع فرخة مشوية مع الأرز البسمتي",prices:[["وجبة",110]]}
  ]},
  {id:"western-meals", title:"الوجبات الغربية", items:[
    {name:"وجبة مشكل غربي",prices:[["وجبة",225]]},
    {name:"وجبة ست الشام",prices:[["وجبة",225]]},
    {name:"وجبة ميكس جريل",prices:[["وجبة",200]],desc:"تقدم مع أرز"},
    {name:"وجبة شيش طاوق",prices:[["وجبة",180]],desc:"10 قطع"},
    {name:"وجبة مكسيكي",prices:[["وجبة",160]]},
    {name:"وجبة فاهيتا",prices:[["وجبة",160]]},
    {name:"وجبة السوبريم",prices:[["وجبة",190]]},
    {name:"وجبة كبدة فراخ",prices:[["وجبة",140]]}
  ]},
  {id:"crispy-meals", title:"وجبات القرمشة", items:[
    {name:"كرسبي",prices:[["قطعتان",100],["4 قطع",175],["6 قطع",225]]},
    {name:"زنجر (حار)",prices:[["قطعتان",100],["4 قطع",175],["6 قطع",225]]},
    {name:"اسكالوب (بانية)",prices:[["قطعتان",120],["4 قطع",200],["6 قطع",250]]}
  ]},
  {id:"western-sandwiches", title:"الساندوتشات الغربي", items:[
    {name:"كرسبي",prices:[["فرنساوي",90],["صاروخ",115],["عملاق",180]]},
    {name:"زنجر",prices:[["فرنساوي",90],["صاروخ",115],["عملاق",180]]},
    {name:"دويتشو",prices:[["فرنساوي",90],["صاروخ",115],["عملاق",180]]},
    {name:"اسكالوب",prices:[["فرنساوي",95],["صاروخ",120],["عملاق",185]]},
    {name:"سوبريم",prices:[["فرنساوي",95],["صاروخ",120],["عملاق",185]]},
    {name:"شيش طاوق",prices:[["فرنساوي",100],["صاروخ",125],["عملاق",190]]},
    {name:"مكسيكي فراخ",prices:[["فرنساوي",80],["صاروخ",110],["عملاق",165]]},
    {name:"فاهيتا فراخ",prices:[["فرنساوي",80],["صاروخ",110],["عملاق",165]]},
    {name:"إضافة موتزاريلا أو شيدر",prices:[["إضافة",20]]}
  ]},
  {id:"western-sandwich-addons", title:"كفتة وبطاطس", items:[
    {name:"كفتة فراخ",prices:[["سوري",65],["فرنساوي",75],["صاروخ",105],["عملاق",150]]},
    {name:"كفتة لحمة",prices:[["سوري",75],["فرنساوي",90],["صاروخ",115],["عملاق",160]]},
    {name:"كبدة فراخ",prices:[["سوري",50],["فرنساوي",55],["صاروخ",70],["عملاق",100]]},
    {name:"بطاطس بوم فريت",prices:[["سوري",30],["فرنساوي",35],["صاروخ",35],["عملاق",60]]},
    {name:"بطاطس موتزاريلا",prices:[["سوري",40],["فرنساوي",50],["صاروخ",50],["عملاق",80]]},
    {name:"بطاطس بصوص شيدر",prices:[["سوري",40],["فرنساوي",50],["صاروخ",50],["عملاق",80]]},
    {name:"إضافة صوص شيدر",prices:[["إضافة",20]]}
  ]},
  {id:"burger", title:"ركن البرجر", items:[
    {name:"تكساس برجر كلاسيك",prices:[["وجبة",115]]},
    {name:"تكساس برجر كلاسيك دابل",prices:[["وجبة",165]]},
    {name:"تشيكن كرسبي",prices:[["وجبة",110]]},
    {name:"إضافة صوص شيدر",prices:[["إضافة",20]]}
  ]},
  {id:"ingredients", title:"ركن المكونات", items:[
    {name:"مكرونة بشاميل",prices:[["M",95],["XL",125]]},
    {name:"مكرونة صلصة حمراء",prices:[["M",95],["XL",125]]},
    {name:"مكرونة بسطرمة",prices:[["M",100],["XL",135]]},
    {name:"مكرونة كرسبي وايت صوص",prices:[["M",100],["XL",135]]},
    {name:"مكرونة سجق",prices:[["M",100],["XL",135]]}
  ]},
  {id:"pizza", title:"البيتزا", items:[
    {name:"بيتزا ست الشام",prices:[["M",100],["L",140],["XL",180]]},
    {name:"مارجريتا",prices:[["M",80],["L",115],["XL",140]]},
    {name:"خضار (الفصول الأربعة)",prices:[["M",90],["L",120],["XL",150]]},
    {name:"تشيكن رانش",prices:[["M",100],["L",135],["XL",175]]},
    {name:"كرانشي",prices:[["M",100],["L",140],["XL",180]]},
    {name:"بسطرمة",prices:[["M",100],["L",140],["XL",180]]},
    {name:"سجق",prices:[["M",100],["L",140],["XL",180]]},
    {name:"بيبروني",prices:[["M",100],["L",140],["XL",180]]},
    {name:"فاهيتا",prices:[["M",90],["L",130],["XL",170]]},
    {name:"مكسيكي",prices:[["M",90],["L",130],["XL",170]]},
    {name:"مشكل لحوم",prices:[["M",110],["L",150],["XL",200]]},
    {name:"مشكل أجبان",prices:[["M",95],["L",130],["XL",160]]},
    {name:"شيش طاوق",prices:[["M",110],["L",150],["XL",180]]},
    {name:"سوبر",prices:[["M",95],["L",130],["XL",170]]}
  ]},
  {id:"hot-appetizers", title:"المقبلات الساخنة", items:[
    {name:"فتة شامية (3 قطع)",prices:[["L",40],["M",75]]},
    {name:"شراك بالجبنة (3 قطع)",prices:[["M",70]]},
    {name:"طبق بطاطس",prices:[["M",25]]},
    {name:"طبق بطاطس موتزاريلا",prices:[["M",50]]},
    {name:"طبق بطاطس بصوص الشيدر",prices:[["M",50]]},
    {name:"كومبو (طبق بطاطس + مشروب غازي)",prices:[["M",50]]},
    {name:"طبق أرز بسمتي ص",prices:[["M",45]]},
    {name:"طبق أرز بسمتي ك",prices:[["M",55]]},
    {name:"خبز سوري",prices:[["قطعة",15]]},
    {name:"خبز فرنسي",prices:[["قطعة",20]]},
    {name:"خبز شامي",prices:[["قطعة",25]]}
  ]},
  {id:"cold-appetizers", title:"المقبلات الباردة", items:[
    {name:"طبق مقبلات ميكس",prices:[["M",35],["L",75]]},
    {name:"مسقعة",prices:[["M",30],["L",60]]},
    {name:"بابا غنوج",prices:[["M",30],["L",40]]},
    {name:"محمرة",prices:[["M",30],["L",40]]},
    {name:"مخلل سوري مشكل",prices:[["M",25],["L",35]]},
    {name:"طحينة",prices:[["M",10],["L",15]]},
    {name:"متبل",prices:[["M",35],["L",45]]},
    {name:"تومية سبايسي",prices:[["M",20],["L",40]]},
    {name:"كول سلو",prices:[["M",25],["L",45]]},
    {name:"تومية",prices:[["M",25],["L",35]]}
  ]},
  {id:"sauces", title:"الصوصات", items:[
    {name:"صوص سويت تشيلي",prices:[["S",15],["M",25]]},
    {name:"صوص رانش",prices:[["S",20],["M",30]]},
    {name:"صوص هالبينو",prices:[["S",15],["M",25]]},
    {name:"صوص شيدر",prices:[["S",15],["M",25]]},
    {name:"صوص باربكيو",prices:[["S",15],["M",20]]}
  ]},
  {id:"salads", title:"السلطات", items:[
    {name:"سلطة خضراء",prices:[["M",35],["L",45]]},
    {name:"سلطة سيزر",prices:[["M",40],["L",50]]},
    {name:"تبولة",prices:[["M",40],["L",50]]},
    {name:"سلطة شاورما فراخ",prices:[["M",80],["L",100]]}
  ]},
  {id:"addons", title:"إضافات", items:[
    {name:"لحوم",prices:[["L",35],["XL",50]]},
    {name:"خضار",prices:[["L",20],["XL",30]]},
    {name:"صوص",prices:[["L",20],["XL",30]]},
    {name:"محشية الأطراف",prices:[["L",40],["XL",60]]},
    {name:"مشروم",prices:[["L",25],["XL",40]]},
    {name:"موتزاريلا",prices:[["L",25],["XL",40]]}
  ]},
  {id:"fatout", title:"قسم الفتوتة", items:[
    {name:"فتوتة شاورما فراخ",prices:[["M",95],["XL",155]]},
    {name:"فتوتة كرسبي",prices:[["M",100],["XL",165]]},
    {name:"فتوتة دويتشو",prices:[["M",100],["XL",165]]},
    {name:"فتوتة شيش طاوق",prices:[["M",100],["XL",165]]}
  ]},
  {id:"sweets-baked", title:"مخبوزات ست الشام", items:[
    {name:"سوبر مار",prices:[["سعر",125]],desc:"طبقين من صنف المعجنات مع صوص البيتزا + شاورما فراخ"},
    {name:"دوبامين",prices:[["سعر",140]],desc:"طبقين من صنف المعجنات محشوة كرسبي مع صوص البومليون وتقدم مع البطاطس والجبنة"},
    {name:"قبلة الجبن شاورما فراخ",prices:[["سعر",150]],desc:"طبق من صنف المعجنات مع شاورما فراخ"}
  ]},
  {id:"boxes", title:"البوكسات", items:[
    {name:"بوكس الأساطير",prices:[["سعر",200]]},
    {name:"بوكس النخبة",prices:[["سعر",250]]},
    {name:"بوكس الصياد",prices:[["سعر",450]]},
    {name:"بوكس القيصر",prices:[["سعر",240]]},
    {name:"بوكس الاختيار",prices:[["سعر",300]]},
    {name:"بوكس الكومبو",prices:[["سعر",140]]},
    {name:"بوكس الأطفال",prices:[["سعر",100]]}
  ]},
  {id:"manakeesh", title:"المناقيش", items:[
    {name:"جبنة موتزاريلا",prices:[["سعر",50]]},
    {name:"جبنة ميكس",prices:[["سعر",50]]},
    {name:"جبنة كريمي",prices:[["سعر",50]]},
    {name:"مشكل أجبان",prices:[["سعر",75]]},
    {name:"مشكل أجبان بسطرمة",prices:[["سعر",75]]},
    {name:"مشكل أجبان سوسيس",prices:[["سعر",75]]},
    {name:"مشكل أجبان سجق",prices:[["سعر",75]]},
    {name:"بيتزا سادة",prices:[["سعر",55]]},
    {name:"زعتر",prices:[["سعر",60]]},
    {name:"زيتون",prices:[["سعر",60]]},
    {name:"خضار",prices:[["سعر",60]]},
    {name:"زعتر سادة",prices:[["سعر",50]]},
    {name:"محمرة سادة",prices:[["سعر",45]]},
    {name:"زعتر مع موتزاريلا",prices:[["سعر",60]]},
    {name:"زعتر مع محمرة",prices:[["سعر",60]]},
    {name:"زعتر مع محمرة مع موتزاريلا",prices:[["سعر",70]]},
    {name:"محمرة موتزاريلا",prices:[["سعر",55]]},
    {name:"بسطرمة موتزاريلا",prices:[["سعر",70]]},
    {name:"سجق",prices:[["سعر",65]]},
    {name:"سجق موتزاريلا",prices:[["سعر",70]]},
    {name:"شيش طاوق مع موتزاريلا",prices:[["سعر",75]]},
    {name:"سوسيس موتزاريلا",prices:[["سعر",70]]},
    {name:"رومي مدخن موتزاريلا",prices:[["سعر",75]]},
    {name:"سلامي موتزاريلا",prices:[["سعر",55]]},
    {name:"شيش طاوق",prices:[["سعر",65]]},
    {name:"منقوشة ست الشام (فراخ)",prices:[["سعر",75]]}
  ]},
  {id:"extras", title:"الإضافات المتنوعة", items:[
    {name:"صوصات متنوعة ست الشام",prices:[["سعر",75]]}
  ]},
  {id:"drinks", title:"المشروبات", items:[
    {name:"مياه معدنية صغيرة",prices:[["سعر",12]]},
    {name:"مياه غازية (سبيرو سباتس)",prices:[["سعر",25]]},
    {name:"ليمون نعناع غازي",prices:[["سعر",50]]}
  ]}
];

const nav = document.getElementById("categoryNav");
const menu = document.getElementById("menu");
const search = document.getElementById("searchInput");
const clear = document.getElementById("clearSearch");
const info = document.getElementById("resultsInfo");
const empty = document.getElementById("noResults");

function money(n){return `${n} ج.م`}

function matches(item, q, sectionTitle){
  if(!q) return true;
  const hay = [item.name,item.desc||"",sectionTitle].join(" ").toLowerCase();
  return hay.includes(q.toLowerCase());
}

function card(item){
  const img = item.img ? `<img class="card-img" loading="lazy" src="${item.img}" alt="${item.name}">` : "";
  const prices = item.prices.map(([label,val])=>`<span class="price-pill"><b>${label}</b> ${money(val)}</span>`).join("");
  return `<article class="menu-card ${item.img ? "featured":""}">
    ${img}
    <div class="card-main">
      <div class="card-top"><div class="item-name">${item.name}</div>${item.prices.length===1?`<span class="price">${money(item.prices[0][1])}</span>`:""}</div>
      ${item.desc?`<p class="item-desc">${item.desc}</p>`:""}
      ${item.prices.length>1?`<div class="price-list">${prices}</div>`:""}
    </div>
  </article>`;
}

function render(q=""){
  const query=q.trim();
  let total=0;
  const parts=[];
  menuData.forEach(section=>{
    const items=section.items.filter(i=>matches(i,query,section.title));
    if(!items.length) return;
    total+=items.length;
    parts.push(`<section class="menu-section" id="${section.id}">
      <div class="section-title"><span class="ornament">ش</span><h2>${section.title}</h2></div>
      <div class="menu-grid">${items.map(card).join("")}</div>
    </section>`);
  });
  menu.innerHTML=parts.join("");
  empty.hidden=total!==0;
  info.textContent=query ? `تم العثور على ${total} صنف مطابق للبحث` : `${menuData.reduce((n,s)=>n+s.items.length,0)} صنفًا في المنيو`;
  clear.hidden=!query;
}

function renderNav(){
  nav.innerHTML=menuData.map(s=>`<a href="#${s.id}">${s.title}</a>`).join("");
}
search.addEventListener("input",e=>render(e.target.value));
clear.addEventListener("click",()=>{search.value="";render();search.focus()});
renderNav();
render();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const link=nav.querySelector(`a[href="#${entry.target.id}"]`);
      nav.querySelectorAll("a").forEach(a=>a.classList.remove("active"));
      if(link) link.classList.add("active");
    }
  });
},{rootMargin:"-35% 0px -55% 0px",threshold:0});
document.querySelectorAll(".menu-section").forEach(s=>observer.observe(s));

nav.addEventListener("click",e=>{
  const a=e.target.closest("a"); if(!a) return;
  nav.querySelectorAll("a").forEach(x=>x.classList.remove("active"));
  a.classList.add("active");
});
