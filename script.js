// Dimensions Matrix - Purely ranging from 3 Feet (36 Inches) up to 12 Feet (144 Inches)
const dimensions = [36, 40, 42, 44, 48, 54, 60, 66, 72, 78, 80, 84, 90, 96, 102, 108, 114, 120, 126, 132, 138, 144];

// Searchable Thread Selection values
const availableThreads = [
    "Cotton Thread", "Silk Thread", "Metallic Thread", "Polyester Thread", 
    "Embroidery Thread", "Glow in the Dark Thread", "Jute Thread", "Nylon Thread"
];

// Searchable Color options
const availableColors = [
    "Black", "White", "Gold", "Silver", "Copper", "Red", "Blue", 
    "Green", "Yellow", "Purple", "Orange", "Pink", "Brown", "Gray"
];

// Advanced 35+ Types of String Art directory setup
const stringArtTypes = [
    { title: "Corporate Logos & Business Branding", content: "Designed with corporate vector alignments utilizing metallic copper or industrial steel cables to generate dimensional geometric projections.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Company Name Art & Signboards", content: "Meticulous linear letters designed to provide depth refraction for high-end office reception structures.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Vedic Sacred Mandalas", content: "Circular alignment profiles using overlapping thread fibers to generate radial vectors mimicking cosmos matrices.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Monochromatic Human Portraits", content: "High-density overlapping of single continuous black sewing threads on pure white bases, creating photorealistic shaded human features.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" },
    { title: "Family Portraits Landscapes", content: "Woven matrices utilizing layered color tones to frame multi-subject family gatherings with lifetime archival thread fibers.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
    { title: "Wedding Anniversary Milestones", content: "Symmetrical representations featuring couple contours and customized date signatures set inside luxury wooden profiles.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" },
    { title: "Baby & Footprint Keepsakes", content: "Soft-textured pastel gradient string layers configured to safely showcase infant handprints or footprints with gold accents.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" },
    { title: "Pet Portraiture Configurations", content: "Highly detailed micro-thread mappings capturing the precise fur textures of dogs, cats, and structural animal illustrations.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Couple Outlines & Contours", content: "Minimalist dual-thread designs capturing intimate structural poses with high elegance.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" },
    { title: "Lord Krishna Devotional Art", content: "Sacred peacock-feather contours and divine silhouettes built from dynamic gold and turquoise threads.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400" },
    { title: "Lord Shiva & Trishul Formations", content: "Aggressive geometric trident representations using dark silver filaments on textured obsidian boards.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Ganesh Vignaharta Contours", content: "Concentric circular configurations symbolizing auspicious beginnings in luxury gold thread fibers.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Radha Krishna Divine Union", content: "Intricately overlapping silk filament gradients depicting cosmic spiritual connection.", img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800" },
    { title: "Mahadev & Himalayan Art", content: "Scenic mountain structures and meditation forms mapped mathematically across high-strength steel pins.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Motivational Typography & Quotes", content: "Sharp, high-tension lettering configurations built to inspire corporate teams and home workspaces.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Abstract Wave Refractions", content: "Kinetic visual structures utilizing gradient shifts to create optical ripple illusions upon movement.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Minimalist Geometrics", content: "Clean, low nail density patterns utilizing single color strands for modern interior spaces.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Wall Decor Paneling", content: "Grand statement panoramas split into matching triptych frames for collector galleries.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Luxury Gold-line Collection", content: "Museum-tier works utilizing 24k gold-plated metallic wire cords on premium stained pine hardwoods.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Optical Illusion Formations", content: "High-complexity mathematical thread densities creating three-dimensional kinetic depth anomalies.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "3D Layered Configurations", content: "Multi-plane arrangements with staggered nail height increments creating physical shadow projections.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Negative Space Inversions", content: "The subject remains completely threadless, outlined and framed by high-density woven surrounding layers.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600" },
    { title: "Gradient Chroma Shifts", content: "Using specialized spectral blending techniques to smoothly transition between hues.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Glow in the Dark / LED active", content: "Active UV-reactive threads paired with integrated LED backlighting arrays.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Low Poly Angular Structures", content: "Geodesic structural designs creating modern wildlife or architectural facets.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Radial Pivot Formations", content: "Pinwheel structures leveraging central focal points to expand outwards dynamically.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Circular Matrix Loops", content: "Infinite curvature designs created purely by interlocking linear segments.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" },
    { title: "Mixed Media Fusion", content: "Seamless blend of high-density string layers layered over hand-painted acrylic canvases.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600" },
    { title: "AI Guided Custom Matrices", content: "Custom designs utilizing computational geometry to map photographs into thread segments.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Spectral Rainbow blending", content: "Woven using standard spectrum color lines to produce dynamic colorful gradients.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Cosmic Celestial Maps", content: "Aesthetics showcasing detailed constellations and astronomical configurations.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Architectural Contours", content: "Detailed blueprint layouts of monumental landmarks rendered in dynamic high tension strings.", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400" },
    { title: "Initial Letter Monograms", content: "Aesthetic monogram letters decorated with floral patterns, perfect for premium wedding gifting.", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600" },
    { title: "Nature Leaves and Florals", content: "Delicate biological structures represented through organic jute and silk filaments.", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400" },
    { title: "Fractal Mathematical Art", content: "Never-ending geometrical designs built from highly complex, recursive nail configurations.", img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=400" }
];

// Complete specifications metadata mapping
const defaultProducts = [
    {
        id: "p1",
        name: "The Sacred Devotion (Radha Krishna)",
        category: "portrait",
        price: 32000,
        discountPrice: 28500,
        hours: "48 Hours",
        nails: 3200,
        threads: 4500,
        img: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
        desc: "Over 4,500 meters of continuous dark silk thread woven meticulously around 3,200 silver pins on premium deep matte wood base.",
        multiImages: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600, https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        artType: "Monochromatic Shading Thread Art",
        boardSize: "48 x 36 Inches (Grand Profile)",
        boardColor: "Obsidian Velvet Matte Black",
        frameType: "Authentic Stained Hardwood Profile",
        frameColor: "Aesthetic Vintage Gold Trim",
        threadMaterial: "German Filament Silk & Thread Core",
        threadThickness: "0.5mm Micro-fiber",
        threadSize: "No. 3 Archival Weft Filaments",
        threadColor: "Spectral Charcoal and Silver Gold",
        difficulty: "Master Level (5/5)",
        dateAdded: "2026-05-12",
        tags: ["Radha Krishna", "Devotional", "Portrait", "Spiritual"],
        rating: 5,
        availability: "In Stock (Custom Built to Order)",
        bullets: ["100% Handcrafted in India", "Lifetime anti-fade warranty", "Includes mounting hangers"]
    },
    {
        id: "p2",
        name: "Symphony of Grace",
        category: "portrait",
        price: 14499,
        discountPrice: 12999,
        hours: "18 Hours",
        nails: 360,
        threads: 2400,
        img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=600",
        desc: "An intricate monochrome portrait that utilizes varying degrees of string thickness and shadows to generate a photorealistic depth.",
        multiImages: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
        video: "",
        artType: "Human Contour Design",
        boardSize: "36 x 36 Inches",
        boardColor: "Matte Black",
        frameType: "Luxury Engineered Wood",
        frameColor: "Pearl White Profile",
        threadMaterial: "Organic Soft Cotton strands",
        threadThickness: "0.8mm Thickness",
        threadSize: "Standard Weft No. 5",
        threadColor: "Deep Ebony White",
        difficulty: "Intermediate (3/5)",
        dateAdded: "2026-06-20",
        tags: ["Portrait", "Monochrome", "Modernism"],
        rating: 5,
        availability: "In Stock",
        bullets: ["High density shading", "Ready to hang fixtures included"]
    },
    {
        id: "p3",
        name: "Eternal Lotus Mandala",
        category: "mandala",
        price: 24500,
        discountPrice: 22000,
        hours: "35 Hours",
        nails: 2800,
        threads: 4000,
        img: "https://images.unsplash.com/photo-1507208773393-4001fc56622d?auto=format&fit=crop&q=80&w=800",
        desc: "Symmetrical geometric mandala woven in dual gold and copper metallic threads. Perfect statement piece for main reception rooms.",
        multiImages: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=600",
        video: "",
        artType: "Sacred Radial Geometry",
        boardSize: "40 x 40 Inches Symmetrical",
        boardColor: "Midnight Stained Indigo Board",
        frameType: "Authentic Stained Hardwood Profile",
        frameColor: "Classic Copper Profile",
        threadMaterial: "Premium Metallic Wire Weft",
        threadThickness: "1.0mm Metallic Wire",
        threadSize: "No. 8 Wire Gauge",
        threadColor: "Concentric Gold & Bronze Copper",
        difficulty: "Expert (4/5)",
        dateAdded: "2026-04-05",
        tags: ["Mandala", "Geometry", "Sacred", "Zen"],
        rating: 5,
        availability: "In Stock (Custom Built to Order)",
        bullets: ["Symmetrical mathematical balance", "Metallic wire resists oxidation"]
    },
    {
        id: "p4",
        name: "Corporate Crest Legacy",
        category: "corporate-logos",
        price: 45000,
        discountPrice: 39999,
        hours: "60 Hours",
        nails: 4100,
        threads: 5200,
        img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
        desc: "High-density string projection of contemporary branding architecture on warp-resistant reinforced luxury backing panel.",
        multiImages: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=600",
        video: "",
        artType: "Corporate Branding Geometry",
        boardSize: "60 x 40 Inches (Landscape)",
        boardColor: "Obsidian Stained Solid Wood",
        frameType: "Seamless Aluminum Profile",
        frameColor: "Anodized Black Metal Frame",
        threadMaterial: "Reinforced Polyester & Nylon Cord",
        threadThickness: "1.2mm High-strength Cord",
        threadSize: "No. 12 Industrial Filament",
        threadColor: "Custom Brand Pantone Core",
        difficulty: "Master Level (5/5)",
        dateAdded: "2026-03-15",
        tags: ["Corporate Logo", "Office", "Branding", "Custom Lettering"],
        rating: 5,
        availability: "Custom Order Only",
        bullets: ["Custom Pantone color match", "Warp-resistant framework structures"]
    }
];

const defaultReviews = [
    { name: "Jaymin Patel", rating: 5, text: "The portrait string art looks remarkably detailed. Custom crafted and delivered with immense protective packaging." },
    { name: "Aarav Mehta", rating: 5, text: "The portrait of Radha Krishna has transformed our foyer completely. Absolutely breath-taking attention to detail." },
    { name: "Elena Rostova", rating: 5, text: "Unbelievable craftsmanship. Shipped perfectly to Germany in zero-shock wooden crates. Outstanding!" }
];

// 100% Stable Synchronous LocalStorage Engine Loader
let products = JSON.parse(localStorage.getItem('sc03_products'));
if (!products || products.length === 0) {
    products = [...defaultProducts];
    localStorage.setItem('sc03_products', JSON.stringify(products));
}

let reviews = JSON.parse(localStorage.getItem('sc03_reviews'));
if (!reviews || reviews.length === 0) {
    reviews = [...defaultReviews];
    localStorage.setItem('sc03_reviews', JSON.stringify(reviews));
}

let cart = JSON.parse(localStorage.getItem('sc03_cart')) || [];
let activeCurrency = "INR";
const currencySymbols = { INR: "₹", USD: "$", EUR: "€" };
const exchangeRates = { INR: 1, USD: 0.012, EUR: 0.011 }; 

// State Loop Timers
let currentStep7 = 0;
let currentStep15 = 0;
let step7Interval = null;
let step15Interval = null;

// Toast Helper
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'glass-card text-xs text-luxuryGold font-medium px-5 py-3 shadow-2xl uppercase tracking-widest animate-fadeIn pointer-events-auto';
    if (type === 'error') {
        toast.className = 'glass-card text-xs text-red-400 font-medium px-5 py-3 shadow-2xl uppercase tracking-widest animate-fadeIn pointer-events-auto border border-red-500/50';
    }
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('animate-fadeOut');
        setTimeout(() => { toast.remove(); }, 400);
    }, 3000);
}

// Section Router
function showSection(viewId) {
    const views = document.querySelectorAll('.app-route-view');
    views.forEach(v => v.classList.add('hidden'));
    const targetEl = document.getElementById(viewId);
    if (targetEl) targetEl.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveToStorage() {
    localStorage.setItem('sc03_products', JSON.stringify(products));
    localStorage.setItem('sc03_reviews', JSON.stringify(reviews));
    localStorage.setItem('sc03_cart', JSON.stringify(cart));
}

// Local Image Compression and Downscaling Helper
function compressImagePromise(file) {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                let width = img.width;
                let height = img.height;
                const max_size = 900; 
                if (width > height) {
                    if (width > max_size) {
                        height *= max_size / width;
                        width = max_size;
                    }
                } else {
                    if (height > max_size) {
                        width *= max_size / height;
                        height = max_size;
                    }
                }
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                const dataUrl = canvas.toDataURL('image/jpeg', 0.65);
                resolve(dataUrl);
            };
        };
    });
}

// Local Video File converter helper with storage alert limit
function readVideoPromise(file) {
    return new Promise((resolve, reject) => {
        if (file.size > 2 * 1024 * 1024) { 
            reject("Error: Video file is too large! Please compress and use MP4 files below 2MB to prevent LocalStorage overflows.");
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            resolve(e.target.result);
        };
        reader.onerror = function () {
            reject("Failed to parse local video data.");
        };
    });
}

// Initialize Core Functions
window.addEventListener('DOMContentLoaded', () => {
    populateCustomSelectors();
    renderGallery();
    renderReviews();
    renderStringArtDirectory();
    updateCartCount();
    renderSearchableLists();
    renderAdminProducts();
    
    // Loop Step Timers Initialization
    startProcessSequentialReveal();
});

function formatToFt(inch) {
    const ft = inch / 12;
    return Number.isInteger(ft) ? `${ft}ft` : `${ft.toFixed(1)}ft`;
}

function populateCustomSelectors() {
    const sizeSelector = document.getElementById('custom-size');
    if (!sizeSelector) return;
    sizeSelector.innerHTML = '';
    let list = [];
    dimensions.forEach(h => {
        dimensions.forEach(l => {
            const ratio = h / l;
            if (ratio >= 0.5 && ratio <= 2) {
                list.push({ h, l, area: h * l });
            }
        });
    });
    list.sort((a, b) => a.area - b.area);
    list.forEach(item => {
        const h = item.h;
        const l = item.l;
        const option = document.createElement('option');
        option.value = `${h}x${l}`;
        option.className = "bg-luxuryBlack text-luxuryCream";
        option.innerText = `${h}"x${l}" (${formatToFt(h)} x ${formatToFt(l)}) (H${h}" x L${l})`;
        if (h === 36 && l === 36) option.selected = true;
        sizeSelector.appendChild(option);
    });
}

// Process Steps Auto Loop Functionality (Rule 3)
function startProcessSequentialReveal() {
    const cards7 = document.querySelectorAll('#process-tab-content-1 .process-step-card');
    const cards15 = document.querySelectorAll('#process-tab-content-2 .heritage-step-card');
    
    if (step7Interval) clearInterval(step7Interval);
    if (cards7.length > 0) {
        cards7.forEach(c => c.classList.remove('active-reveal'));
        cards7[0].classList.add('active-reveal');
        currentStep7 = 1;
        step7Interval = setInterval(() => {
            cards7.forEach(c => c.classList.remove('active-reveal'));
            cards7[currentStep7].classList.add('active-reveal');
            currentStep7 = (currentStep7 + 1) % cards7.length;
        }, 2500);
    }

    if (step15Interval) clearInterval(step15Interval);
    if (cards15.length > 0) {
        cards15.forEach(c => c.classList.remove('active-reveal'));
        cards15[0].classList.add('active-reveal');
        currentStep15 = 1;
        step15Interval = setInterval(() => {
            cards15.forEach(c => c.classList.remove('active-reveal'));
            cards15[currentStep15].classList.add('active-reveal');
            currentStep15 = (currentStep15 + 1) % cards15.length;
        }, 2500);
    }
}

// Tab Switchers for Our Process Section
function switchProcessTab(tabName) {
    const tab1 = document.getElementById('process-tab-content-1');
    const tab2 = document.getElementById('process-tab-content-2');
    const btn1 = document.getElementById('btn-proc-1');
    const btn2 = document.getElementById('btn-proc-2');

    if (tabName === 'step-by-step') {
        tab1.classList.remove('hidden');
        tab2.classList.add('hidden');
        btn1.className = "process-tab-btn active px-5 py-2 border border-brandTeal text-xs uppercase tracking-widest text-brandTeal bg-brandBlue/10 transition";
        btn2.className = "process-tab-btn px-5 py-2 border border-transparent text-xs uppercase tracking-widest text-gray-400 hover:text-luxuryCream hover:border-luxuryGold/30 transition";
    } else {
        tab1.classList.add('hidden');
        tab2.classList.remove('hidden');
        btn2.className = "process-tab-btn active px-5 py-2 border border-brandTeal text-xs uppercase tracking-widest text-brandTeal bg-brandBlue/10 transition";
        btn1.className = "process-tab-btn px-5 py-2 border border-transparent text-xs uppercase tracking-widest text-gray-400 hover:text-luxuryCream hover:border-luxuryGold/30 transition";
    }
    startProcessSequentialReveal();
}

function showCustomSpecsTab() {
    switchProcessTab('checklist');
}

// Currency switch converter
function switchCurrency() {
    activeCurrency = document.getElementById('currency-switcher').value;
    const mobileSel = document.getElementById('currency-switcher-mobile');
    if (mobileSel) mobileSel.value = activeCurrency;
    
    renderGallery();
    renderCart();
    showToast(`Currency Switched to ${activeCurrency}`);
}

function switchCurrencyMobile(val) {
    const desktopSel = document.getElementById('currency-switcher');
    if (desktopSel) desktopSel.value = val;
    switchCurrency();
}

// Language API Toggler (Anti-crash safety guard limit)
let isTranslateScriptLoading = false;
let translateRetryCount = 0;

function changeLanguage(langCode) {
    const desktopSel = document.getElementById('lang-selector');
    const mobileSel = document.getElementById('lang-selector-mobile');
    if (desktopSel) desktopSel.value = langCode;
    if (mobileSel) mobileSel.value = langCode;

    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
        selectEl.value = langCode;
        selectEl.dispatchEvent(new Event('change'));
        showToast(`Language translated to ${langCode.toUpperCase()}`);
    } else {
        if (translateRetryCount > 3) {
            showToast("Translation engine unreachable (Blocked or Offline)", "error");
            return;
        }
        if (!isTranslateScriptLoading) {
            isTranslateScriptLoading = true;
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
        }
        translateRetryCount++;
        setTimeout(() => { changeLanguage(langCode); }, 1500);
    }
}

