let family = [
    {
        "text": "Starting Divorce Proceedings",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/starting-divorce-proceedings/compare"
    },
    {
        "text": "Respond to a Divorce Petition",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/respond-to-a-divorce-petition/compare"
    },
    {
        "text": "Cohabilitation Breakdown",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/cohabitation-breakdown/compare"
    },
    {
        "text": "Domestic Violence",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/domestic-violence/compare"
    },
    {
        "text": "Family Mediation",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/family-mediation/compare"
    },
    {
        "text": "Civil Partnership Breakdown",
        "link": "https://www.thelawsuperstore.co.uk/personal/family/break-up-advice/civil-partnership-breakdown/compare"
    },
]

let property = [
    {
        "text": "Buying A Property",
        "link": "https://conveyancing.thelawsuperstore.co.uk/quoteforms/conveyancing/purchase"
    },
    {
        "text": "Selling a Property",
        "link": "https://conveyancing.thelawsuperstore.co.uk/quoteforms/conveyancing/sale"
    },
    {
        "text": "Buying & Selling a Property",
        "link": "https://conveyancing.thelawsuperstore.co.uk/quoteforms/conveyancing/sale-purchase"
    },
    {
        "text": "Remortgaging a Property",
        "link": "https://conveyancing.thelawsuperstore.co.uk/quoteforms/conveyancing/remortgage"
    },
]

let wills = [
    {
        "text": "Draft Individual Will",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/wills/draft-individual-will/compare"
    },
    {
        "text": "Draft Joint Wills",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/wills/draft-joint-wills/compare"
    },
    {
        "text": "Contest a Will",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/dispute/contest-a-will/compare"
    },
    {
        "text": "Obtain a Grant",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/dealing-with-an-estate/obtain-a-grant/compare"
    },
    {
        "text": "Administer an Estate",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/dealing-with-an-estate/administer-an-estate/compare"
    },
    {
        "text": "Power of Attorney for an Individual",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/protecting-others/power-of-attorney-for-an-individual/compare"
    },
    {
        "text": "Power of Attorney for a Couple",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/protecting-others/power-of-attorney-for-a-couple/compare"
    },
    {
        "text": "Court of Protection Deputyship",
        "link": "https://www.thelawsuperstore.co.uk/personal/wills-probate/protecting-others/court-of-protection-deputyship/compare"
    },
]

let Business = [
    {
        "text": "Business Purchase",
        "link": "https://www.thelawsuperstore.co.uk/business/business-services/business-purchase-sale/business-purchase/compare"
    },
    {
        "text": "Business Sale",
        "link": "https://www.thelawsuperstore.co.uk/business/business-services/business-purchase-sale/business-sale/compare"
    },
    {
        "text": "Assignment of Lease (landlord)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/assignment-of-lease-landlord/compare"
    },
    {
        "text": "Assignment of Lease (tenant)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/assignment-of-lease-tenant/compare"
    },
    {
        "text": "New Lease (landlord)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/new-lease-landlord/compare"
    },
    {
        "text": "New Lease (tenant)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/new-lease-tenant/compare"
    },
    {
        "text": "Lease Renewal (landlord)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/lease-renewal-landlord/compare"
    },
    {
        "text": "Lease Renewal (tenant)",
        "link": "https://www.thelawsuperstore.co.uk/business/business-property/leases/lease-renewal-tenant/compare"
    },
]

let equity = [
    {
        "text": "Equity Release",
        "link": "https://www.thelawsuperstore.co.uk/personal/property/equity-matters/equity-release/compare"
    },
    {
        "text": "Equity Transfer",
        "link": "https://www.thelawsuperstore.co.uk/personal/property/equity-matters/equity-transfer/compare"
    },
]

