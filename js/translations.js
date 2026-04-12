const translations = {
  en: {
    // ── NAVBAR ──
    navHome: 'Home',
    navAnalysis: 'Analysis',
    navGuide: 'Soil Guide',
    navSignOut: 'Sign Out',

    // ── HOME PAGE ──
    heroBadge: '🛰️ AI-Powered Soil Analysis',
    heroTitle: 'Identify Your Soil Type<br><em>Grow Smarter. Farm Better.</em>',
    heroSubtitle: 'Upload a photo of your soil and get instant AI-powered soil type identification, crop recommendations, moisture guidance — in seconds.',
    heroBtn1: 'Analyse Soil Now →',
    heroBtn2: 'Explore Soil Types',
    stat1Num: '94%+', stat1Lbl: 'Model Accuracy',
    stat2Num: '10', stat2Lbl: 'Soil Types',
    stat3Num: '6,773', stat3Lbl: 'Training Images',
    stat4Num: '< 3s', stat4Lbl: 'Analysis Time',
    featuresTitle: 'What SoilSense Does',
    featuresSub: 'Everything you need to make smarter farming decisions',
    feature1Title: 'Image Upload Analysis',
    feature1Desc: 'Upload any soil photo — taken fresh or from your camera roll. Our AI analyses texture, colour, and pattern instantly.',
    feature2Title: 'AI Soil Type Detection',
    feature2Desc: 'Get the predicted soil type with confidence score from our ResNet50 model trained on 6,773 real soil images.',
    feature3Title: 'Moisture & Crop Guidance',
    feature3Desc: 'Receive ideal moisture levels and crop recommendations specifically tailored for your identified soil type.',
    feature4Title: 'Soil Knowledge Guide',
    feature4Desc: 'Browse 17 soil types with characteristics, ideal moisture ranges, care tips and agricultural guidance.',
    howTitle: 'How It Works',
    howSub: 'Four simple steps to smarter farming',
    step1Title: 'Upload Image', step1Desc: 'Take a photo of your soil or pick one from your gallery',
    step2Title: 'AI Processes', step2Desc: 'Our ResNet50 model analyses colour, texture and pattern',
    step3Title: 'Get Results', step3Desc: 'See soil type, moisture guidance and crop recommendations',
    step4Title: 'Take Action', step4Desc: 'Follow the recommendations for your specific soil type',
    aboutTitle: 'About SoilSense',
    aboutDesc: 'SoilSense is an AI-powered platform designed for farmers, agronomists, gardeners, and researchers who need fast, reliable soil type identification. Built using a combined dataset of 6,773 soil images across 10 soil types, our ResNet50 model achieves 94.83% accuracy — helping you make smarter farming decisions that improve crop yield and soil management.',
    footerText: 'Made with 🌱 by <strong>SoilSense</strong> | AI-Powered Soil Type Intelligence',

    // ── SOIL GUIDE PAGE ──
    guideTitle: '📚 Soil Type Guide',
    guideSub: 'Click any soil card to learn about its ideal moisture levels and crop recommendations',
    backBtn: '← Back to Soil Guide',
    idealMoistureRange: 'Ideal Moisture Range',
    aboutThisSoil: 'About This Soil',
    keyCharacteristics: 'Key Characteristics',
    irrigationGuide: '💧 Irrigation Guide',

    // ── ANALYSIS PAGE ──
    analysisTitle: '🔬 Soil Type Analysis',
    analysisSubtitle: 'Upload a soil image to get AI-powered soil type identification and crop recommendations',
    dropText: 'Drop your soil image here',
    dropSub: 'or click to browse from your device',
    chooseFile: '📁 Choose File',
    trySample: '🌱 Try Sample',
    fileSupport: 'Supports JPG, PNG, WEBP · Max 10MB',
    analyseBtn: '🔬 Analyse Image',
    clearBtn: '✕ Clear',
    tipsTitle: '📋 Tips for Better Results',
    tip1: '✔ Take photos in natural daylight',
    tip2: '✔ Fill the frame with soil — avoid grass/plants',
    tip3: '✔ Use a top-down angle for best accuracy',
    tip4: '✔ Avoid flash as it distorts soil colour',
    tip5: '✔ Use close-up shots to capture soil texture',
    resultsTitle: 'Analysis Results',
    placeholderText: 'Upload a soil image and click <strong>Analyse Image</strong> to see results here',
    loadingText: 'Analysing soil type...',
    loadingSub: 'This takes just a moment',
    confidence: 'Model Confidence',
    moistureLevel: '💧 Ideal Moisture Level',
    foundIn: '📍 Found In',
    aboutSoil: '📝 About This Soil',
    characteristics: '🔬 Characteristics',
    recommendedCrops: '🌾 Recommended Crops',
    moistureRange: '💧 Ideal Moisture Range',
    top3: 'Top 3 Predictions',
    analyseAnother: '🔄 Analyse Another Image',
    dry: '0% Dry',
    wet: '100% Wet'
  },

  ta: {
    // ── NAVBAR ──
    navHome: 'முகப்பு',
    navAnalysis: 'பகுப்பாய்வு',
    navGuide: 'மண் வழிகாட்டி',
    navSignOut: 'வெளியேறு',

    // ── HOME PAGE ──
    heroBadge: '🛰️ AI-மூலம் மண் பகுப்பாய்வு',
    heroTitle: 'உங்கள் மண் வகையை அறியுங்கள்<br><em>சிறப்பாக வளர்க்க. சிறந்த விவசாயம்.</em>',
    heroSubtitle: 'உங்கள் மண்ணின் புகைப்படத்தை பதிவேற்றி AI மூலம் உடனடியாக மண் வகை, பயிர் பரிந்துரை மற்றும் ஈரப்பத வழிகாட்டுதல் பெறுங்கள்.',
    heroBtn1: 'மண்ணை பகுப்பாய் →',
    heroBtn2: 'மண் வகைகளை ஆராய',
    stat1Num: '94%+', stat1Lbl: 'மாதிரி துல்லியம்',
    stat2Num: '10', stat2Lbl: 'மண் வகைகள்',
    stat3Num: '6,773', stat3Lbl: 'பயிற்சி படங்கள்',
    stat4Num: '< 3வி', stat4Lbl: 'பகுப்பாய்வு நேரம்',
    featuresTitle: 'SoilSense என்ன செய்கிறது',
    featuresSub: 'சிறந்த விவசாய முடிவுகளுக்கு தேவையான அனைத்தும்',
    feature1Title: 'படம் பதிவேற்ற பகுப்பாய்வு',
    feature1Desc: 'எந்த மண் புகைப்படத்தையும் பதிவேற்றுங்கள். நமது AI அமைப்பு, நிறம் மற்றும் வடிவத்தை உடனடியாக பகுப்பாய்கிறது.',
    feature2Title: 'AI மண் வகை கண்டறிதல்',
    feature2Desc: '6,773 மண் படங்களில் பயிற்சி பெற்ற ResNet50 மாதிரியிலிருந்து நம்பகத்தன்மை மதிப்பெண்ணுடன் மண் வகையை பெறுங்கள்.',
    feature3Title: 'ஈரப்பதம் மற்றும் பயிர் வழிகாட்டுதல்',
    feature3Desc: 'உங்கள் மண் வகைக்கு ஏற்ற சிறந்த ஈரப்பத அளவு மற்றும் பயிர் பரிந்துரைகளை பெறுங்கள்.',
    feature4Title: 'மண் அறிவு வழிகாட்டி',
    feature4Desc: '17 மண் வகைகளை பண்புகள், சிறந்த ஈரப்பத வரம்புகள் மற்றும் விவசாய வழிகாட்டுதலுடன் உலாவுங்கள்.',
    howTitle: 'இது எவ்வாறு செயல்படுகிறது',
    howSub: 'சிறந்த விவசாயத்திற்கு நான்கு எளிய படிகள்',
    step1Title: 'படம் பதிவேற்று', step1Desc: 'உங்கள் மண்ணின் புகைப்படம் எடுக்கவும் அல்லது உங்கள் கேலரியிலிருந்து தேர்ந்தெடுக்கவும்',
    step2Title: 'AI செயலாக்கம்', step2Desc: 'நமது ResNet50 மாதிரி நிறம், அமைப்பு மற்றும் வடிவத்தை பகுப்பாய்கிறது',
    step3Title: 'முடிவுகளை பெறுங்கள்', step3Desc: 'மண் வகை, ஈரப்பத வழிகாட்டுதல் மற்றும் பயிர் பரிந்துரைகளை பாருங்கள்',
    step4Title: 'நடவடிக்கை எடுங்கள்', step4Desc: 'உங்கள் குறிப்பிட்ட மண் வகைக்கான பரிந்துரைகளை பின்பற்றுங்கள்',
    aboutTitle: 'SoilSense பற்றி',
    aboutDesc: 'SoilSense என்பது விவசாயிகள், வேளாண் நிபுணர்கள் மற்றும் ஆராய்ச்சியாளர்களுக்காக வடிவமைக்கப்பட்ட AI-மூலம் இயங்கும் தளம். 10 மண் வகைகளில் 6,773 மண் படங்களைக் கொண்ட தரவுத்தொகுப்பைப் பயன்படுத்தி, நமது ResNet50 மாதிரி 94.83% துல்லியத்தை அடைகிறது.',
    footerText: '🌱 உடன் தயாரிக்கப்பட்டது <strong>SoilSense</strong> | AI-மூலம் மண் வகை நுண்ணறிவு',

    // ── SOIL GUIDE PAGE ──
    guideTitle: '📚 மண் வகை வழிகாட்டி',
    guideSub: 'சிறந்த ஈரப்பத அளவுகள் மற்றும் பயிர் பரிந்துரைகளை அறிய எந்த மண் அட்டையையும் கிளிக் செய்யவும்',
    backBtn: '← மண் வழிகாட்டிக்கு திரும்பு',
    idealMoistureRange: 'சிறந்த ஈரப்பத வரம்பு',
    aboutThisSoil: 'இந்த மண்ணைப் பற்றி',
    keyCharacteristics: 'முக்கிய பண்புகள்',
    irrigationGuide: '💧 நீர்ப்பாசன வழிகாட்டி',

    // ── ANALYSIS PAGE ──
    analysisTitle: '🔬 மண் வகை பகுப்பாய்வு',
    analysisSubtitle: 'AI மூலம் மண் வகை அடையாளம் மற்றும் பயிர் பரிந்துரைகளைப் பெற மண் படத்தை பதிவேற்றவும்',
    dropText: 'உங்கள் மண் படத்தை இங்கே போடுங்கள்',
    dropSub: 'அல்லது உங்கள் சாதனத்திலிருந்து உலாவ கிளிக் செய்யவும்',
    chooseFile: '📁 கோப்பை தேர்ந்தெடு',
    trySample: '🌱 மாதிரியை முயற்சி',
    fileSupport: 'JPG, PNG, WEBP ஆதரிக்கிறது · அதிகபட்சம் 10MB',
    analyseBtn: '🔬 படத்தை பகுப்பாய்',
    clearBtn: '✕ அழி',
    tipsTitle: '📋 சிறந்த முடிவுகளுக்கான குறிப்புகள்',
    tip1: '✔ இயற்கை பகல் வெளிச்சத்தில் புகைப்படங்கள் எடுக்கவும்',
    tip2: '✔ மண்ணால் சட்டத்தை நிரப்பவும் — புல்/தாவரங்களை தவிர்க்கவும்',
    tip3: '✔ சிறந்த துல்லியத்திற்கு மேல்-கீழ் கோணத்தை பயன்படுத்தவும்',
    tip4: '✔ மண்ணின் நிறத்தை சிதைக்கும் ஃபிளாஷை தவிர்க்கவும்',
    tip5: '✔ மண்ணின் அமைப்பை பதிவுசெய்ய க்ளோஸ்-அப் படங்களை பயன்படுத்தவும்',
    resultsTitle: 'பகுப்பாய்வு முடிவுகள்',
    placeholderText: 'மண் படத்தை பதிவேற்றி <strong>படத்தை பகுப்பாய்</strong> என்பதை கிளிக் செய்யவும்',
    loadingText: 'மண் வகையை பகுப்பாய்வு செய்கிறது...',
    loadingSub: 'இது ஒரு கணம் மட்டுமே ஆகும்',
    confidence: 'மாதிரி நம்பகத்தன்மை',
    moistureLevel: '💧 சிறந்த ஈரப்பத அளவு',
    foundIn: '📍 காணப்படும் இடம்',
    aboutSoil: '📝 இந்த மண்ணைப் பற்றி',
    characteristics: '🔬 பண்புகள்',
    recommendedCrops: '🌾 பரிந்துரைக்கப்பட்ட பயிர்கள்',
    moistureRange: '💧 சிறந்த ஈரப்பத வரம்பு',
    top3: 'சிறந்த 3 கணிப்புகள்',
    analyseAnother: '🔄 மற்றொரு படத்தை பகுப்பாய்',
    dry: '0% வறண்ட',
    wet: '100% ஈரமான',

    moistureLevels: {
      'Moderate (40-60%)': 'மிதமான (40-60%)',
      'Low-Moderate (30-50%)': 'குறைந்த-மிதமான (30-50%)',
      'Low (20-40%)': 'குறைந்த (20-40%)',
      'High (50-70%)': 'அதிகமான (50-70%)',
      'Very Low (10-25%)': 'மிகவும் குறைந்த (10-25%)',
      'Low-Moderate (25-45%)': 'குறைந்த-மிதமான (25-45%)',
      'Moderate (35-55%)': 'மிதமான (35-55%)'
    },

    soilInfo: {
      'Alluvial_Soil': {
        display_name: 'வண்டல் மண்',
        description: 'நதிகளால் படிந்த மிகவும் வளமான மண். கனிமங்கள், ஊட்டச்சத்துக்கள் மற்றும் கரிம பொருட்கள் நிறைந்தது.',
        characteristics: 'இலகுவான முதல் நடுத்தர அமைப்பு, அதிக வளம், நல்ல நீர் தேக்கம்',
        found_in: 'நதி சமவெளிகள், இந்தோ-கங்கை சமவெளி, கடலோர டெல்டாக்கள்',
        crops: ['நெல்', 'கோதுமை', 'கரும்பு', 'பருத்தி', 'சணல்', 'மக்காச்சோளம்']
      },
      'Black_Soil': {
        display_name: 'கருப்பு மண்',
        description: 'கருப்பு பருத்தி மண் என்றும் அழைக்கப்படும். அதிக நீர் தேக்கும் திறன் மற்றும் கால்சியம், மெக்னீசியம் நிறைந்தது.',
        characteristics: 'அதிக களிமண் உள்ளடக்கம், ஈரத்தில் வீங்கும், வறட்சியில் வெடிக்கும்',
        found_in: 'டெக்கான் பீடபூமி, மகாராஷ்டிரா, குஜராத், மத்திய பிரதேசம்',
        crops: ['பருத்தி', 'சோயா பீன்', 'கோதுமை', 'ஜோவார்', 'சூரியகாந்தி', 'புகையிலை']
      },
      'Red_Soil': {
        display_name: 'சிவப்பு மண்',
        description: 'இரும்பு நிறைந்த சிவப்பு நிற மண். நல்ல வடிகால் ஆனால் ஊட்டச்சத்து குறைவு.',
        characteristics: 'நல்ல வடிகால், குறைந்த நீர் தேக்கம், உரம் தேவை',
        found_in: 'கிழக்கு மற்றும் தெற்கு டெக்கான் பீடபூமி, தமிழ்நாடு, ஒடிசா',
        crops: ['கடலை', 'புகையிலை', 'தினை', 'உருளைக்கிழங்கு', 'நெல்', 'கோதுமை']
      },
      'Clay': {
        display_name: 'களிமண்',
        description: 'மிகவும் நுண்ணிய துகள்களைக் கொண்ட கனமான மண். சிறந்த ஊட்டச்சத்து ஆனால் மோசமான வடிகால்.',
        characteristics: 'அதிக ஊட்டச்சத்து, மோசமான வடிகால், வெப்பமடைவது மெதுவாக',
        found_in: 'நதி பள்ளத்தாக்குகள், வெள்ள சமவெளிகள், தாழ்நிலப் பகுதிகள்',
        crops: ['நெல்', 'லெட்டூஸ்', 'முட்டைக்கோஸ்', 'ப்ரோக்கோலி', 'சார்ட்', 'பீன்ஸ்']
      },
      'Laterite_Soil': {
        display_name: 'லேட்டரைட் மண்',
        description: 'அதிக மழைப்பொழிவுள்ள வெப்பமண்டல பகுதிகளில் உருவாகிறது. இரும்பு மற்றும் அலுமினியம் ஆக்சைடுகள் நிறைந்தது.',
        characteristics: 'குறைந்த வளம், அமிலத்தன்மை, அதிக உரம் தேவை',
        found_in: 'கர்நாடகா, கேரளா, தமிழ்நாடு, அசாம், மேகாலயா',
        crops: ['தேயிலை', 'காபி', 'முந்திரி', 'தேங்காய்', 'ரப்பர்', 'அன்னாசி']
      },
      'Loam_Soil': {
        display_name: 'லோம் மண்',
        description: 'மணல், மணற்பாங்கான மண் மற்றும் களிமண்ணின் சிறந்த கலவை. சிறந்த வடிகால் மற்றும் நீர் தேக்கம்.',
        characteristics: 'சிறந்த விவசாய மண், சமன்பட்ட அமைப்பு, அதிக வளம்',
        found_in: 'விவசாய சமவெளிகள், உலகெங்கும் மிதவெப்ப பகுதிகள்',
        crops: ['அனைத்து பயிர்களும்', 'கோதுமை', 'சோளம்', 'காய்கறிகள்', 'பழங்கள்']
      },
      'Arid_Soil': {
        display_name: 'வறண்ட மண்',
        description: 'மிகவும் குறைந்த கரிம பொருட்கள் மற்றும் அதிக உப்பு உள்ளடக்கம் கொண்ட பாலை மண்.',
        characteristics: 'மணல் அமைப்பு, குறைந்த வளம், அதிக நீர்ப்பாசனம் தேவை',
        found_in: 'ராஜஸ்தான், குஜராத் பாலை பகுதிகள், வறண்ட மண்டலங்கள்',
        crops: ['தினை', 'வாற்கோதுமை', 'பருத்தி', 'பேரீச்சை', 'வறட்சி எதிர்ப்பு பயிர்கள்']
      },
      'Mountain_Soil': {
        display_name: 'மலை மண்',
        description: 'மலைப்பாங்கான பகுதிகளில் காணப்படுகிறது. அமிலத்தன்மை மற்றும் கரிம பொருட்கள் நிறைந்தது.',
        characteristics: 'அமிலத்தன்மை, ஹியூமஸ் நிறைந்தது, ஆழம் குறைவு, அரிப்பு ஆபத்து',
        found_in: 'இமயமலை, மேற்குத் தொடர்ச்சி மலை, வடகிழக்கு மலைகள்',
        crops: ['தேயிலை', 'காபி', 'பழங்கள்', 'உருளைக்கிழங்கு', 'மருத்துவ தாவரங்கள்']
      },
      'Yellow_Soil': {
        display_name: 'மஞ்சள் மண்',
        description: 'நீரேறிய இரும்பு ஆக்சிகரணத்தால் மஞ்சள் நிறம். ஈரமான பகுதிகளில் காணப்படுகிறது.',
        characteristics: 'மிதமான வளம், நல்ல வடிகால், கரிம பொருட்கள் தேவை',
        found_in: 'ஈரமான வெப்பமண்டல பகுதிகள், தென் மற்றும் கிழக்கு இந்தியா',
        crops: ['நெல்', 'இனிப்பு உருளைக்கிழங்கு', 'சோளம்', 'புகையிலை', 'கடலை']
      },
      'Cinder_Soil': {
        display_name: 'சிண்டர் மண்',
        description: 'எரிமலை தோற்றுவாய் மண். நல்ல வடிகால் மற்றும் கனிமங்கள் நிறைந்தது.',
        characteristics: 'சிறந்த வடிகால், அதிக கனிம உள்ளடக்கம், குறைந்த நீர் தேக்கம்',
        found_in: 'எரிமலை பகுதிகள், டெக்கான் பீடபூமியின் சில பகுதிகள்',
        crops: ['திராட்சை', 'ஆலிவ்', 'லாவெண்டர்', 'மூலிகைகள்', 'சதைப்பற்றுள்ள தாவரங்கள்']
      }
    }
  }
};

