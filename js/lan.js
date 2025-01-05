document.addEventListener('DOMContentLoaded', function () {
    // Language translations
    const translations = {
        en: {
            languageName: 'English',
            home: 'Home',
            menu: 'Products',
            about: 'About',
            contact: 'Contact',
            order: 'Shop Now',
            // Hero Section
            sliderTitle: 'Modern Home Appliances',
            sliderDescription: 'Quality appliances for your modern lifestyle',
            sliderButton: 'Shop Now',
            // Product Categories
            ourProducts: 'Our Products',
            all: 'All',
            kitchen: 'Kitchen',
            laundry: 'Laundry',
            cleaning: 'Cleaning',
            cooling: 'Cooling',
            // Product Items
            refrigerator: { title: 'Smart Refrigerator', desc: 'Double-door frost-free refrigerator with smart features' },
            washingMachine: { title: 'Washing Machine', desc: 'Front-loading automatic washing machine with multiple programs' },
            microwave: { title: 'Microwave Oven', desc: 'Digital microwave with grill function' },
            dishwasher: { title: 'Dishwasher', desc: 'Energy-efficient dishwasher with multiple wash programs' },
            airConditioner: { title: 'Air Conditioner', desc: 'Split AC with inverter technology' },
            waterHeater: { title: 'Water Heater', desc: 'Electric water heater with temperature control' },
            // About Section
            weAreCompany: 'About Us',
            aboutText: 'We are your trusted provider of premium home and kitchen appliances. With over 10 years of experience, we offer top-quality products from leading brands. Our commitment to excellence and customer satisfaction makes us the preferred choice for home appliances.',
            // Contact Section
            contactUs: 'Contact Us',
            callUs: 'Call Us',
            visitShowroom: 'Visit Showroom',
            // Footer
            location: 'Location',
            openingHours: 'Opening Hours',
            allRightsReserved: 'All Rights Reserved'
        },
        ar: {
            languageName: 'العربية',
            home: 'الرئيسية',
            menu: 'المنتجات',
            about: 'من نحن',
            contact: 'اتصل بنا',
            order: 'تسوق الآن',
            // Hero Section
            sliderTitle: 'أجهزة منزلية حديثة',
            sliderDescription: 'أجهزة عالية الجودة لنمط حياة عصري',
            sliderButton: 'تسوق الآن',
            // Product Categories
            ourProducts: 'منتجاتنا',
            all: 'الكل',
            kitchen: 'المطبخ',
            laundry: 'الغسيل',
            cleaning: 'التنظيف',
            cooling: 'التبريد',
            // Product Items
            refrigerator: { title: 'ثلاجة ذكية', desc: 'ثلاجة بابين مع نظام نوفروست وميزات ذكية' },
            washingMachine: { title: 'غسالة ملابس', desc: 'غسالة أوتوماتيكية تحميل أمامي مع برامج متعددة' },
            microwave: { title: 'فرن مايكروويف', desc: 'مايكروويف رقمي مع وظيفة الشواية' },
            dishwasher: { title: 'غسالة أطباق', desc: 'غسالة أطباق موفرة للطاقة مع برامج غسيل متعددة' },
            airConditioner: { title: 'مكيف هواء', desc: 'مكيف سبليت مع تقنية الانفرتر' },
            waterHeater: { title: 'سخان مياه', desc: 'سخان مياه كهربائي مع تحكم في درجة الحرارة' },
            // About Section
            weAreCompany: 'من نحن',
            aboutText: 'نحن مزودكم الموثوق للأجهزة المنزلية وأجهزة المطبخ الفاخرة. مع خبرة تزيد عن 10 سنوات، نقدم منتجات عالية الجودة من العلامات التجارية الرائدة. التزامنا بالتميز ورضا العملاء يجعلنا الخيار المفضل للأجهزة المنزلية.',
            // Contact Section
            contactUs: 'اتصل بنا',
            callUs: 'اتصل بنا',
            visitShowroom: 'زيارة المعرض',
            // Footer
            location: 'الموقع',
            openingHours: 'ساعات العمل',
            allRightsReserved: 'جميع الحقوق محفوظة'
        }
    };

    function updateLanguageButton(lang) {
        const button = document.querySelector('.language-btn');
        const flagSrc = lang === 'ar' ? 'https://flagcdn.com/w20/sa.png' : 'https://flagcdn.com/w20/gb.png';
        const langName = translations[lang].languageName;

        button.innerHTML = `
            <img src="${flagSrc}" alt="${langName}" class="flag-icon">
            <span class="ms-1">${langName}</span>
        `;
    }

    // Language switching function
    function switchLanguage(lang) {
        // Store selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);

        updateLanguageButton(lang);

        // Update navigation items
        document.querySelector('.nav-item:nth-child(1) .nav-link').textContent = translations[lang].home;
        document.querySelector('.nav-item:nth-child(2) .nav-link').textContent = translations[lang].menu;
        document.querySelector('.nav-item:nth-child(3) .nav-link').textContent = translations[lang].about;
        document.querySelector('.nav-item:nth-child(4) .nav-link').textContent = translations[lang].contact;
        document.querySelector('.nav-item:nth-child(5) .nav-link').textContent = translations[lang].order;
        document.querySelector('.order_online').textContent = translations[lang].order;

        // Translate slider content
        document.querySelector('.detail-box h1').textContent = translations[lang].sliderTitle;
        document.querySelector('.detail-box p').textContent = translations[lang].sliderDescription;
        document.querySelector('.btn-box .btn1').textContent = translations[lang].sliderButton;

        // Update active state in dropdown
        document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            }
        });
    }

    // Add click event listeners to language options
    document.querySelectorAll('.language-switcher .dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            const selectedLang = this.getAttribute('data-lang');
            if (selectedLang) {
                switchLanguage(selectedLang);
            }
        });
    });

    // Initialize language based on localStorage
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);
});