let disputes = [
    {
        "text": "Money Disputes",
        "link": "https://www.thelawsuperstore.co.uk/personal/disputes/money-disputes/money-disputes/compare"
    },
    {
        "text": "Bankruptcy Proceedings",
        "link": "https://www.thelawsuperstore.co.uk/personal/disputes/money-disputes/bankruptcy-proceedings/compare"
    },
    {
        "text": "Consumer Disputes",
        "link": "https://www.thelawsuperstore.co.uk/personal/disputes/general-disputes/consumer-disputes/compare"
    },
    {
        "text": "Neighbour Disputes",
        "link": "https://www.thelawsuperstore.co.uk/personal/disputes/general-disputes/neighbour-disputes/compare"
    },
    {
        "text": "Other Disputes",
        "link": "https://www.thelawsuperstore.co.uk/personal/disputes/general-disputes/other-disputes/compare"
    }
]

//window.onload = (event) => {
    function run() {
        let experimentContent = document.createElement('div')
        experimentContent.classList.add('rwd-bs')

        let mainSection = document.createElement('main')
        mainSection.id = 'mainSection'

        let c = createContainer()

        experimentContent.appendChild(createTopBanner())
        c.appendChild(createIntroSection())
        c.appendChild(createCategories())
        c.appendChild(createBar())
        c.appendChild(createReviewsSection())
        c.appendChild(createFaqsSection())
        c.appendChild(createLogosSection())

        mainSection.appendChild(c)

        experimentContent.appendChild(mainSection)
        
        let header = document.querySelector('header')
        header.after(experimentContent)
        
        $('.accordion').click(function () {
            $(this).toggleClass('accordion--open')
            $('.accordion__txt', this).toggleClass('showFaq')
        })

        setTimeout(() => {
            console.log('trying glide')
            new Glide('.glide', {
                type: 'carousel',
                autoplay: 8000,
                perView: 4,
                gap: 25,
                breakpoints: {
                    768: {
                        perView: 1
                    },
                    992: {
                        perView: 3
                    }
                }
            }).mount()
        }, 1000);
    }

    function createModal() {
        let tlsModal = document.createElement('div')
        tlsModal.id = 'tlsModal'
        tlsModal.classList.add('hide', 'allowhide')
        tlsModal.addEventListener('click', hideModal, false)

        let innerModal = document.createElement('div')
        innerModal.classList.add('innermodal')

        let c = createContainer()
        let h1 = document.createElement('h1')
        h1.id = 'modalTitle'
        h1.classList.add('py-1')
        h1.innerHTML = 'What legal area do you need help with?'
        c.appendChild(h1)

        let modalbread = document.createElement('div')
        modalbread.classList.add('modalbread', 'py-1')

        modalbread.innerHTML = "<span onclick='hideModal()'>All services</span><i class='fa fa-chevron-right'></i><span class='spancat'></span>"
        c.appendChild(modalbread)

        let subCats = document.createElement('div')
        subCats.id = 'subcats'
        subCats.classList.add('py-1')
        c.appendChild(subCats)

        let backBtn = document.createElement('button')
        backBtn.classList.add('allowhide', 'btn', 'py-1')
        backBtn.addEventListener('click', hideModal, false)
        backBtn.innerHTML = "<i class='fa fa-chevron-left'></i> Back"

        c.appendChild(backBtn)
        innerModal.appendChild(c)

        let close = document.createElement('i')
        close.classList.add('fa-solid', 'fa-xmark', 'allowhide')
        close.addEventListener('click', hideModal, false)
        innerModal.appendChild(close)

        tlsModal.appendChild(innerModal)

        document.querySelector('body').appendChild(tlsModal)
    }

    function createTopBanner() {
        let topBanner = document.createElement('section')
        topBanner.id = 'topBanner'

        let c = createContainer()
        let h1 = document.createElement('h1')
        h1.innerHTML = 'Compare quotes for lawyers & solicitors'

        c.appendChild(h1)

        let steps = document.createElement('div')
        steps.id = 'topSteps'
        steps.innerHTML = `<strong>1. Fill out our quick quote form</strong>`
        steps.innerHTML += `<i class='fa fa-chevron-right'></i>`
        steps.innerHTML += `<strong>2. Get instant quotes to your inbox</strong>`
        steps.innerHTML += `<i class='fa fa-chevron-right'></i>`
        steps.innerHTML += `<strong>3. Save money</strong>`

        c.appendChild(steps)
        topBanner.appendChild(c)

        return topBanner
    }

    function createIntroSection() {
        let intro = document.createElement('section')
        intro.id = 'intro'
        let c = createContainer()
        let r = document.createElement('div')
        r.classList.add('row')

        let col1 = document.createElement('div')
        col1.classList.add('col-12', 'col-md-6')
        col1.innerHTML = '<p>We know that finding a legal professional can be confusing, so we\'re here to make it as simple and easy as possible.</p><p>Instantly compare up to 4 quotes from expert legal firms today.</p>'
        let col2 = document.createElement('div')

        col2.innerHTML += '<h2>Our legal partners are:</h2>'

        col2.innerHTML += '<div><i class="fa fa-check"></i><strong>Regulated</strong></div>'
        col2.innerHTML += '<div><i class="fa fa-check"></i><strong>Manually reviewed</strong></div>'
        col2.innerHTML += '<div><i class="fa fa-check"></i><strong>Credit checked</strong></div>'

        col2.classList.add('col-12', 'col-md-6')
        r.appendChild(col1)
        r.appendChild(col2)
        c.appendChild(r)

        intro.appendChild(c)

        return intro
    }

    function createCategories() {
        let cats = document.createElement('section')
        cats.id = 'categories'
        let c = createContainer()
        cats.appendChild(c)

        let sectionTitle = document.createElement('h2')
        sectionTitle.innerHTML = "I'd like to compare quotes for..."
        c.appendChild(sectionTitle)


        let row = document.createElement('div')
        row.classList.add('row')
        c.appendChild(row)

        let o = [
            {
                icon: '<i class="fa-solid fa-house-user"></i>',
                name: 'Conveyancing',
                content: 'Buying a property, selling a property, re-mortgaging a property, and more ??? ',
                link: 'https://www.thelawsuperstore.co.uk/property/equity-matters'
            },
            { 
                icon: '<i class="fa-solid fa-book"></i>',
                name: 'Wills & Probate',
                content: 'Write a will, contest a will, power of attorney, and more ??? ',
                link: '/wills-probate'
            },
            {
                icon: '<i class="fa-solid fa-people-roof"></i>',
                name: 'Family',
                content: 'Divorce, financial settlements, child arrangements, and more ??? ',
                link: 'https://www.thelawsuperstore.co.uk/family'
            },
            {
                icon: '<i class="fa-solid fa-briefcase"></i>',
                name: 'Business',
                content: 'Buying a business, selling a business, commercial leases, and more ??? ',
                link: 'https://www.thelawsuperstore.co.uk/business/business-property'
            },
            {
                icon: '<i class="fa-solid fa-house"></i>',
                name: 'Equity Matters',
                content: 'Equity release and transferring equity.',
                link: 'https://www.thelawsuperstore.co.uk/property/property-ownership'
            },
            {
                icon: '<i class="fa-solid fa-person-harassing"></i>',
                name: 'Disputes',
                content: 'Money disputes, consumer disputes, neighbour disputes, and more ???',
                link: 'https://www.thelawsuperstore.co.uk/disputes'
            },
            // {
            //     icon: '<i class="fa-solid fa-car"></i>',
            //     name: 'Motor Offences',
            //     content: 'Dangerous driving charges, careless driving charges, speeding offences, and more ??? ',
            //     link: 'https://www.thelawsuperstore.co.uk/motor-offences'
            // },
            // {
            //     icon: '<i class="fa-solid fa-user-nurse"></i>',
            //     name: 'Employment',
            //     content: 'Unfair dismissal, discrimination claims, disciplinary hearings, and more ??? ',
            //     link: 'https://www.thelawsuperstore.co.uk/employment'
            // }
        ]

        o.forEach(cat => {
            let x = new category(cat)
            row.appendChild(x)
        })

        function category(data = {}) {
            this.icon       = data.icon
            this.name       = data.name
            this.content    = data.content
            this.link       = data.link

            //need a row and each a col
            let cat = document.createElement('div')
            cat.classList.add('col-12', 'col-lg-6')
            
            let link = document.createElement('a')
            link.classList.add('tls-cat-link')
            link.href = this.link
            link.innerHTML = `<div>${this.icon}</div><div><strong>${this.name}</strong><p>${this.content}</p></div><div><i class="fa-solid fa-arrow-right"></i></div>`

            link.dataset.cat = this.name

            link.addEventListener('click', showModal, false)
            cat.appendChild(link)

            return cat
        }
        return cats
    }

    function  createBar() {
        let bar = document.createElement('section')
        bar.id = 'bar'
        let c = createContainer()

        let steps = [
            { icon: "<i class='fa-solid fa-comment'></i>", text: 'Recommended by 80% of our customers'},
            { icon: "<i class='fa-solid fa-certificate'></i>", text: 'All our legal professionals are regulated and accredited'},
            { icon: "<i class='fa-solid fa-handshake-angle'></i>", text: 'We???ve helped over 50,000 people find their lawyer'},
        ]

        steps.forEach(step => {
            c.appendChild(new createStep(step.icon, step.text))
        })

        function createStep(icon, text) {
            this.icon = icon
            this.text = text

            let barStep = document.createElement('div')
            barStep.classList.add('barStep')

            barStep.innerHTML = `${this.icon}<p>${this.text}</p>`
            return barStep
        }

        bar.appendChild(c)
        return bar
    }

    function createFaqsSection() {
        let faqs = document.createElement('section')
        faqs.id = 'faqs'

        let c = createContainer()
        let h = document.createElement('h2')
        h.innerHTML = 'Frequently asked questions'
        c.appendChild(h)
        let p = document.createElement('p')
        p.innerHTML = 'Whilst you might have used a comparison site for lots of other things, you might not have used one for legal services. Here are the answers to our top questions.'
        c.appendChild(p)

        c.innerHTML += `<div class="faq-search-results">
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">Are you a law firm?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We???re not a law firm, we???re a comparison site. We help you find lawyers in your area, for the service you need. We share a lot of information to help you make your decision and find experts, but we???re not lawyers ourselves.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">What happens when I get a quote?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>When you submit your details, you???ll receive an email with the details of up to four legal experts who cover your area and the service you need. At the same time, your details will be shared with those firms so they can offer you more details. We will only ever share your details with those firms you???ve received quotes for.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">Are my details secure?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We know how important data security and privacy is, especially around legal matters. We will only ever share the details of what you require and your contact information with the firms who quoted for you. This will never be more than four firms.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">What do The Law Superstore charge?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We are a free service to help people find legal services. We know that for many people finding a lawyer is stressful. And if you don???t really know what service you need, it???s hard to know what to ask for, and how much it???s going to cost. Our business model is based on a small fee being paid by the legal firms to appear on our site. They all pay the same, and no firm is given preferential treatment or priority. We recommend firms to you based on their location and service offerings. Nothing else.</p>
      </div>
   </div>
   <div class="accordion" id="how-does-the-law-superstore-work">
        <h3 class="accordion__title"><a href="javascript:;">How do I know the lawyers are any good?</a></h3>
      <div class="accordion__txt" style='display: none;'>
            <p>We only work with experts who can give you a great experience. We thoroughly vet our partners, ensuring they???re fully regulated by trustworthy bodies including SRA, BSB, CLC, IPW, IoP or CILEX. We check accreditations, review ratings, business finances, online presence, and credit checks. We only partner with firms who have a redress scheme, so if you do need to complain for any reason, there???s always an option available to you. We also do ongoing checks and ask our users for reviews to ensure we???re only working with the very best.</p>
      </div>
   </div>
</div>`

faqs.appendChild(c)
return faqs
    }

    function createReviewsSection() {
        let slides = document.getElementsByClassName('testimonial__item')
        let reviewsSection = document.createElement('section')
        reviewsSection.id = 'tls-reviews'
        let con = createContainer()

        let heading = document.createElement('h2')
        heading.classList.add('mb-2')
        heading.innerHTML = 'Read our reviews'

        con.appendChild(heading)

        let glide = document.createElement('div')
        glide.classList.add('glide')
        let glideTrack = document.createElement('div')
        glideTrack.classList.add('glide__track')
        glideTrack.setAttribute('data-glide-el', 'track')
        let glideUl = document.createElement('ul')
        glideUl.classList.add('glide__slides')

        glideTrack.appendChild(glideUl)
        glide.appendChild(glideTrack)

        for(let i = 0; i < slides.length; i++) {
            let x = document.createElement('li')
            x.innerHTML = slides[i].innerHTML
            x.classList.add('glide__slide')
            let z = x.querySelector('.testimonial__blockquote')
            let y = document.createElement('div')
            let j = 0
            while(j < 5) {
                if(i === 2 && j === 4) {
                    y.innerHTML += '<i class="fa-regular fa-star"></i>'
                    break
                }
                y.innerHTML += '<i class="fa-solid fa-star"></i>'
                j++
            }
            z.appendChild(y)
            glideUl.appendChild(x)
        }

        // let bullets = document.createElement('div')
        // bullets.classList.add('glide__bullets')
        // bullets.setAttribute('data-glide-el', 'controls[nav]')
        // for (let i = 0; i < slides.length; i++) {
        //     let button = document.createElement('button')
        //     button.classList.add('glide__bullet')
        //     button.setAttribute('data-glide-dir', `=${i}`)
        //     bullets.appendChild(button)
        // }


        // glide.appendChild(bullets)
        con.appendChild(glide)
        reviewsSection.appendChild(con)
        
        return reviewsSection
    }

    function createLogosSection() {
        let logos = document.createElement('section')
        logos.id = 'creditations'

        let c = createContainer()
        logos.appendChild(c)

        let heading = document.createElement('h2')
        heading.innerHTML = 'Legal professionals you can trust'
        let subHeading = document.createElement('p')
        subHeading.innerHTML = 'All our legal professionals are accredited or regulated.'

        c.appendChild(heading)
        c.appendChild(subHeading)

        let logosDiv = document.createElement('div')
        logosDiv.id = 'logosDiv'

        let images = [
            { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/cilex-cpq-logo.png', link:'https://www.cilex.org.uk/'},
            { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/sra.png', link:'https://www.sra.org.uk/'},
            { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/logo.png', link:'https://www.clc-uk.org/'},
            { img: 'https://www.thelawsuperstore.co.uk/MediaLibrary/TheLawSuperstore/SampleMediaLibrary/accreditations/IPW_logo.svg', link:'https://www.ipw.org.uk/'}
        ]
        images.forEach(image => {
            //let a = document.createElement('a')
            //a.href = image.link
            let x = document.createElement('div')
            let i = document.createElement('img')
            i.src = image.img
            x.appendChild(i)
            //a.appendChild(x)
            logosDiv.appendChild(x)
        })
        c.appendChild(logosDiv)

        return logos
    }

    function createTopFooter() {
        let topFooter = document.createElement('section')
        topFooter.id = 'topFooter'

        let c = createContainer()
        topFooter.appendChild(c)

        let h = document.createElement('h2')
        h.innerHTML = 'Can???t find what you???re looking for?'
        let p = document.createElement('p')
        p.innerHTML = 'We provide quotes for over 130 legal services. But we???ve also got lots of helpful guides and advice for whatever your legal needs are.'

        c.appendChild(h)
        c.appendChild(p)

        c.appendChild(new createRow({
            title: 'Disputes',
            col1:   [
                '<a href="/disputes/money-disputes/bankruptcy-proceedings">Bankruptcy Proceedings</a>',
                '<a href="/disputes/general-disputes/consumer-disputes">Consumer Disputes</a>'
            ],
            col2:   [
                '<a href="/disputes/money-disputes/money-disputes">Money Disputes</a>',
                '<a href="/disputes/general-disputes/neighbour-disputes">Neighbour Disputes</a>'
            ],
            col3:   [
                '<a href="/disputes/general-disputes/other-disputes">Other Disputes</a>'
            ],
        }))
        c.appendChild(new createRow({
            title: 'Employment',
            col1:   [
                '<a href="/employment/employment-disputes/disciplinary-hearings">Disciplinary Hearings</a>',
                '<a href="/employment/employment-disputes/discrimination-claim">Discrimination Claim</a>',
                '<a href="/employment/employment-disputes/equal-pay-claim">Equal Pay Claim</a>'
            ],
            col2:   [
                '<a href="/employment/employment-disputes/redundancy-claim">Redundancy Claim</a>',
                '<a href="/employment/employment-disputes/settlement-agreements">Settlement Agreements</a>',
                '<a href="/employment/employment-disputes/tupe">TUPE</a>'
            ],
            col3:   [
                '<a href="/employment/employment-disputes/unfair-dismissal-claim">Unfair Dismissal Claim</a>',
                '<a href="/employment/employment-disputes/unpaid-wages-claim">Unpaid Wages Claim</a>'
            ],
        }))
        c.appendChild(new createRow({
            title: 'Family',
            col1:   [
                '<a href="/family/children-advice/child-abduction">Child Abduction</a>',
                '<a href="/family/children-advice/child-holiday-arrangements">Child Holiday Arrangements</a>',
                '<a href="/family/children-advice/child-residency-contact">Child Residency &amp; Contact</a>',
                '<a href="/family/break-up-advice/civil-partnership-breakdown">Civil Partnership Breakdown</a>',
                '<a href="/family/relationship-advice/cohabitation-advice">Cohabitation</a>',
            ],
            col2:   [
                '<a href="/family/break-up-advice/cohabitation-breakdown">Cohabitation Breakdown</a>',
                '<a href="/family/break-up-advice/domestic-violence">Domestic Violence</a>',
                '<a href="/family/break-up-advice/family-mediation">Family Mediation</a>',
                '<a href="/family/relationship-advice/gender-recognition-advice">Gender Recognition</a>',
                '<a href="/family/children-advice/other-child-issues">Other Child Issues</a>',
            ],
            col3:   [
                '<a href="/family/children-advice/parental-responsibility">Parental Responsibility</a>',
                '<a href="/family/relationship-advice/prenup-postnup-advice">Prenup / Postnup Advice</a>',
                '<a href="/family/break-up-advice/respond-to-a-divorce-petition">Respond to a Divorce Petition</a>',
                '<a href="/family/break-up-advice/starting-divorce-proceedings">Start Divorce proceedings</a>'
            ],
        }))
        c.appendChild(new createRow({
            title: 'Motor Offences',
            col1:   [
                '<a href="/motor-offences/driving-offences/careless-dangerous-driving">Careless / Dangerous Driving</a>',
                '<a href="/motor-offences/driving-offences/drinks-drug-driving">Drinks / Drug Driving</a>',
                
            ],
            col2: ['<a href="/motor-offences/driving-offences/speeding-offences">Speeding Offences</a>'],
            col3:   [],
        }))
        c.appendChild(new createRow({
            title: 'Personal injury',
            col1:   [
                '<a href="/personal-injury/accidents/accidents-at-work-claim">Accidents at work claim</a>',
                '<a href="/personal-injury/accidents/accidents-in-a-public-place-claim">Accidents in a public place claim</a>',
                
            ],
            col2: ['<a href="/personal-injury/accidents/road-traffic-accident-claim">Road traffic accident claim</a>',
            '<a href="/personal-injury/accidents/accidents-and-illness-abroad-claim">Accidents and Illness Abroad Claim</a>'],
            col3:   [],
        }))
        c.appendChild(new createRow({
            title: 'Property',
            col1:   [
                '<a href="/property/property-ownership/buying-selling-a-property">Buying &amp; Selling a Property</a>',
                '<a href="/property/property-ownership/buying-a-property">Buying A Property</a>',
                '<a href="/property/leases/enfranchisement">Enfranchisement</a>',
                '<a href="/property/equity-matters/equity-release">Equity Release</a>',
                
            ],
            col2: [
                '<a href="/property/equity-matters/equity-transfer">Equity Transfer</a>',
                '<a href="/property/leases/lease-extension-landlord">Lease Extension (Landlord)</a>',
                '<a href="/property/leases/lease-extension-tenant">Lease Extension (Tenant)</a>',
                '<a href="/property/disputes/possession-claims">Possession Claims</a>',
            ],
            col3:   [
                '<a href="/property/property-ownership/remortgaging-a-property">Remortgaging a Property</a>',
                '<a href="/property/property-ownership/selling-a-property">Selling a Property</a>',
                '<a href="/property/disputes/tenancy-disputes-for-landlord">Tenancy Disputes (for Landlord)</a>',
                '<a href="/property/disputes/tenancy-disputes-for-tenant">Tenancy Disputes (for Tenant)</a>',
            ],
        }))
        c.appendChild(new createRow({
            title: 'Wills and probate',
            col1:   [
                '<a href="/wills-probate/dealing-with-an-estate/administer-an-estate">Administer an estate</a>',
                '<a href="/wills-probate/dispute/contest-a-will">Contest a will</a>',
                '<a href="/wills-probate/protecting-others/court-of-protection-deputyship">Court of Protection deputyship</a>',
                '<a href="/wills-probate/wills/draft-individual-will">Draft an individual will</a>',
                
            ],
            col2: [
                '<a href="/wills-probate/wills/draft-joint-wills">Draft joint wills</a>',
                '<a href="/wills-probate/dealing-with-an-estate/obtain-a-grant">Obtain a grant</a>',
            ],
            col3:   [
                '<a href="/wills-probate/protecting-others/power-of-attorney-for-a-couple">Power of Attorney for a couple</a>',
                '<a href="/wills-probate/protecting-others/power-of-attorney-for-an-individual">Power of Attorney for an individual</a>'
            ],
        }))
        c.appendChild(new createRow({
            title: 'Business Services',
            col1:   [
                '<a href="/business/business-disputes">Business Disputes</a>',
                '<a href="/business/business-employment">Business Employment</a>',
            ],
            col2: [
                '<a href="/business/business-property">Business Property</a>',
                '<a href="/business/business-services">Business Services</a>'
            ],
            col3:   [],
        }))


        function createRow(data) {
            this.title = data.title
            this.col1  = data.col1
            this.col2  = data.col2
            this.col3  = data.col3

            let row = document.createElement('div')
            row.classList.add('row')

            makeCol([], this.title)
            makeCol(this.col1)
            makeCol(this.col2)
            makeCol(this.col3)

            //need 4 cols
            function makeCol(c = [], title = null){
                let col = document.createElement('div')
                col.classList.add('col-12', 'col-md-3')

                if(title) {
                    col.innerHTML = `<h3 onclick='expandCat(this)'>${title}</h3>`
                } else {
                    c.forEach(item => {
                        col.innerHTML += item
                    })
                }
                row.appendChild(col)
            }

            return row
        }

        return topFooter
    }

    //don't include in production
    //document.querySelector('head').innerHTML += '<style>.tls-cookie-popup {display: none !important;}.footer{display:none;}</style>'

    
    createModal()
    run()
    
    function showModal(event) {
        event.preventDefault()
        console.log(event.target.dataset.cat)
        let modal = document.querySelector('#tlsModal')
        if (modal) modal.classList.remove('hide')

        let cat = event.target.dataset.cat
        
        document.querySelector('.spancat').innerHTML = cat

        document.querySelector('#subcats').innerHTML = generateModalLinks(cat)
        
    }

    function generateModalLinks(cat) {
        let links = []
        let html = ''
        if (cat === 'Family') links = family
        if (cat === 'Wills & Probate') links = wills
        if (cat === 'Equity Matters') links = equity
        if (cat === 'Disputes') links = disputes
        if (cat === 'Business') links = Business
        if (cat === 'Conveyancing') links = property

        links.forEach(link => {
            html += `<a href='${link.link}'>${link.text}</a>`
        })
        return html
    }

    function hideModal(event) {
        //console.log(event)
        if (event.target.classList.contains('allowhide')) {
            let modal = document.querySelector('#tlsModal')
            modal.classList.add('hide')
        }
    }

    function createContainer() {
        let c = document.createElement('div')
        c.classList.add('container')
        return c
    }
//};

function expandCat(el) {
    console.log(el)
    let x = el.parentElement.parentElement
    x.classList.toggle('active')
    let cols = x.getElementsByClassName('col-12')
    console.log(cols)
    for (let i = 0; i < cols.length; i++) {
        if (i === 0) continue
        cols[i].classList.toggle('show')
    }
}