let currentLang = localStorage.getItem('soilsense_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('soilsense_lang', lang);
  applyTranslations();
  updateLangButton();
  renderSoilGrid();
}

function applyTranslations() {
  const t = translations[currentLang];

  // ── NAVBAR ──
  const navHome = document.getElementById('nav-home');
  const navAnalysis = document.getElementById('nav-analysis');
  const navGuide = document.getElementById('nav-guide');
  const navSignOut = document.querySelector('.btn-logout');
  if (navHome) navHome.textContent = t.navHome;
  if (navAnalysis) navAnalysis.textContent = t.navAnalysis;
  if (navGuide) navGuide.textContent = t.navGuide;
  if (navSignOut) navSignOut.textContent = t.navSignOut;

  // ── HOME PAGE ──
  const heroBadge = document.querySelector('.hero-badge');
  const heroTitle = document.querySelector('.hero h1');
  const heroSubtitle = document.querySelector('.hero p');
  const heroBtn1 = document.querySelector('.btn-hero-primary');
  const heroBtn2 = document.querySelector('.btn-hero-secondary');
  if (heroBadge) heroBadge.textContent = t.heroBadge;
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
  if (heroBtn1) heroBtn1.textContent = t.heroBtn1;
  if (heroBtn2) heroBtn2.textContent = t.heroBtn2;

  // Stats
  const statLabels = document.querySelectorAll('.stat-item .lbl');
  const statNums = document.querySelectorAll('.stat-item .num');
  if (statLabels.length >= 4) {
    statLabels[0].textContent = t.stat1Lbl;
    statLabels[1].textContent = t.stat2Lbl;
    statLabels[2].textContent = t.stat3Lbl;
    statLabels[3].textContent = t.stat4Lbl;
  }
  if (statNums.length >= 4) {
    statNums[3].textContent = t.stat4Num;
  }

  // Features
  const sectionTitles = document.querySelectorAll('.section-title');
  const sectionSubs = document.querySelectorAll('.section-sub');
  if (sectionTitles[0]) sectionTitles[0].textContent = t.featuresTitle;
  if (sectionSubs[0]) sectionSubs[0].textContent = t.featuresSub;
  if (sectionTitles[1]) sectionTitles[1].textContent = t.howTitle;
  if (sectionSubs[1]) sectionSubs[1].textContent = t.howSub;

  const featureCards = document.querySelectorAll('.feature-card');
  if (featureCards.length >= 4) {
    featureCards[0].querySelector('h3').textContent = t.feature1Title;
    featureCards[0].querySelector('p').textContent = t.feature1Desc;
    featureCards[1].querySelector('h3').textContent = t.feature2Title;
    featureCards[1].querySelector('p').textContent = t.feature2Desc;
    featureCards[2].querySelector('h3').textContent = t.feature3Title;
    featureCards[2].querySelector('p').textContent = t.feature3Desc;
    featureCards[3].querySelector('h3').textContent = t.feature4Title;
    featureCards[3].querySelector('p').textContent = t.feature4Desc;
  }

  // How it works
  const howSteps = document.querySelectorAll('.how-step');
  if (howSteps.length >= 4) {
    howSteps[0].querySelector('h4').textContent = t.step1Title;
    howSteps[0].querySelector('p').textContent = t.step1Desc;
    howSteps[1].querySelector('h4').textContent = t.step2Title;
    howSteps[1].querySelector('p').textContent = t.step2Desc;
    howSteps[2].querySelector('h4').textContent = t.step3Title;
    howSteps[2].querySelector('p').textContent = t.step3Desc;
    howSteps[3].querySelector('h4').textContent = t.step4Title;
    howSteps[3].querySelector('p').textContent = t.step4Desc;
  }

  // About
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    aboutSection.querySelector('h2').textContent = t.aboutTitle;
    aboutSection.querySelector('p').textContent = t.aboutDesc;
  }

  // Footer
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = t.footerText;

  // ── SOIL GUIDE PAGE ──
  const guideH1 = document.querySelector('.guide-header h1');
  const guidePara = document.querySelector('.guide-header p');
  if (guideH1) guideH1.textContent = t.guideTitle;
  if (guidePara) guidePara.textContent = t.guideSub;

  const backBtn = document.querySelector('.btn-back');
  if (backBtn) backBtn.textContent = t.backBtn;

  const detailMoistureH3 = document.querySelector('.moisture-range-visual h3');
  if (detailMoistureH3) detailMoistureH3.textContent = t.idealMoistureRange;

  const detailDescTitle = document.getElementById('detail-desc-title');
  if (detailDescTitle) detailDescTitle.textContent = t.aboutThisSoil;

  const detailCharH3 = document.querySelector('.info-section h3:nth-child(3)');
  if (detailCharH3) detailCharH3.textContent = t.keyCharacteristics;

  const irrigH3 = document.querySelector('#detail-irrigation h3');
  if (irrigH3) irrigH3.textContent = t.irrigationGuide;

  // ── ANALYSIS PAGE ──
  const header = document.querySelector('#analysis-page .page-header h1');
  const subtitle = document.querySelector('#analysis-page .page-header p');
  if (header) header.textContent = t.analysisTitle;
  if (subtitle) subtitle.textContent = t.analysisSubtitle;

  const dropH3 = document.querySelector('#upload-placeholder h3');
  const dropP = document.querySelector('#upload-placeholder > p');
  if (dropH3) dropH3.textContent = t.dropText;
  if (dropP) dropP.textContent = t.dropSub;

  const chooseBtn = document.querySelector('.btn-upload-fill');
  const sampleBtn = document.querySelector('.btn-upload-outline');
  const analyseBtn = document.querySelector('.btn-analyze');
  const clearBtn = document.querySelector('.btn-clear');
  if (chooseBtn) chooseBtn.textContent = t.chooseFile;
  if (sampleBtn) sampleBtn.textContent = t.trySample;
  if (analyseBtn) analyseBtn.textContent = t.analyseBtn;
  if (clearBtn) clearBtn.textContent = t.clearBtn;

  const tipsTitle = document.querySelector('#analysis-page h4');
  const tips = document.querySelectorAll('#analysis-page ul li');
  if (tipsTitle) tipsTitle.textContent = t.tipsTitle;
  if (tips.length >= 5) {
    tips[0].textContent = t.tip1;
    tips[1].textContent = t.tip2;
    tips[2].textContent = t.tip3;
    tips[3].textContent = t.tip4;
    tips[4].textContent = t.tip5;
  }

  const resultsTitle = document.querySelector('.result-panel h3');
  if (resultsTitle) resultsTitle.textContent = t.resultsTitle;

  const placeholderP = document.querySelector('.placeholder-state p');
  if (placeholderP) placeholderP.innerHTML = t.placeholderText;

  const loadingP = document.querySelector('.loading-state p');
  if (loadingP) loadingP.innerHTML = `${t.loadingText}<br>${t.loadingSub}`;

  const metricLabels = document.querySelectorAll('.metric-label');
  if (metricLabels.length >= 3) {
    metricLabels[0].textContent = t.confidence;
    metricLabels[1].textContent = t.moistureLevel;
    metricLabels[2].textContent = t.foundIn;
  }

  const infoHeadings = document.querySelectorAll('.soil-info-box h4');
  if (infoHeadings.length >= 3) {
    infoHeadings[0].textContent = t.aboutSoil;
    infoHeadings[1].textContent = t.characteristics;
    infoHeadings[2].textContent = t.recommendedCrops;
  }

  const moistureH4 = document.querySelector('.moisture-range-section h4');
  if (moistureH4) moistureH4.textContent = t.moistureRange;

  const rangeLabels = document.querySelectorAll('.range-labels span');
  if (rangeLabels.length >= 4) {
    rangeLabels[0].textContent = t.dry;
    rangeLabels[3].textContent = t.wet;
  }

  const top3H4 = document.querySelector('.top3-section h4');
  if (top3H4) top3H4.textContent = t.top3;

  const anotherBtn = document.querySelector('.result-content .btn-upload-fill');
  if (anotherBtn) anotherBtn.textContent = t.analyseAnother;
}

function updateLangButton() {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
  }
}