function formatVal(inrVal) {
    const rate = exchangeRates[activeCurrency];
    const converted = inrVal * rate;
    return `${currencySymbols[activeCurrency]}${Math.round(converted).toLocaleString('en-IN')}`;
}

// Search Module
function toggleSearch() {
    document.getElementById('search-overlay').classList.toggle('hidden');
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = document.getElementById('search-input').value.toLowerCase().trim();
        const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
        renderGalleryGrid(filtered);
        toggleSearch();
        document.getElementById('gallery-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Dropdown Gallery Filter Integration
function handleDropdownFilter(val) {
    if (!val) return;
    const buttons = document.querySelectorAll('.gallery-filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-luxuryGold/10', 'text-luxuryGold', 'border-luxuryGold');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    const filtered = products.filter(p => p.category.toLowerCase() === val.toLowerCase());
    renderGalleryGrid(filtered);
}

function filterGallery(category) {
    const dropdown = document.getElementById('gallery-category-dropdown');
    if (dropdown) dropdown.selectedIndex = 0;
    
    const buttons = document.querySelectorAll('.gallery-filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'bg-luxuryGold/10', 'text-luxuryGold', 'border-luxuryGold');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    
    if (event && event.target && event.target.classList.contains('gallery-filter-btn')) {
        event.target.classList.add('active', 'bg-luxuryGold/10', 'text-luxuryGold', 'border-luxuryGold');
        event.target.classList.remove('border-transparent', 'text-gray-400');
    }

    if (category === 'all') {
        renderGalleryGrid(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderGalleryGrid(filtered);
    }
}

// Upgraded Auto Scrolling Gallery Matrix (10 Cards Desktop Rows)
function renderGallery() {
    renderGalleryGrid(products);
}

function renderGalleryGrid(items) {
    const container = document.getElementById('gallery-grid');
    if (!container) return;
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-xs text-gray-500 uppercase tracking-widest py-12">No masterpieces match your criteria.</p>`;
        return;
    }

    // Protection Threshold: If total unique items are less than 4, render normal centered grids to avoid gaps
    if (items.length < 4) {
        const flexGrid = document.createElement('div');
        flexGrid.className = "flex flex-wrap justify-center gap-8 py-6 w-full max-w-7xl mx-auto animate-fadeIn";
        flexGrid.innerHTML = items.map(p => `
            <div class="gallery-card glass-card group overflow-hidden relative transition-all duration-300 rounded luxury-border-glow shrink-0 w-72 select-none">
                <div class="relative overflow-hidden aspect-square bg-neutral-900 cursor-pointer card-zoom" onclick="openProductModal('${p.id}')">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/600/161616/d4af37?text=SC03'">
                    <div class="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent opacity-60"></div>
                    <div class="absolute top-4 right-4 bg-luxuryBlack/85 border border-luxuryGold/20 text-luxuryGold text-[9px] px-3 py-1 uppercase tracking-widest rounded font-semibold">${p.artType || 'String Art'}</div>
                </div>
                <div class="p-6">
                    <h3 class="font-serif text-lg text-luxuryCream group-hover:text-luxuryGold transition cursor-pointer truncate" onclick="openProductModal('${p.id}')">${p.name}</h3>
                    <p class="text-xs text-gray-400 font-light leading-relaxed truncate mt-1">${p.desc || ''}</p>
                    <p class="text-[9px] text-gray-500 uppercase tracking-widest mt-2">${p.nails || '360'} Nails • ${p.hours || '18 Hours'} Crafted</p>
                    <div class="flex justify-between items-center mt-5">
                        <span class="text-luxuryGold font-serif text-base font-bold">${formatVal(p.price)}</span>
                        <button onclick="addToCart('${p.id}'); event.stopPropagation();" class="bg-luxuryGold hover:bg-luxuryGoldHover text-luxuryBlack text-[10px] uppercase tracking-wider font-semibold px-4 py-2 transition rounded shadow">
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        container.appendChild(flexGrid);
        return;
    }

    const cardsPerRow = 10;
    const rows = [];
    for (let i = 0; i < items.length; i += cardsPerRow) {
        rows.push(items.slice(i, i + cardsPerRow));
    }

    rows.forEach((rowItems, rowIndex) => {
        const rowId = `marquee-row-${rowIndex}`;
        const rowWrapper = document.createElement('div');
        rowWrapper.className = "gallery-marquee-container py-2 relative";
        
        const constantSpeedFactor = 4.2; 
        const calculatedDuration = Math.max(15, rowItems.length * constantSpeedFactor);

        // Overlay manual arrow control buttons
        rowWrapper.innerHTML = `
            <button class="marquee-arrow-btn marquee-arrow-left" onclick="shiftMarquee('${rowId}', 'left')"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="marquee-arrow-btn marquee-arrow-right" onclick="shiftMarquee('${rowId}', 'right')"><i class="fa-solid fa-chevron-right"></i></button>
        `;

        const doubleList = [...rowItems, ...rowItems, ...rowItems];
        const contentDiv = document.createElement('div');
        contentDiv.id = rowId;
        contentDiv.className = "gallery-marquee-content space-x-6";
        contentDiv.style.animationDuration = `${calculatedDuration}s`; 
        
        contentDiv.innerHTML = doubleList.map(p => `
            <div class="gallery-card glass-card group overflow-hidden relative transition-all duration-300 rounded luxury-border-glow shrink-0 w-72 inline-block whitespace-normal select-none">
                <div class="relative overflow-hidden aspect-square bg-neutral-900 cursor-pointer card-zoom" onclick="openProductModal('${p.id}')">
                    <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/600/161616/d4af37?text=SC03'">
                    <div class="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent opacity-60"></div>
                    <div class="absolute top-4 right-4 bg-luxuryBlack/85 border border-luxuryGold/20 text-luxuryGold text-[9px] px-3 py-1 uppercase tracking-widest rounded font-semibold">${p.artType || 'String Art'}</div>
                </div>
                <div class="p-6">
                    <h3 class="font-serif text-lg text-luxuryCream group-hover:text-luxuryGold transition cursor-pointer truncate" onclick="openProductModal('${p.id}')">${p.name}</h3>
                    <p class="text-xs text-gray-400 font-light leading-relaxed truncate mt-1">${p.desc || ''}</p>
                    <p class="text-[9px] text-gray-500 uppercase tracking-widest mt-2">${p.nails || '360'} Nails • ${p.hours || '18 Hours'} Crafted</p>
                    <div class="flex justify-between items-center mt-5">
                        <span class="text-luxuryGold font-serif text-base font-bold">${formatVal(p.price)}</span>
                        <button onclick="addToCart('${p.id}'); event.stopPropagation();" class="bg-luxuryGold hover:bg-luxuryGoldHover text-luxuryBlack text-[10px] uppercase tracking-wider font-semibold px-4 py-2 transition rounded shadow">
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        rowWrapper.appendChild(contentDiv);
        container.appendChild(rowWrapper);
    });
}

// HTML5 Drag and Drop Sorting Controller
function renderAdminDragList() {
    const container = document.getElementById('admin-drag-container');
    if (!container) return;
    container.innerHTML = products.map((p, idx) => `
        <div class="flex items-center space-x-4 p-3 bg-luxuryBlack/50 border border-luxuryGold/10 rounded cursor-grab active:cursor-grabbing hover:border-luxuryGold/40 transition duration-300 select-none" draggable="true" ondragstart="handleDragStart(event, ${idx})" ondragover="handleDragOver(event)" ondrop="handleDragDrop(event, ${idx})">
            <span class="text-xs text-gray-600 font-bold">#${idx + 1}</span>
            <img src="${p.img}" class="h-10 w-10 object-cover rounded border border-luxuryGold/20" alt="Drag preview" onerror="this.src='https://via.placeholder.com/150/161616/d4af37?text=SC03'">
            <span class="text-xs font-semibold text-luxuryCream flex-1 truncate">${p.name}</span>
            <span class="text-[10px] text-luxuryGold font-serif font-bold">${formatVal(p.price)}</span>
            <span class="text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1"><i class="fa-solid fa-arrows-up-down"></i> Sort</span>
        </div>
    `).join('');
}

let dragSourceIdx = null;
function handleDragStart(e, idx) {
    dragSourceIdx = idx;
    e.dataTransfer.effectAllowed = 'move';
}
function handleDragOver(e) {
    e.preventDefault();
}

function handleDragDrop(e, targetIdx) {
    e.preventDefault();
    if (dragSourceIdx !== null && dragSourceIdx !== targetIdx) {
        const movedItem = products.splice(dragSourceIdx, 1)[0];
        products.splice(targetIdx, 0, movedItem);
        
        saveToStorage();
        renderGallery();
        renderAdminDragList();
        renderAdminProducts();
        showToast("Display Order saved to storage.");
    }
}

// 35+ Types Accordion
function renderStringArtDirectory() {
    const container = document.getElementById('string-art-index-accordion');
    if (!container) return;
    container.innerHTML = '';
    stringArtTypes.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'glass-card p-4 transition-all duration-300 border border-luxuryGold/10 hover:border-luxuryGold/35 rounded';
        itemDiv.innerHTML = `
            <div class="flex justify-between items-center cursor-pointer select-none pb-2 border-b border-luxuryGold/5" onclick="toggleAccordionSection(${index})">
                <span class="font-serif text-base text-luxuryGold font-semibold uppercase tracking-wider">${item.title}</span>
                <span id="accordion-icon-${index}" class="text-luxuryGold text-xs"><i class="fa-solid fa-chevron-down"></i></span>
            </div>
            <div id="accordion-content-${index}" class="hidden pt-4 space-y-4 animate-fadeIn">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <img src="${item.img}" class="w-full h-32 object-cover rounded border border-luxuryGold/10" alt="Preview Image" onerror="this.src='https://via.placeholder.com/300/161616/d4af37?text=SC03'">
                    <p class="text-xs text-gray-400 leading-relaxed">${item.content}</p>
                </div>
                <button onclick="triggerArtClassPreview('${item.title}')" class="w-full bg-luxuryGold/15 hover:bg-luxuryGold/30 text-luxuryGold text-[10px] uppercase tracking-widest py-2 font-bold border border-luxuryGold/30 rounded">
                    Preview Loop Coordinates
                </button>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

function toggleAccordionSection(idx) {
    const block = document.getElementById(`accordion-content-${idx}`);
    const icon = document.getElementById(`accordion-icon-${idx}`);
    block.classList.toggle('hidden');
    icon.innerHTML = block.classList.contains('hidden') ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-chevron-up"></i>';
}

function triggerArtClassPreview(title) {
    document.getElementById('class-modal-title').innerText = title;
    document.getElementById('class-modal-desc').innerText = `Handcrafted custom loops specifically calibrated for standard ${title} arrangements. Fully customizable dynamic thread densities.`;
    document.getElementById('art-class-modal').classList.remove('hidden');
}

function toggleArtClassModal() {
    document.getElementById('art-class-modal').classList.toggle('hidden');
}

// Custom Studio Lists Setup
function renderSearchableLists() {
    const threadList = document.getElementById('thread-list');
    const colorList = document.getElementById('color-list');
    
    if (threadList) {
        threadList.innerHTML = availableThreads.map(t => `
            <label class="flex items-center space-x-2 cursor-pointer py-1 text-gray-300 hover:text-luxuryGold list-item-thread">
                <input type="checkbox" name="custom-threads" value="${t}" class="rounded border-luxuryGold/40 bg-luxuryBlack text-luxuryGold">
                <span class="thread-name-span">${t}</span>
            </label>
        `).join('');
    }
    if (colorList) {
        colorList.innerHTML = availableColors.map(c => `
            <label class="flex items-center space-x-2 cursor-pointer py-1 text-gray-300 hover:text-luxuryGold list-item-color">
                <input type="checkbox" name="custom-colors" value="${c}" class="rounded border-luxuryGold/40 bg-luxuryBlack text-luxuryGold">
                <span class="color-name-span">${c}</span>
            </label>
        `).join('');
    }
}

function filterSearchableList(type) {
    if (type === 'thread') {
        const query = document.getElementById('thread-search').value.toLowerCase().trim();
        const items = document.querySelectorAll('.list-item-thread');
        items.forEach(item => {
            const text = item.querySelector('.thread-name-span').innerText.toLowerCase();
            item.style.display = text.includes(query) ? 'flex' : 'none';
        });
    } else {
        const query = document.getElementById('color-search').value.toLowerCase().trim();
        const items = document.querySelectorAll('.list-item-color');
        items.forEach(item => {
            const text = item.querySelector('.color-name-span').innerText.toLowerCase();
            item.style.display = text.includes(query) ? 'flex' : 'none';
        });
    }
}

// Arrow Shifter Logic
let marqueeManualOffsets = {};
// Dynamic Asynchronous Smooth Slider loop (Rule 1 & 2)
function initMarqueeAutoScroll(rowId) {
    const container = document.getElementById(rowId);
    if (!container) return;

    container.style.scrollBehavior = 'auto'; // Keep scroll auto for linear motion
    const scrollSpeed = 0.85; // BUTTERY SMOOTH VELOCITY CONTROL (Matches all masterpieces)

    function step() {
        if (activeMarqueeScrolls[rowId] === 'paused') {
            requestAnimationFrame(step);
            return;
        }

        container.scrollLeft += scrollSpeed;

        // Infinite loop threshold reset cleanly (1/3 of duplicate lists widths)
        if (container.scrollLeft >= (container.scrollWidth / 3) * 2) {
            container.scrollLeft = container.scrollWidth / 3;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth / 3;
        }

        requestAnimationFrame(step);
    }

    // Seed center point offset
    setTimeout(() => {
        container.scrollLeft = container.scrollWidth / 3;
        activeMarqueeScrolls[rowId] = 'running';
        requestAnimationFrame(step);
    }, 100);

    // Hover pauses auto scroll
    container.onmouseenter = () => { activeMarqueeScrolls[rowId] = 'paused'; };
    container.onmouseleave = () => { activeMarqueeScrolls[rowId] = 'running'; };
}

// Manual Arrow Toggler with 1.5s Cooldown Resume (Rule 2)
function shiftMarquee(rowId, direction) {
    const container = document.getElementById(rowId);
    if (!container) return;

    // Pause auto scroll to handle click override
    activeMarqueeScrolls[rowId] = 'paused';
    container.style.scrollBehavior = 'smooth'; // Smooth horizontal manual transition

    const shiftAmount = 312; // width + grid gap width
    if (direction === 'left') {
        container.scrollLeft -= shiftAmount;
    } else {
        container.scrollLeft += shiftAmount;
    }

    // Cooldown resume thread
    clearTimeout(container.scrollTimeout);
    container.scrollTimeout = setTimeout(() => {
        container.style.scrollBehavior = 'auto';
        activeMarqueeScrolls[rowId] = 'running';
    }, 1500); 
}

    const shiftLength = 300; 
    if (direction === 'left') {
        marqueeManualOffsets[rowId] += shiftLength;
    } else {
        marqueeManualOffsets[rowId] -= shiftLength;
    }

    track.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    track.style.transform = `translateX(${marqueeManualOffsets[rowId]}px)`;
}

// Media Slide Popup Modal
let activeProductForCertificate = null;
function openProductModal(id) {
    const currentIdx = products.findIndex(p => p.id.toString() === id.toString());
    if (currentIdx === -1) return;
    
    const item = products[currentIdx];
    activeProductForCertificate = item;

    const imgFrame = document.getElementById('modal-img');
    imgFrame.src = item.img;
    imgFrame.classList.remove('hidden');
    const videoFrame = document.getElementById('modal-video');
    videoFrame.classList.add('hidden');
    videoFrame.src = "";

    document.getElementById('modal-title').innerText = item.name;
    document.getElementById('modal-price').innerText = formatVal(item.price);
    document.getElementById('modal-discount-price').innerText = item.discountPrice ? formatVal(item.discountPrice) : "";
    document.getElementById('modal-desc').innerText = item.desc || "";

    const starsContainer = document.getElementById('modal-stars-container');
    let starsHTML = '';
    const rating = item.rating || 5;
    for (let i = 0; i < rating; i++) starsHTML += '<i class="fa-solid fa-star"></i>';
    starsContainer.innerHTML = starsHTML;

    const bulletContainer = document.getElementById('modal-bullet-list');
    bulletContainer.innerHTML = '';
    if (item.bullets) {
        item.bullets.forEach(b => {
            bulletContainer.innerHTML += `<li>${b}</li>`;
        });
    } else {
        bulletContainer.innerHTML = `<li>100% Manual Weaving Setup</li><li>Lifetime Archival Quality Guarantee</li>`;
    }

    const specsTable = document.getElementById('specs-table-body');
    const specsData = [
        { k: "Product Name", v: item.name },
        { k: "Price Structure", v: formatVal(item.price) },
        { k: "Art Typology", v: item.artType || "Manual Silhouette Layering" },
        { k: "Board size", v: item.boardSize || '36" x 36" (3ft x 3ft)' },
        { k: "Board coating color", v: item.boardColor || "Matte Dark Velvet Black" },
        { k: "Outer framing type", v: item.frameType || "Custom Stained Hardwood Profile" },
        { k: "Framing coloration", v: item.frameColor || "Obsidian Gold Rim Staining" },
        { k: "Thread core material", v: item.threadMaterial || "German Filament Silk Core" },
        { k: "Thread micro thickness", v: item.threadThickness || "0.6mm Micro-tension" },
        { k: "Thread size gauge", v: item.threadSize || "No. 3 Archival Weft" },
        { k: "Thread selection hue", v: item.threadColor || "Spectral Saffron" },
        { k: "Precision nail counts", v: `${item.nails || '360'} Nails` },
        { k: "Creation crafted hours", v: item.hours || "18 Hours" },
        { k: "Art difficulty level", v: item.difficulty || "Intermediate (3/5)" },
        { k: "Category sector", v: item.category.toUpperCase() },
        { k: "Availability state", v: item.availability || "In Stock" },
        { k: "Registry added date", v: item.dateAdded || "2026-07-09" }
    ];

    specsTable.innerHTML = specsData.map(spec => `
        <tr class="hover:bg-luxuryGold/5 transition">
            <td class="px-4 py-2 text-gray-500 font-semibold w-1/2">${spec.k}</td>
            <td class="px-4 py-2 text-luxuryCream font-bold">${spec.v}</td>
        </tr>
    `).join('');

    const previewsContainer = document.getElementById('modal-media-previews');
    previewsContainer.innerHTML = '';

    const addPreviewDot = (type, url, isVideo = false) => {
        const dot = document.createElement('div');
        dot.className = "w-12 h-12 border border-luxuryGold/10 hover:border-luxuryGold rounded cursor-pointer shrink-0 flex items-center justify-center bg-luxuryBlack overflow-hidden transition";
        if (isVideo) {
            dot.innerHTML = `<i class="fa-solid fa-play text-luxuryGold text-xs"></i>`;
            dot.onclick = () => changeModalMedia('video', url);
        } else {
            dot.innerHTML = `<img src="${url}" class="w-full h-full object-cover">`;
            dot.onclick = () => changeModalMedia('image', url);
        }
        previewsContainer.appendChild(dot);
    };

    addPreviewDot('image', item.img);

    if (item.multiImages) {
        const imgUrls = item.multiImages.split(',').map(url => url.trim());
        imgUrls.forEach(url => { if (url) addPreviewDot('image', url); });
    }

    if (item.video) {
        addPreviewDot('video', item.video, true);
    }

    const prevBtn = document.getElementById('prev-product-btn');
    const nextBtn = document.getElementById('next-product-btn');
    
    const prevIdx = (currentIdx - 1 + products.length) % products.length;
    const nextIdx = (currentIdx + 1) % products.length;

    prevBtn.onclick = () => { openProductModal(products[prevIdx].id); };
    nextBtn.onclick = () => { openProductModal(products[nextIdx].id); };

    // Sharing and Inquiry Triggers
    document.getElementById('modal-whatsapp-btn').onclick = () => {
        const text = `Greetings! I am interested in inquiring about "${item.name}" valued at ${formatVal(item.price)}. Let's configure customized dimensions options.`;
        window.open(`https://wa.me/918140125772?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('modal-telegram-btn').onclick = () => {
        const text = `Inquiry of ${item.name} from web registry.`;
        window.open(`https://telegram.me/stringcreations03_placeholder?text=${encodeURIComponent(text)}`, '_blank');
    };

    document.getElementById('modal-email-btn').onclick = () => {
        window.open(`mailto:stringcreations03@gmail.com?subject=Inquiry: ${encodeURIComponent(item.name)}&body=I would like to customize this design.`, '_blank');
    };

    document.getElementById('modal-instagram-btn').onclick = () => {
        window.open(`https://instagram.com/string_creations03`, '_blank');
    };

    document.getElementById('product-modal').classList.remove('hidden');
}

function openLightbox(src) {
    const lb = document.getElementById('lightbox-modal');
    const lbImg = document.getElementById('lightbox-img');
    if (lb && lbImg) {
        lbImg.src = src;
        lb.classList.remove('hidden');
    }
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
}

function changeModalMedia(type, url) {
    const imgFrame = document.getElementById('modal-img');
    const videoFrame = document.getElementById('modal-video');
    const localVideoFrame = document.getElementById('modal-local-video');
    
    imgFrame.classList.add('hidden');
    videoFrame.classList.add('hidden');
    localVideoFrame.classList.add('hidden');
    
    videoFrame.src = "";
    localVideoFrame.src = "";
    if (localVideoFrame.pause) localVideoFrame.pause();

    if (type === 'image') {
        imgFrame.src = url;
        imgFrame.classList.remove('hidden');
    } else if (type === 'video') {
        if (url.startsWith('data:video/') || url.endsWith('.mp4')) {
            localVideoFrame.src = url;
            localVideoFrame.classList.remove('hidden');
            if (localVideoFrame.play) localVideoFrame.play();
        } else {
            videoFrame.src = url;
            videoFrame.classList.remove('hidden');
        }
    }
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
    document.getElementById('modal-video').src = ""; 
    const localVideo = document.getElementById('modal-local-video');
    if (localVideo) {
        localVideo.pause();
        localVideo.src = "";
    }
}

function generateDigitalCertificate() {
    if (!activeProductForCertificate) return;
    document.getElementById('cert-title').innerText = activeProductForCertificate.name;
    document.getElementById('cert-registry-id').innerText = `REGISTRY SECURE NO: SC03-${Math.floor(Math.random() * 900000 + 100000)}`;
    document.getElementById('certificate-modal').classList.remove('hidden');
}

function closeCertificate() {
    document.getElementById('certificate-modal').classList.add('hidden');
}

function shareItem(platform) {
    if (!activeProductForCertificate) return;
    const text = `Take a look at this breathtaking handmade masterpiece, "${activeProductForCertificate.name}" from String Creations 03!`;
    const url = window.location.href;
    if (platform === 'whatsapp') {
        window.open(`https://wa.me/?text=${encodeURIComponent(text + " " + url)}`, '_blank');
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    }
}

function copyShareLink() {
    navigator.clipboard.writeText(window.location.href);
    showToast("Masterpiece portfolio link copied!");
}

// Shopping Cart Drawer Setup
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) drawer.classList.toggle('translate-x-full');
    renderCart();
}

function addToCart(id) {
    const item = products.find(p => p.id.toString() === id.toString());
    if (!item) return;

    const exists = cart.find(cartItem => cartItem.id.toString() === id.toString());
    if (!exists) {
        cart.push(item);
        saveToStorage();
        updateCartCount();
        showToast(`"${item.name}" added to Art Bag`);
    } else {
        alert('This Masterpiece is already selected in your container.');
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id.toString() !== id.toString());
    saveToStorage();
    updateCartCount();
    renderCart();
}

// Compact Select Toggler Menu
function toggleMobileMenu() {
    const drawer = document.getElementById('mobile-menu-drawer');
    const backdrop = document.getElementById('mobile-menu-backdrop');
    if (drawer && backdrop) {
        drawer.classList.toggle('translate-x-full');
        backdrop.classList.toggle('hidden');
    }
}

// Security Authentication
function requestAdminAccess() {
    showSection('admin-view');
    const isLoggedIn = sessionStorage.getItem('sc03_logged_in');
    if (isLoggedIn === 'true') {
        document.getElementById('admin-login-shield').classList.add('hidden');
        document.getElementById('admin-dashboard-panel').classList.remove('hidden');
        renderAdminDragList();
    } else {
        document.getElementById('admin-login-shield').classList.remove('hidden');
        document.getElementById('admin-dashboard-panel').classList.add('hidden');
    }
}

function handleAdminAuth() {
    const pass = document.getElementById('admin-pass').value;
    const err = document.getElementById('admin-err');
    if (pass === 'SC03Admin2026') {
        sessionStorage.setItem('sc03_logged_in', 'true');
        document.getElementById('admin-login-shield').classList.add('hidden');
        document.getElementById('admin-dashboard-panel').classList.remove('hidden');
        err.classList.add('hidden');
        showToast("Session Unlocked. Welcome Admin.");
        document.getElementById('admin-pass').value = '';
        renderAdminDragList();
    } else {
        err.classList.remove('hidden');
    }
}

function handleAdminLogOut() {
    sessionStorage.removeItem('sc03_logged_in');
    requestAdminAccess();
    showToast("Session Locked.");
}

function updateCartCount() {
    const el = document.getElementById('cart-count');
    if (el) el.innerText = cart.length;
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const totalVal = document.getElementById('cart-total-price');

    if (!container) return;
    container.innerHTML = '';

    if (cart.length === 0) {
        emptyMsg.classList.remove('hidden');
        container.appendChild(emptyMsg);
        totalVal.innerText = formatVal(0);
        return;
    }

    emptyMsg.classList.add('hidden');
    let sum = 0;

    cart.forEach(item => {
        sum += item.price;
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center bg-luxuryBlack/40 p-4 border border-luxuryGold/10 rounded';
        div.innerHTML = `
            <div>
                <h4 class="text-xs uppercase font-bold text-luxuryCream tracking-wider">${item.name}</h4>
                <p class="text-xs text-luxuryGold font-serif font-semibold mt-1">${formatVal(item.price)}</p>
            </div>
            <button onclick="removeFromCart('${item.id}')" class="text-red-500 hover:text-red-700 text-sm"><i class="fa-regular fa-trash-can"></i></button>
        `;
        container.appendChild(div);
    });

    totalVal.innerText = formatVal(sum);
}

function dispatchCartCheckout() {
    if (cart.length === 0) {
        alert('Your bag container is currently empty.');
        return;
    }

    let orderList = cart.map(item => `• ${item.name} (${formatVal(item.price)})`).join('\n');
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const msg = `Greetings String Creations 03! I would like to order the following masterpieces from your live collection:\n\n` + 
                `${orderList}\n\n` + 
                `Grand Total Value: ${formatVal(total)}\n\n` + 
                `Please verify delivery times and shipping coordinates.`;
    
    window.open("https://wa.me/918140125772?text=" + encodeURIComponent(msg), '_blank');
}

// Testimonial Loops Mapping
function renderReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    container.innerHTML = '';
    
    if (!reviews || reviews.length === 0) {
        reviews = [...defaultReviews];
        saveToStorage();
    }

    const doubleList = [...reviews, ...reviews, ...reviews];
    doubleList.forEach(r => {
        const card = document.createElement('div');
        card.className = 'glass-card p-8 space-y-4 shrink-0 w-80 inline-block whitespace-normal rounded';
        
        let stars = '';
        for (let i = 0; i < r.rating; i++) stars += '<i class="fa-solid fa-star"></i>';
        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex text-luxuryGold gap-1 text-xs">${stars}</div>
                <span class="text-[9px] uppercase tracking-widest text-emerald-500 flex items-center gap-1 font-semibold"><i class="fa-solid fa-circle-check"></i> Verified</span>
            </div>
            <p class="font-serif text-base text-gray-300 italic">"${r.text}"</p>
            <div>
                <h4 class="text-xs uppercase tracking-wider font-bold">${r.name}</h4>
                <p class="text-[9px] text-gray-500">Verified Collector</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleReviewModal() {
    document.getElementById('review-modal').classList.toggle('hidden');
}

function handleReviewSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('review-form-name').value.trim();
    const rating = parseInt(document.getElementById('review-form-rating').value);
    const text = document.getElementById('review-form-text').value.trim();

    reviews.unshift({ name, rating, text });
    saveToStorage();
    renderReviews();

    document.getElementById('review-form-name').value = '';
    document.getElementById('review-form-text').value = '';
    toggleReviewModal();
    showToast('Thank you for sharing your experience!');
}

// Track Order Trigger Handlers
function toggleTrackModal() {
    document.getElementById('track-modal').classList.toggle('hidden');
    document.getElementById('track-result').classList.add('hidden');
}

function trackArtwork() {
    const id = document.getElementById('order-track-id').value.trim().toUpperCase();
    if (!id) {
        alert('Please enter a valid order reference code.');
        return;
    }
    
    document.getElementById('track-display-id').innerText = id;
    const res = document.getElementById('track-result');
    const step1 = document.getElementById('track-step-1');
    const step2 = document.getElementById('track-step-2');
    const step3 = document.getElementById('track-step-3');
    const phaseTxt = document.getElementById('track-display-phase');
    
    res.classList.remove('hidden');

    if (id === 'SC03-2415') {
        phaseTxt.innerText = "Threading Layers";
        step1.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
        step2.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
        step3.className = "p-2 bg-neutral-900 text-gray-600 rounded";
    } else if (id === 'SC03-8821') {
        phaseTxt.innerText = "Dispatched and Shipped";
        step1.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
        step2.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
        step3.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
    } else {
        let sum = 0;
        for(let i=0; i<id.length; i++) sum += id.charCodeAt(i);
        if (sum % 2 === 0) {
            phaseTxt.innerText = "Digital Alignment & Vector Mapping";
            step1.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
            step2.className = "p-2 bg-neutral-900 text-gray-600 rounded";
            step3.className = "p-2 bg-neutral-900 text-gray-600 rounded";
        } else {
            phaseTxt.innerText = "Frame Treatment & Assembly Setup";
            step1.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
            step2.className = "p-2 bg-luxuryGold/10 border border-luxuryGold/30 text-luxuryGold rounded";
            step3.className = "p-2 bg-neutral-900 text-gray-600 rounded";
        }
    }
}

// In Memory Administration Grid Render
let editingProductId = null;

function renderAdminProducts() {
    const list = document.getElementById('admin-products-list');
    if (!list) return;
    list.innerHTML = '';
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'flex justify-between items-center bg-luxuryBlack/50 p-3 border border-luxuryGold/15 rounded';
        div.innerHTML = `
            <div class="truncate mr-4 flex-1">
                <h4 class="text-xs font-bold text-luxuryCream truncate uppercase">${p.name}</h4>
                <p class="text-[10px] text-luxuryGold font-serif font-bold">${formatVal(p.price)}</p>
            </div>
            <div class="flex space-x-2 shrink-0">
                <button onclick="editProductFromAdmin('${p.id}')" class="text-luxuryGold hover:text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-luxuryCharcoal rounded border border-luxuryGold/20"><i class="fa-regular fa-pen-to-square"></i> Edit</button>
                <button onclick="deleteProductFromAdmin('${p.id}')" class="text-red-500 hover:text-red-700 text-sm px-2"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `;
        list.appendChild(div);
    });
}

