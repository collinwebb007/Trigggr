const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Update general CSS and Body
content = content.replace(
    /background: rgba\(255, 255, 255, 0\.95\);\s*backdrop-filter: blur\(10px\);\s*border: 1px solid rgba\(255, 255, 255, 0\.2\);/g,
    'background: rgba(10, 10, 12, 0.85);\n            backdrop-filter: blur(12px);\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);'
);

content = content.replace(
    /<body class="bg-brand-light text-brand-charcoal antialiased selection:bg-brand-orange selection:text-white">/,
    `<body class="bg-black text-gray-300 antialiased selection:bg-brand-orange selection:text-white relative">

    <!-- Full-Page Background Signal Spine -->
    <div id="background-signal-wrapper" class="fixed inset-0 w-full h-[100dvh] -z-10 pointer-events-none flex justify-center">
        <!-- Dashed Background Wire -->
        <svg class="absolute inset-0 w-8 h-full" preserveAspectRatio="none" viewBox="0 0 8 100">
            <line x1="4" y1="0" x2="4" y2="100" stroke="#222" stroke-width="2" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" />
        </svg>
        <!-- Animated Active Signal Wire -->
        <svg class="absolute inset-0 w-8 h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 8 100">
            <line id="global-signal-line" x1="4" y1="0" x2="4" y2="100" stroke="#00FF41" stroke-width="4" 
                  pathLength="100" stroke-dasharray="100" stroke-dashoffset="100" 
                  vector-effect="non-scaling-stroke" stroke-linecap="round"
                  style="filter: drop-shadow(0 0 10px #00FF41);" />
        </svg>
    </div>`
);

// 2. Navbar Colors
content = content.replace(/border-gray-200/g, 'border-white/5');
content = content.replace(/text-brand-charcoal/g, 'text-white');
content = content.replace(/text-gray-600/g, 'text-gray-400');
content = content.replace(/bg-white/g, 'bg-gray-900 border-white/5 border');
content = content.replace(/hover:bg-brand-charcoal/g, 'hover:bg-brand-orange');
content = content.replace(/<img src="assets\/images\/logo\.svg" alt="Trigggr Logo" class="w-10 h-10">/, '<img src="assets/images/logo.svg" alt="Trigggr Logo" class="w-10 h-10 invert">');

// 3. Add Input Icon to Hero
content = content.replace(
    /<!-- Hero Section -->\n\s*<section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">/,
    `<!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-visible">
        
        <!-- Source Icon (Input) Centered at Top -->
        <div class="absolute top-28 left-1/2 -translate-x-1/2 w-16 h-16 bg-gray-900 border border-gray-700 rounded-2xl flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 hidden md:flex">
            <!-- Box/Scanner icon -->
            <svg class="w-8 h-8 text-[#00FF41]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            <div class="absolute lg:-right-36 right-24 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-xs hidden sm:block">
                INPUT_SIGNAL()
            </div>
        </div>`
);

// 4. Transform sections to translucent
content = content.replace(/id="how-it-works" class="bg-brand-charcoal/g, 'id="how-it-works" class="bg-transparent');
content = content.replace(/id="product" class="py-24 bg-gray-900 border-white\/5 border relative"/g, 'id="product" class="py-24 bg-transparent relative"');
content = content.replace(/bg-gray-50/g, 'bg-gray-900/80 border-gray-800');
content = content.replace(/id="concept" class="py-24 bg-brand-charcoal/g, 'id="concept" class="py-24 bg-transparent');
content = content.replace(/<section class="py-24 bg-brand-light text-center border-t border-white\/5">/, '<section class="py-24 bg-transparent text-center border-t border-white/5">');

// 5. Remove signal bridge section completely
content = content.replace(/<!-- Signal Bridge Animation -->[\s\S]*?<!-- Product Showcase -->/, '<!-- Product Showcase -->');

// 6. Footer and Node Box Icon
content = content.replace(
    /<!-- Footer -->/,
    `<!-- Destination Node Icon (Footer Top) -->
    <div class="relative w-full flex justify-center -mb-8 z-20">
        <div id="target-node" class="w-20 h-20 bg-gray-900 border border-[#00FF41] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,65,0.4)] relative transition-all duration-300">
            <svg class="w-10 h-10 text-[#00FF41] transition-colors duration-300" id="target-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <div class="absolute lg:-left-36 left-24 top-1/2 -translate-y-1/2 text-[#00FF41] font-mono text-xs transition-opacity duration-300 hidden sm:block" id="target-label">
                NODE_RECEIVED
            </div>
        </div>
    </div>
    
    <!-- Footer -->`
);
content = content.replace(/<footer class="bg-gray-900 border-white\/5 border border-t border-white\/5">/, '<footer class="bg-gray-900/40 backdrop-blur-md border-t border-white/5 pt-8">');

// 7. Update GSAP logic in index.html
content = content.replace(
    /const signalLine = document\.getElementById\("signal-line"\);[\s\S]*?}\n\s*}\n\s*}\);\n\s*<\/script>/,
    `const globalSignalLine = document.getElementById("global-signal-line");

                if(globalSignalLine) {
                    gsap.to(globalSignalLine, {
                        strokeDashoffset: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: "body",
                            start: "top top", 
                            end: "bottom bottom",   
                            scrub: 0.5
                        }
                    });
                }
            }
        });
    </script>`
);

content = content.replace(/<footer class="bg-white border-t border-gray-200">/, '<footer class="bg-gray-900/40 backdrop-blur border-t border-white/5 pt-8">');
content = content.replace(/<img src="assets\/images\/logo\.svg" alt="Trigggr Logo" class="w-8 h-8">/, '<img src="assets/images/logo.svg" alt="Trigggr Logo" class="w-8 h-8 invert">');


fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully rewrote index.html');
