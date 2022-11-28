"use strict";function run(){var a=document.createElement("div");a.classList.add("rwd-bs"),a.appendChild(createHero()),a.appendChild(createCategories()),a.appendChild(createWorksSection()),a.appendChild(createWhoSection()),a.appendChild(createFaqsSection()),a.appendChild(createReviewsSection()),a.appendChild(createLogosSection()),a.appendChild(createTopFooter());var b=document.querySelector("header");b.after(a),removeExsiting(),$(".accordion").click(function(){$(this).toggleClass("accordion--open"),$(".accordion__txt",this).toggleClass("showFaq")}),setTimeout(function(){new Glide(".glide",{type:"carousel",autoplay:8e3,perView:4,gap:25,breakpoints:{768:{perView:1},992:{perView:3}}}).mount()},1e3)}function createHero(){var a=document.createElement("div");a.id="hero";var b=createContainer();return b.classList.add("heroContainer"),b.innerHTML+="<div><h1>The UK\u2019s first legal comparison site</h1><p>Save time and money finding a legal expert</p><div class=\"trusted\"><i class=\"fa-solid fa-circle-check\"></i><p>We\u2019ve helped over 50,000 people find a law firm that was right for them</p></div></div>",a.appendChild(b),a}function createTopCards(){function a(a){this.title=a.title,this.img=a.img,this.content=a.content,this.link=a.link;var b=document.createElement("a");return b.href=this.link,b.classList.add("top-card"),b.innerHTML="<h3>".concat(this.title,"</h3><img src='").concat(this.img,"' /><p>").concat(this.content,"</p><a class='btn btn--orange' href='").concat(this.link,"'>Get quotes</a>"),b}var b=document.createElement("div");b.id="topCards",b.classList.add("py-3");var d=createContainer(),c=document.createElement("h2");c.classList.add("mb-3"),c.innerHTML="Compare costs and get quotes for popular legal services",d.appendChild(c);var e=document.createElement("div");e.classList.add("row");return[{title:"draft an individual will",img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Wills_Probate_2.jpg",content:"Have your will written by our specialist legal experts.",link:"/personal/wills-probate/wills/draft-individual-will/compare"},{title:"power of attorney for an individual",img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/TLS%20Homepage/MicrosoftTeams-image-5.png",content:"If you need to make a power of attorney, we can help.",link:"/personal/wills-probate/protecting-others/power-of-attorney-for-an-individual/compare"},{title:"equity transfer",img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Property_1.jpg",content:"We have specialist conveyancing firms who can transfer equity in your home.",link:"/personal/property/equity-matters/equity-transfer/compare/"},{title:"start divorce proceedings",img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/Divorce_1.jpg",content:"Our specialist family law firms will guide you through the divorce process.",link:"/personal/family/break-up-advice/starting-divorce-proceedings/compare"}].forEach(function(b){var d=document.createElement("div");d.classList.add("col-12","col-md-6","col-lg-3");var f=new a(b);d.appendChild(f),e.appendChild(d)}),d.appendChild(e),b.appendChild(d),b}function createCategories(){function a(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.icon=a.icon,this.name=a.name,this.content=a.content,this.link=a.link;var b=document.createElement("div");b.classList.add("col-12","col-md-6");var c=document.createElement("a");return c.classList.add("tls-cat-link"),c.href=this.link,c.innerHTML="<div>".concat(this.icon,"</div><div><strong>").concat(this.name,"</strong><p>").concat(this.content,"</p></div><div><i class=\"fa-solid fa-arrow-right\"></i></div>"),b.appendChild(c),b}var b=document.createElement("section");b.id="categories";var d=createContainer();b.appendChild(d);var c=document.createElement("h2");c.innerHTML="Compare and get legal quotes for many types of legal services",d.appendChild(c);var e=document.createElement("p");e.innerHTML="We cover a wide variety of legal services, ranging from Property to Personal Injury, and Business Employment to Business Disputes.",d.appendChild(e);var f=document.createElement("div");f.classList.add("row"),d.appendChild(f);return[{icon:"<i class=\"fa-solid fa-book\"></i>",name:"Wills & Probate",content:"Write a will, contest a will, power of attorney, and more \u2026 ",link:"/wills-probate"},{icon:"<i class=\"fa-solid fa-house-user\"></i>",name:"Property",content:"Equity release, transferring equity, leases and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/property/equity-matters"},{icon:"<i class=\"fa-solid fa-house\"></i>",name:"Conveyancing",content:"Buying a property, selling a property, re-mortgaging a property, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/property/property-ownership"},{icon:"<i class=\"fa-solid fa-people-roof\"></i>",name:"Family",content:"Divorce, child arrangements, financial settlements, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/family"},{icon:"<i class=\"fa-solid fa-briefcase\"></i>",name:"Business Property",content:"Buying commercial property, selling commercial property, leases, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/business/business-property"},{icon:"<i class=\"fa-solid fa-person-harassing\"></i>",name:"Personal Disputes",content:"Neighbour disputes, money disputes, consumer disputes, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/disputes"},{icon:"<i class=\"fa-solid fa-car\"></i>",name:"Motor Offences",content:"Dangerous driving charges, careless driving charges, speeding offences, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/motor-offences"},{icon:"<i class=\"fa-solid fa-user-nurse\"></i>",name:"Employment",content:"Unfair dismissal, discrimination claims, disciplinary hearings, and more \u2026 ",link:"https://www.thelawsuperstore.co.uk/employment"}].forEach(function(b){var c=new a(b);f.appendChild(c)}),b}function createWorksSection(){function a(a){this.icon=a.icon,this.text=a.text;var b=document.createElement("div");return b.classList.add("works-point"),b.innerHTML="".concat(this.icon," <p>").concat(this.text,"</p>"),b}var b=document.createElement("section");b.id="works";var d=createContainer();b.appendChild(d);var c=document.createElement("div");c.classList.add("row");var e=document.createElement("div");e.classList.add("col-12","col-md-6");var f=document.createElement("h2");f.innerHTML="Compare lawyers in three simple steps",e.appendChild(f),e.appendChild(new a({icon:"<i class=\"fa-solid fa-1\"></i>",text:"Pick the legal service you need."})),e.appendChild(new a({icon:"<i class=\"fa-solid fa-2\"></i>",text:"Fill in a few details on our quick quote form."})),e.appendChild(new a({icon:"<i class=\"fa-solid fa-3\"></i>",text:"Get instant quotes to your inbox."})),c.appendChild(e);var g=document.createElement("div");return g.classList.add("col-12","col-md-6"),g.innerHTML="<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/MC-JKSOu0Ug\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",c.appendChild(g),d.appendChild(c),b}function createWhoSection(){function a(a){this.text=a;var b=document.createElement("li");return b.innerHTML="<div>".concat(this.text,"</div>"),b}function b(a){this.icon=a.icon,this.title=a.title,this.text=a.text;var b=document.createElement("div");return b.classList.add("bold-point"),b.innerHTML="<div>".concat(this.icon,"</div> <div><h3>").concat(this.title,"</h3><p>").concat(this.text,"</p></div>"),b}var d=document.createElement("section");d.id="who";var e=createContainer();d.appendChild(e);var c=document.createElement("div");c.classList.add("row");var f=document.createElement("div");f.classList.add("col-12","col-md-6");var g=document.createElement("h2");g.innerHTML="Who is The Law Superstore?",f.appendChild(g);var h=document.createElement("p");h.innerHTML="The Law Superstore is the UK\u2019s first legal comparison site, designed to save you money when looking for a lawyer. Get instant quotes, compare prices, locations and features and choose the law firm that\u2019s right for you. And we\u2019re completely free to use.<br /><br />With over 130 legal services on offer, from divorce to personal injury claims, we can help you get a great deal on your legal fees. You compare everything else, why not lawyers?",f.appendChild(h);var i=document.createElement("ul");i.appendChild(new a("Save money by comparing costs")),i.appendChild(new a("We only work with quality, experienced and regulated legal firms ")),i.appendChild(new a("Competitive prices across lots of locations")),f.appendChild(i),c.appendChild(f);var j=document.createElement("div");return j.classList.add("col-12","col-md-6"),j.appendChild(new b({icon:"<i class=\"fa-solid fa-certificate\"></i>",title:"Find expert lawyers",text:"All our legal service providers are regulated, accredited, and strictly vetted."})),j.appendChild(new b({icon:"<i class=\"fa-solid fa-minimize\"></i>",title:"Get instant quotes",text:"Start comparing lawyers in 30 seconds."})),j.appendChild(new b({icon:"<i class=\"fa-solid fa-sterling-sign\"></i>",title:"Save money",text:"Choose a law firm that meets your needs."})),c.appendChild(j),e.appendChild(c),d}function createFaqsSection(){var a=document.createElement("section");a.id="faqs";var b=createContainer(),c=document.createElement("h2");c.innerHTML="Frequently asked questions",b.appendChild(c);var d=document.createElement("p");return d.innerHTML="Whilst you might have used a comparison site for lots of other things, you might not have used one for legal services. Here are the answers to our top questions.",b.appendChild(d),b.innerHTML+="<div class=\"faq-search-results\">\n   <div class=\"accordion\" id=\"how-does-the-law-superstore-work\">\n        <h3 class=\"accordion__title\"><a href=\"javascript:;\">Are you a law firm?</a></h3>\n      <div class=\"accordion__txt\" style='display: none;'>\n            <p>We\u2019re not a law firm, we\u2019re a comparison site. We help you find lawyers in your area, for the service you need. We share a lot of information to help you make your decision and find experts, but we\u2019re not lawyers ourselves.</p>\n      </div>\n   </div>\n   <div class=\"accordion\" id=\"how-does-the-law-superstore-work\">\n        <h3 class=\"accordion__title\"><a href=\"javascript:;\">What happens when I get a quote?</a></h3>\n      <div class=\"accordion__txt\" style='display: none;'>\n            <p>When you submit your details, you\u2019ll receive an email with the details of up to four legal experts who cover your area and the service you need. At the same time, your details will be shared with those firms so they can offer you more details. We will only ever share your details with those firms you\u2019ve received quotes for.</p>\n      </div>\n   </div>\n   <div class=\"accordion\" id=\"how-does-the-law-superstore-work\">\n        <h3 class=\"accordion__title\"><a href=\"javascript:;\">Are my details secure?</a></h3>\n      <div class=\"accordion__txt\" style='display: none;'>\n            <p>We know how important data security and privacy is, especially around legal matters. We will only ever share the details of what you require and your contact information with the firms who quoted for you. This will never be more than four firms.</p>\n      </div>\n   </div>\n   <div class=\"accordion\" id=\"how-does-the-law-superstore-work\">\n        <h3 class=\"accordion__title\"><a href=\"javascript:;\">What do The Law Superstore charge?</a></h3>\n      <div class=\"accordion__txt\" style='display: none;'>\n            <p>We are a free service to help people find legal services. We know that for many people finding a lawyer is stressful. And if you don\u2019t really know what service you need, it\u2019s hard to know what to ask for, and how much it\u2019s going to cost. Our business model is based on a small fee being paid by the legal firms to appear on our site. They all pay the same, and no firm is given preferential treatment or priority. We recommend firms to you based on their location and service offerings. Nothing else.</p>\n      </div>\n   </div>\n   <div class=\"accordion\" id=\"how-does-the-law-superstore-work\">\n        <h3 class=\"accordion__title\"><a href=\"javascript:;\">How do I know the lawyers are any good?</a></h3>\n      <div class=\"accordion__txt\" style='display: none;'>\n            <p>We only work with experts who can give you a great experience. We thoroughly vet our partners, ensuring they\u2019re fully regulated by trustworthy bodies including SRA, BSB, CLC, IPW, IoP or CILEX. We check accreditations, review ratings, business finances, online presence, and credit checks. We only partner with firms who have a redress scheme, so if you do need to complain for any reason, there\u2019s always an option available to you. We also do ongoing checks and ask our users for reviews to ensure we\u2019re only working with the very best.</p>\n      </div>\n   </div>\n</div>",a.appendChild(b),a}function createReviewsSection(){var a=document.getElementsByClassName("testimonial__item"),b=document.createElement("section");b.id="tls-reviews";var c=createContainer(),d=document.createElement("h2");d.classList.add("mb-2"),d.innerHTML="What our clients say",c.appendChild(d);var e=document.createElement("div");e.classList.add("glide");var f=document.createElement("div");f.classList.add("glide__track"),f.setAttribute("data-glide-el","track");var g=document.createElement("ul");g.classList.add("glide__slides"),f.appendChild(g),e.appendChild(f);for(var m,n=0;n<a.length;n++){m=document.createElement("li"),m.innerHTML=a[n].innerHTML,m.classList.add("glide__slide");for(var h=m.querySelector(".testimonial__blockquote"),k=document.createElement("div"),l=0;5>l;)k.innerHTML+="<i class=\"fa-solid fa-star\"></i>",l++;h.appendChild(k),g.appendChild(m)}return c.appendChild(e),b.appendChild(c),b}function createLogosSection(){var a=document.createElement("section");a.id="creditations";var b=createContainer();a.appendChild(b);var c=document.createElement("h2");c.innerHTML="Legal professionals you can trust";var d=document.createElement("p");d.innerHTML="All our legal professionals are accredited or regulated.",b.appendChild(c),b.appendChild(d);var e=document.createElement("div");e.id="logosDiv";return[{img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/cilex-cpq-logo.png",link:"https://www.cilex.org.uk/"},{img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/sra.png",link:"https://www.sra.org.uk/"},{img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/logo.png",link:"https://www.clc-uk.org/"},{img:"https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/IPW_logo.svg",link:"https://www.ipw.org.uk/"}].forEach(function(a){var b=document.createElement("div"),c=document.createElement("img");c.src=a.img,b.appendChild(c),e.appendChild(b)}),b.appendChild(e),a}function createTopFooter(){function a(a){function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=document.createElement("div");c.classList.add("col-12","col-md-3"),b?c.innerHTML="<h3 onclick='expandCat(this)'>".concat(b,"</h3>"):a.forEach(function(a){c.innerHTML+=a}),d.appendChild(c)}this.title=a.title,this.col1=a.col1,this.col2=a.col2,this.col3=a.col3;var d=document.createElement("div");return d.classList.add("row"),b([],this.title),b(this.col1),b(this.col2),b(this.col3),d}var b=document.createElement("section");b.id="topFooter";var d=createContainer();b.appendChild(d);var c=document.createElement("h2");c.innerHTML="Can\u2019t find what you\u2019re looking for?";var e=document.createElement("p");return e.innerHTML="We provide quotes for over 130 legal services. But we\u2019ve also got lots of helpful guides and advice for whatever your legal needs are.",d.appendChild(c),d.appendChild(e),d.appendChild(new a({title:"Disputes",col1:["<a href=\"/disputes/money-disputes/bankruptcy-proceedings\">Bankruptcy Proceedings</a>","<a href=\"/disputes/general-disputes/consumer-disputes\">Consumer Disputes</a>"],col2:["<a href=\"/disputes/money-disputes/money-disputes\">Money Disputes</a>","<a href=\"/disputes/general-disputes/neighbour-disputes\">Neighbour Disputes</a>"],col3:["<a href=\"/disputes/general-disputes/other-disputes\">Other Disputes</a>"]})),d.appendChild(new a({title:"Employment",col1:["<a href=\"/employment/employment-disputes/disciplinary-hearings\">Disciplinary Hearings</a>","<a href=\"/employment/employment-disputes/discrimination-claim\">Discrimination Claim</a>","<a href=\"/employment/employment-disputes/equal-pay-claim\">Equal Pay Claim</a>"],col2:["<a href=\"/employment/employment-disputes/redundancy-claim\">Redundancy Claim</a>","<a href=\"/employment/employment-disputes/settlement-agreements\">Settlement Agreements</a>","<a href=\"/employment/employment-disputes/tupe\">TUPE</a>"],col3:["<a href=\"/employment/employment-disputes/unfair-dismissal-claim\">Unfair Dismissal Claim</a>","<a href=\"/employment/employment-disputes/unpaid-wages-claim\">Unpaid Wages Claim</a>"]})),d.appendChild(new a({title:"Family",col1:["<a href=\"/family/children-advice/child-abduction\">Child Abduction</a>","<a href=\"/family/children-advice/child-holiday-arrangements\">Child Holiday Arrangements</a>","<a href=\"/family/children-advice/child-residency-contact\">Child Residency &amp; Contact</a>","<a href=\"/family/break-up-advice/civil-partnership-breakdown\">Civil Partnership Breakdown</a>","<a href=\"/family/relationship-advice/cohabitation-advice\">Cohabitation</a>"],col2:["<a href=\"/family/break-up-advice/cohabitation-breakdown\">Cohabitation Breakdown</a>","<a href=\"/family/break-up-advice/domestic-violence\">Domestic Violence</a>","<a href=\"/family/break-up-advice/family-mediation\">Family Mediation</a>","<a href=\"/family/relationship-advice/gender-recognition-advice\">Gender Recognition</a>","<a href=\"/family/children-advice/other-child-issues\">Other Child Issues</a>"],col3:["<a href=\"/family/children-advice/parental-responsibility\">Parental Responsibility</a>","<a href=\"/family/relationship-advice/prenup-postnup-advice\">Prenup / Postnup Advice</a>","<a href=\"/family/break-up-advice/respond-to-a-divorce-petition\">Respond to a Divorce Petition</a>","<a href=\"/family/break-up-advice/starting-divorce-proceedings\">Start Divorce proceedings</a>"]})),d.appendChild(new a({title:"Motor Offences",col1:["<a href=\"/motor-offences/driving-offences/careless-dangerous-driving\">Careless / Dangerous Driving</a>","<a href=\"/motor-offences/driving-offences/drinks-drug-driving\">Drinks / Drug Driving</a>"],col2:["<a href=\"/motor-offences/driving-offences/speeding-offences\">Speeding Offences</a>"],col3:[]})),d.appendChild(new a({title:"Personal injury",col1:["<a href=\"/personal-injury/accidents/accidents-at-work-claim\">Accidents at work claim</a>","<a href=\"/personal-injury/accidents/accidents-in-a-public-place-claim\">Accidents in a public place claim</a>"],col2:["<a href=\"/personal-injury/accidents/road-traffic-accident-claim\">Road traffic accident claim</a>","<a href=\"/personal-injury/accidents/accidents-and-illness-abroad-claim\">Accidents and Illness Abroad Claim</a>"],col3:[]})),d.appendChild(new a({title:"Property",col1:["<a href=\"/property/property-ownership/buying-selling-a-property\">Buying &amp; Selling a Property</a>","<a href=\"/property/property-ownership/buying-a-property\">Buying A Property</a>","<a href=\"/property/leases/enfranchisement\">Enfranchisement</a>","<a href=\"/property/equity-matters/equity-release\">Equity Release</a>"],col2:["<a href=\"/property/equity-matters/equity-transfer\">Equity Transfer</a>","<a href=\"/property/leases/lease-extension-landlord\">Lease Extension (Landlord)</a>","<a href=\"/property/leases/lease-extension-tenant\">Lease Extension (Tenant)</a>","<a href=\"/property/disputes/possession-claims\">Possession Claims</a>"],col3:["<a href=\"/property/property-ownership/remortgaging-a-property\">Remortgaging a Property</a>","<a href=\"/property/property-ownership/selling-a-property\">Selling a Property</a>","<a href=\"/property/disputes/tenancy-disputes-for-landlord\">Tenancy Disputes (for Landlord)</a>","<a href=\"/property/disputes/tenancy-disputes-for-tenant\">Tenancy Disputes (for Tenant)</a>"]})),d.appendChild(new a({title:"Wills and probate",col1:["<a href=\"/wills-probate/dealing-with-an-estate/administer-an-estate\">Administer an estate</a>","<a href=\"/wills-probate/dispute/contest-a-will\">Contest a will</a>","<a href=\"/wills-probate/protecting-others/court-of-protection-deputyship\">Court of Protection deputyship</a>","<a href=\"/wills-probate/wills/draft-individual-will\">Draft an individual will</a>"],col2:["<a href=\"/wills-probate/wills/draft-joint-wills\">Draft joint wills</a>","<a href=\"/wills-probate/dealing-with-an-estate/obtain-a-grant\">Obtain a grant</a>"],col3:["<a href=\"/wills-probate/protecting-others/power-of-attorney-for-a-couple\">Power of Attorney for a couple</a>","<a href=\"/wills-probate/protecting-others/power-of-attorney-for-an-individual\">Power of Attorney for an individual</a>"]})),d.appendChild(new a({title:"Business Services",col1:["<a href=\"/business/business-disputes\">Business Disputes</a>","<a href=\"/business/business-employment\">Business Employment</a>"],col2:["<a href=\"/business/business-property\">Business Property</a>","<a href=\"/business/business-services\">Business Services</a>"],col3:[]})),b}function removeExsiting(){}function createContainer(){var a=document.createElement("div");return a.classList.add("container"),a}run();function expandCat(a){var b=a.parentElement.parentElement;b.classList.toggle("active");for(var c=b.getElementsByClassName("col-12"),d=0;d<c.length;d++)0!=d&&c[d].classList.toggle("show")}