function editProductFromAdmin(id) {
    const item = products.find(p => p.id.toString() === id.toString());
    if (!item) return;

    editingProductId = id;

    // Populate inputs automatically
    document.getElementById('admin-p-name').value = item.name;
    document.getElementById('admin-p-cat').value = item.category;
    document.getElementById('admin-p-price').value = item.price;
    document.getElementById('admin-p-hours').value = item.hours;
    document.getElementById('admin-p-nails').value = item.nails;
    document.getElementById('admin-p-threads').value = item.threads;
    document.getElementById('admin-p-desc').value = item.desc || "";

    document.getElementById('admin-p-arttype').value = item.artType || "";
    document.getElementById('admin-p-boardsize').value = item.boardSize || "";
    document.getElementById('admin-p-boardcolor').value = item.boardColor || "";
    document.getElementById('admin-p-frametype').value = item.frameType || "";
    document.getElementById('admin-p-framecolor').value = item.frameColor || "";
    document.getElementById('admin-p-threadmaterial').value = item.threadMaterial || "";
    document.getElementById('admin-p-threadthickness').value = item.threadThickness || "";
    document.getElementById('admin-p-threadsize').value = item.threadSize || "";
    document.getElementById('admin-p-threadcolor').value = item.threadColor || "";
    document.getElementById('admin-p-difficulty').value = item.difficulty || "";
    document.getElementById('admin-p-availability').value = item.availability || "";
    document.getElementById('admin-p-bullets').value = item.bullets ? item.bullets.join(', ') : "";

    // Scroll to form inside Admin Panel view
    document.querySelector('#admin-dashboard-panel form').scrollIntoView({ behavior: 'smooth' });
    showToast("Specifications loaded to editor console.");
}

// Local File Media Publisher integration
async function handleAdminAddProduct(event) {
    event.preventDefault();

    const name = document.getElementById('admin-p-name').value;
    const category = document.getElementById('admin-p-cat').value;
    const price = parseInt(document.getElementById('admin-p-price').value);
    const hours = document.getElementById('admin-p-hours').value;
    const nails = parseInt(document.getElementById('admin-p-nails').value);
    const threads = parseInt(document.getElementById('admin-p-threads').value);
    const desc = document.getElementById('admin-p-desc').value;

    const artType = document.getElementById('admin-p-arttype').value.trim() || "Custom Selected Aesthetics";
    const boardSize = document.getElementById('admin-p-boardsize').value.trim() || "Tailored to Order";
    const boardColor = document.getElementById('admin-p-boardcolor').value.trim() || "Obsidian Velvet Matte Black";
    const frameType = document.getElementById('admin-p-frametype').value.trim() || "Authentic Stained Hardwood Profile";
    const frameColor = document.getElementById('admin-p-framecolor').value.trim() || "Aesthetic Vintage Gold Trim";
    const threadMaterial = document.getElementById('admin-p-threadmaterial').value.trim() || "German Filament Silk Core";
    const threadThickness = document.getElementById('admin-p-threadthickness').value.trim() || "0.6mm Micro-tension";
    const threadSize = document.getElementById('admin-p-threadsize').value.trim() || "No. 3 Archival Weft";
    const threadColor = document.getElementById('admin-p-threadcolor').value.trim() || "Concentric Customized Hue";
    const difficulty = document.getElementById('admin-p-difficulty').value.trim() || "Custom Grade";
    const availability = document.getElementById('admin-p-availability').value.trim() || "In Stock (Custom Built to Order)";
    
    const bulletsRaw = document.getElementById('admin-p-bullets').value.trim();
    const bullets = bulletsRaw ? bulletsRaw.split(',').map(b => b.trim()) : ["Custom built specifically to your scale", "Lifetime anti-fade thread filament warranty"];

    const primaryImgFile = document.getElementById('admin-p-img-file').files[0];
    const multiImgFiles = document.getElementById('admin-p-multi-images-file').files;
    const videoFile = document.getElementById('admin-p-video-file').files[0];

    // If edit state is inactive, require media
    if (!editingProductId && !primaryImgFile && !videoFile) {
        alert("Action Required: Please select either a primary display photo or video file.");
        return;
    }

    showToast("Publishing local media assets... please wait.");

    try {
        let primaryImgBase64 = "";
        if (primaryImgFile) {
            primaryImgBase64 = await compressImagePromise(primaryImgFile);
        }

        let multiImagesBase64 = [];
        if (multiImgFiles.length > 0) {
            for (let i = 0; i < multiImgFiles.length; i++) {
                const compressed = await compressImagePromise(multiImgFiles[i]);
                multiImagesBase64.push(compressed);
            }
        }

        let videoBase64 = "";
        if (videoFile) {
            videoBase64 = await readVideoPromise(videoFile);
        }

        if (editingProductId) {
            const index = products.findIndex(p => p.id.toString() === editingProductId.toString());
            if (index !== -1) {
                products[index].name = name;
                products[index].category = category;
                products[index].price = price;
                products[index].hours = hours;
                products[index].nails = nails;
                products[index].threads = threads;
                products[index].desc = desc;
                
                products[index].artType = artType;
                products[index].boardSize = boardSize;
                products[index].boardColor = boardColor;
                products[index].frameType = frameType;
                products[index].frameColor = frameColor;
                products[index].threadMaterial = threadMaterial;
                products[index].threadThickness = threadThickness;
                products[index].threadSize = threadSize;
                products[index].threadColor = threadColor;
                products[index].difficulty = difficulty;
                products[index].availability = availability;
                products[index].bullets = bullets;

                if (primaryImgFile) products[index].img = primaryImgBase64;
                if (multiImgFiles.length > 0) products[index].multiImages = multiImagesBase64.join(', ');
                if (videoFile) products[index].video = videoBase64;

                editingProductId = null; // reset edit memory
                saveToStorage();
                renderGallery();
                renderAdminProducts();
                renderAdminDragList();
                event.target.reset();
                showToast("Masterpiece specifications updated!");
                return;
            }
        }

        // Standard New Product Insertion Flow
        const newProduct = {
            id: 'p-' + Date.now(),
            name,
            category,
            price,
            hours,
            nails,
            threads,
            desc,
            img: primaryImgBase64 || "https://via.placeholder.com/600/161616/d4af37?text=SC03",
            multiImages: multiImagesBase64.join(', '),
            video: videoBase64,
            artType,
            boardSize,
            boardColor,
            frameType,
            frameColor,
            threadMaterial,
            threadThickness,
            threadSize,
            threadColor,
            difficulty,
            dateAdded: new Date().toISOString().split('T')[0],
            tags: ["Direct Upload", "Aesthetics"],
            rating: 5,
            availability,
            bullets
        };

        products.push(newProduct);
        saveToStorage();
        renderGallery();
        renderAdminProducts();
        renderAdminDragList();

        event.target.reset();
        showToast("Masterpiece uploaded successfully!");
    } catch (err) {
        alert(err);
    }
}

function deleteProductFromAdmin(id) {
    if (confirm('Verify: Do you want to wipe this record from your live portfolio catalog?')) {
        products = products.filter(p => p.id.toString() !== id.toString());
        saveToStorage();
        renderGallery();
        renderAdminProducts();
        renderAdminDragList();
        showToast("Product wiped.");
    }
}

// CSV DATA EXPORT / IMPORT ENGINE
function exportCatalog() {
    let csvContent = "data:text/csv;charset=utf-8,ID,Name,Category,Price,Hours,Nails,Threads,ImageURL,MultiImages,VideoURL,Description\n";
    products.forEach(p => {
        let escapedDesc = `"${p.desc.replace(/"/g, '""')}"`;
        csvContent += `${p.id},"${p.name}",${p.category},${p.price},"${p.hours}",${p.nails},${p.threads},"${p.img}","${p.multiImages || ''}","${p.video || ''}",${escapedDesc}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "SC03_Catalog_Backup.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Portfolio backup downloaded!");
}

function triggerCSVImport() {
    document.getElementById('csv-import-file').click();
}

function importCatalog(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        const lines = text.split('\n');
        const importedList = [];
        
        for (let i = 1; i < lines.length; i++) {
            const row = lines[i].trim();
            if (!row) continue;
            
            const cols = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
            if (cols.length >= 8) {
                const item = {
                    id: cols[0].replace(/"/g, '').trim(),
                    name: cols[1].replace(/"/g, '').trim(),
                    category: cols[2].replace(/"/g, '').trim(),
                    price: parseInt(cols[3]),
                    hours: cols[4].replace(/"/g, '').trim(),
                    nails: parseInt(cols[5]),
                    threads: parseInt(cols[6]),
                    img: cols[7].replace(/"/g, '').trim(),
                    multiImages: cols[8] ? cols[8].replace(/"/g, '').trim() : "",
                    video: cols[9] ? cols[9].replace(/"/g, '').trim() : "",
                    desc: cols[10] ? cols[10].replace(/"/g, '').trim() : ""
                };
                importedList.push(item);
            }
        }
        
        if (importedList.length > 0) {
            products = importedList;
            saveToStorage();
            renderGallery();
            renderAdminProducts();
            renderAdminDragList();
            showToast(`Imported ${products.length} products`);
        } else {
            alert("Invalid CSV Format. Ensure matching schema header.");
        }
    };
    reader.readAsText(file);
}
