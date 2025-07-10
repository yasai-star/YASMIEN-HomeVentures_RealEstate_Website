document.addEventListener('DOMContentLoaded', () => {
    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate scroll position factoring in the fixed header height
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' // Smooth scroll effect
                });
            }

            // Close mobile menu if open after clicking a link
            if (document.querySelector('.nav-links').classList.contains('active')) {
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // --- Mobile Navigation Toggle ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle 'active' class for mobile menu visibility
    });

    // --- Properties Page Logic (Filtering) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyItems = document.querySelectorAll('.property-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter; // Get the filter category

            propertyItems.forEach(item => {
                // Show or hide items based on the selected filter
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'flex'; // Show item (using flex for consistent layout)
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });

    // --- Property Details Modal ---
    const propertyModal = document.getElementById('propertyModal');
    const closeButton = document.querySelector('.modal .close-button');
    const modalProjectName = document.getElementById('modalProjectName');
    const modalLocation = document.getElementById('modalLocation');
    const modalDescription = document.getElementById('modalDescription');
    const modalImagePlaceholder = document.querySelector('.modal-image-placeholder');
    const inquireNowButton = document.querySelector('.modal .inquire-now-btn');
   // Add modal open functionality
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const projectName = this.closest('.property-item').dataset.project;
            const details = projectDetails[projectName];

            if (details) {
                modalProjectName.textContent = projectName;
                modalLocation.textContent = details.location || 'Not specified';
                modalDescription.textContent = Array.isArray(details.description) ? details.description.join("\n") : (details.description || 'No description');
                modalImagePlaceholder.style.backgroundImage = `url('${details.image}')`;
                propertyModal.style.display = 'flex';
            } else {
                modalProjectName.textContent = projectName;
                modalLocation.textContent = 'N/A';
                modalDescription.textContent = 'Details not available';
                modalImagePlaceholder.style.backgroundImage = 'none';
                propertyModal.style.display = 'flex';
            }
        });
    });

    closeButton.addEventListener('click', () => {
        propertyModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === propertyModal) {
            propertyModal.style.display = 'none';
        }
    });

    // --- Custom Message Box Elements ---
    const customMessageBox = document.getElementById('customMessageBox');
    const messageBoxText = document.getElementById('messageBoxText');
    const messageBoxCloseBtn = document.getElementById('messageBoxCloseBtn');

    /**
     * Displays a custom message box with the given text.
     * @param {string} message - The text to display in the message box.
     */
    function showCustomMessageBox(message) {
        messageBoxText.textContent = message;
        customMessageBox.style.display = 'flex'; // Show the message box
    }

    // Close custom message box when OK button is clicked
    messageBoxCloseBtn.addEventListener('click', () => {
        customMessageBox.style.display = 'none';
    });

    // Close custom message box if clicked outside of it
    customMessageBox.addEventListener('click', (event) => {
        if (event.target === customMessageBox) {
            customMessageBox.style.display = 'none';
        }
    });
    // --- Formspree Contact Form Submit ---
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent default submit behavior

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            Accept: "application/json"
        }
    });

    if (response.ok) {
        form.reset();

        // Hide any native Formspree messages if they appear
        const existingFormspreeMsg = document.querySelector(".formspree-success");
        if (existingFormspreeMsg) {
            existingFormspreeMsg.remove();
        }

        // Show ONLY our styled success message
        formMessage.classList.add("success-message");
        formMessage.innerHTML = `<i class="fas fa-check-circle"></i> Thank you for your message! We'll contact you soon.`; 
        formMessage.style.display = "block";
    } else {
        alert("There was a problem sending your message.");
    }
});


    // Sample data for projects (replace with actual data for your properties)
    const projectDetails = {
        // CALAMBA PROJECTS
    
    "Agapeya Majada": {
               description: `"Find your ideal family home at Agapeya Homes, Calamba. A modern community with refreshing amenities, strategically located for your everyday needs."
                <ul class="checklist"> 
                   <ul>🔥 Few RFO Units Available!</ul>
                   <ul>💥Floor Area: 50sqm|💐Lot Area: 70sqm</ul>
                   <ul>💥Duplex / Twin House / 2-Storey Townhomes</ul>
                   <ul>🎉Bank Financing Promo🎉</ul>
                    <ul>✅ ₱100K Discount</ul>
                    <ul>✅ 2 Months to Pay Downpayment</ul>
                    <ul>✅ ₱20K Reservation Fee</ul>
                    <ul>✅ Move-in Upon Loan Takeout</ul>
                   <ul>🎉 PAG-IBIG Promo! 🎉</ul>
                    <ul>✅ No Reservation Fee </ul>
                    <ul>✅ No Downpayment</ul>
                    <ul>✅ Just Pay the Processing Fee </ul>
                    <ul>✅ Up to ₱150K Discount </ul>
                   <ul>🔥Home Features:</ul>
                   <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
                   <ul> ✨ Bedrooms</ul>
                   <ul> ✨ Toilets & Baths</ul>
                   <ul> ✨ Service Area & Carport Amazing </ul>
                   <ul>🔥 Amenities</ul>
            `,
        "location": "Purok 7, Majada Out Rd., Calamba, Laguna",
        "image": "https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-6/503952941_1295879112544343_7523028734959228351_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHdi49AW537BC40VWbPiteL0O8fmDCoktzQ7x-YMKiS3PoPbXlawpq1bcYgqTOc1rVG4RDYONtZTQ3iso-lLrcJ&_nc_ohc=vUyi4jaegPQQ7kNvwEWIem6&_nc_oc=AdkIZxtS4ejUjkZy7jqqMpY124GWoCaXPEn_qstKXjK7xq1LSFstyKYkkxnP5qaNAKo&_nc_zt=23&_nc_ht=scontent.fmnl17-1.fna&_nc_gid=j2t4XPszOTHKKH9iIaxqtw&oh=00_AfRBKNTYFujje3k8c_LgG5iNZubALCP0KbiXPbYrFRZ1jw&oe=6871AFB6"
    },
        "Phirstpark Calamba West": {
            description:` "Perfectly designed for your family’s comfort and convenience.
            <ul class="checklist"> 
             <ul> 💥Reservation Fee:  15,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 to 3 Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
             `,  
            location: " Brgy. Palo Alto, Calamba, Laguna.",
            image: "https://scontent.fmnl17-8.fna.fbcdn.net/v/t39.30808-6/489074809_990032596662881_6761440044108206963_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHUgmRAU4QyVx7Zrh94ssPmkw5rDIy0u_qTDmsMjLS7-jroJaQExQfImyKIDJGEmTT-9O4OVfqHiYDKcA5O5NtB&_nc_ohc=mrnWAxq1O2MQ7kNvwGvu__y&_nc_oc=Adnbjgd0TNBsL7OdJ23E4q9-u8ko1J3Mo8K8P5lAWQxrdoB67lFuSHPU6cOym9221FE&_nc_zt=23&_nc_ht=scontent.fmnl17-8.fna&_nc_gid=ETZeavCRwRCXohgVCbITcg&oh=00_AfT8mawOIonAv1QLPQQxPESezR5TxNZdwtpEv5_R_guRwA&oe=6873D0F4"
        },
        "St Joseph Homes Calamba": {
            description:` "Quality homes built for durability and comfort, offering a secure and peaceful living environment close to essential establishments.",
             <ul class="checklist"> 
                     <ul>💥 Phase 2 | Townhouse</ul>
                     <ul>✅ 36 sqm Lot | 42 sqm Floor</ul>
                     <ul>🔥Home Features:</ul>
                     <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
                     <ul> ✨ Bedrooms</ul>
                     <ul> ✨ Toilets & Baths</ul>
                     <ul> ✨ Service Area & Carport Amazing </ul>
                     <ul> ✅ Amenities</ul>
             `,  
            location: "Brgy. Burol Calamba, Laguna",
            image: "https://properties.riseandshinerealty.com.ph/images/properties/1729137298-Screenshot%202024-10-17%20113027.png"
        },
        "St Joseph Springfield": {
            description: `"A vibrant community with excellent facilities, promoting a healthy and active lifestyle for its residents through various recreational areas.",
            <ul class="checklist">
            <ul>YASMIN TOWNHOUSE🏘️🏘️</ul>
            <ul>☘️END UNIT☘️  |Floor Area: 42 sqm|Lot Area: 54 sqm</ul>
            <ul>☘️INNER UNIT☘️|Floor Area: 42 sqm|Lot Area: 36 sqm</ul>
            <ul>✅Living Area</ul>
            <ul>✅Dining area</ul>
            <ul>✅Kitchen Area</ul>
            <ul>✅Toilet and Bath</ul>
            <ul>✅Laundry Area</ul>
            <ul>💥AMENITIES⛹️🏊</ul>
        `,  
            location: "Brgy. Laguerta, Calamba City, Laguna",
            image: "https://th.bing.com/th/id/OIP.vpKoM2JE_1SmpgzdxDoxEQHaEo?w=239&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Estonia by NextAsia": {
            description: ` "Contemporary design meets practical living in this exclusive development, offering a blend of luxury and convenience with modern architectural styles.",
           <ul class="checklist">
              <ul>🔥Home Features</ul>
              <ul> ✨ Keila Townhouse</ul>
              <ul> ✨ Sindi Single Attached</ul>
              <ul> ✨ Elva Duplex</ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Calamba, Laguna (Near Mayapa Exit)",
            image: "https://tse4.mm.bing.net/th/id/OIP.cQ2r-Cg0_eHqfUPoHwt9QQHaGY?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        // CABUYAO PROJECTS
        "Idesia Cabuyao": {
            description: `"A vibrant community with excellent facilities, promoting a healthy and active lifestyle for its residents through various recreational areas.",
            description: "A modern residential development in Cabuyao, offering stylish homes and a family-friendly environment with complete amenities.",
            <ul class="checklist">
            <ul> 💥Reservation Fee:  10,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 to 3 Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul> Yama-Townhouse</ul>
              <ul> Sora-Single Attached</ul>
              <ul> Mori- Sinlge Detached</ul>
            `, 
            location: "Brgy. Marinig, Cabuyao, Laguna ",
            image: "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/1000x620/e082bd21d8f716.jpg"
        },
        "Idesia Cabuyao East": {
            description:` "The newest phase of Idesia Cabuyao, featuring expanded living spaces and upgraded community facilities for a better lifestyle.",
            <ul class="checklist">
            <ul> 💥Reservation Fee:  10,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 to 3 Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul> Yama-Townhouse</ul>
              <ul> Sora-Single Attached</ul>
              <ul> Mori- Sinlge Detached</ul>
            `, 
            location: "Brgy. Gulod Cabuyao City, Laguna",
            image: "https://properties.riseandshinerealty.com.ph/images/properties/1729844588-Screenshot%202024-10-25%20162146.png"
        },
        "Centerra Cabuyao 2": {
            description:  `"A secure and accessible community designed for comfortable urban living, with well-planned homes and convenient access to key areas.",
            <ul class="checklist">            
           <ul>💥SEMI-COMPLETE LIVABLE</ul>
           <ul> ☑️With parking lot.</ul>
           <ul> ☑️With tiles on ground floor </ul>
           <ul> ☑️With Ceiling on second floor</ul>
<ul>☑️Aluminum sliding window</ul>
           <ul> ☑️Complete kitchen and sink and accessories</ul>
            <ul>☑️Pluming Fixtures</ul>
            <ul>☑️2 coat semi-gloss painted finish.</ul>
          <ul> 🔥 Lot Area 80sqm.</ul>
           <ul>🔥 Floor Area 56.26sqm.</ul>
             `, 
            location: "Brgy.Gulod, Cabuyao City, Laguna",
            image: "https://tse4.mm.bing.net/th/id/OIP.pzNP9fmTXUmm8Y3YLRrbqAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Major Homes Cabuyao": {
            description: ` "Quality-built homes offering great value, perfect for families looking for an affordable yet comfortable living space in Cabuyao.",
            <ul class="checklist">
              <ul>🔥Home Features</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul>👉🏻 Single Attached</ul>
              <ul>👉🏻 Complete Type</ul>
            `, 
            location: "Phase 2, Brgy. Bigaa Cabuyao City, Laguna",
            image: "https://tse1.mm.bing.net/th/id/OIP.FZeZwbqtrAQkoOW5dyruUgHaGN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Whistler Village by APEC Homes Brgy. Marinig": {
            description: `"An accessible residential community by APEC Homes, providing practical and affordable housing options in Brgy. Marinig.",
             <ul class="checklist">
              <ul>🔥Floor area of 44 sqm and a Lot area of 36 sqm </ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul>👉🏻 Single Attached</ul>
              <ul>👉🏻 TownHouse</ul>
              <ul>👉🏻 Duplex</ul>
            `,
            location: "Brgy. Marinig, Cabuyao, Laguna",
            image: "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/1000x620/10076f68bd47ea.jpg"
        },
        "Sanjos Square Cabuyao (Commercial units)": {
            description: "Prime commercial units ideal for businesses and investments, located in a high-traffic area of Cabuyao.",
            location: "Barangay San Isidro, Cabuyao, Laguna",
            image: "https://tse3.mm.bing.net/th/id/OIP.uAdYles_OzjAfp_i50JmUwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        // STA. ROSA PROJECTS
        "Rosepointe Sta Rosa Laguna": {
            description: `"An elegant residential development in Sta. Rosa, offering beautiful homes and a serene environment with lush landscapes.",
 <ul class="checklist"> 
  <ul>✅️𝘊𝘰𝘮𝘱𝘭𝘦𝘵𝘦 𝘛𝘜𝘙𝘕 𝘖𝘝𝘌𝘙🎉</ul>
 <ul>✅️2 or 3  𝘉𝘦𝘥𝘳𝘰𝘰𝘮𝘴 </ul>
 <ul>✅ 𝘞𝘪𝘵𝘩 𝘉𝘢𝘭𝘤𝘰𝘯𝘺 </ul>
 <ul>✅ 𝘊𝘦𝘳𝘢𝘮𝘪𝘤 𝘛𝘪𝘭𝘦𝘴 𝘰𝘯 1𝘴𝘵 𝘍𝘭𝘰𝘰𝘳 </ul>
 <ul>✅ 𝘞𝘐𝘵𝘩 𝘊𝘢𝘳𝘱𝘰𝘳𝘵 </ul>
 <ul>🏡 𝘍𝘓𝘰𝘰𝘳 𝘈𝘳𝘦𝘢:  102sqm</ul>
 <ul>🏡𝘓𝘰𝘵 𝘈𝘳𝘦𝘢: 85s</ul>
 <ul>🏡𝘛𝘩𝘳𝘶 𝘉𝘈𝘕𝘒 𝘢𝘯𝘥 𝘗𝘈𝘎-𝘐𝘉𝘐𝘎</ul>
            `, 
            location: "Tagapo, Sta. Rosa, Laguna",
            image: "https://th.bing.com/th/id/OIP.W1KqVIMOmAijwcSc5VHOwAHaFj?w=246&h=184&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Araya Park Sta Rosa": {
            description: ` "A family-friendly community with spacious homes and abundant green spaces, promoting a healthy and active lifestyle.",
           <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ REDWOOD UNIT| Floor Area: 70 sqm Min. Lot Area: 80 sqm/ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 3 Bedrooms</ul>
              <ul> ✨ 2 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Tagapo, Sta. Rosa, Laguna",
            image: "https://1.bp.blogspot.com/-GweoEBDunw0/WMlHOsnJC6I/AAAAAAAAHQ0/s1PhzEOF4-8iLQ9TufFiBbHH_dD9kA8jwCLcB/s1600/Araya%2BPark%2BE.jpg"
        },
        "Zaya (Condo)": {
            description: "Modern condominium units perfect for urban dwellers, offering convenience and contemporary living in Sta. Rosa.",
            location: "Sta. Rosa, Laguna",
            image: "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/1000x620/9c98c4b06c24de.webp"
        },
        "The Park SMDC (Condo)": {
            description: "High-rise condominium development by SMDC, featuring resort-like amenities and prime location in Sta. Rosa.",
            location: "Sta. Rosa, Laguna",
            image: "https://th.bing.com/th/id/OIP.HSmBqsYzeAeIyrqAgJl4tQHaFj?w=233&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        // BINAN PROJECTS
        "The Penthouse": {
            description: "Exclusive and luxurious penthouse units offering panoramic views and high-end urban living.",
            location: "Binan, Laguna",
            image: "https://th.bing.com/th/id/OIP.tEJp4Ip1FgS9hbskCAVXXAHaFj?w=216&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Terraces Binan (Condo)": {
            description: "A modern condominium complex with spacious units and recreational facilities, ideal for young professionals and families.",
            location: "Pavillion Mall Binan Laguna ",
            image: "https://th.bing.com/th/id/OIP.WnAkCYrsZWEOP6ipJeuFLgHaFA?w=260&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "The Granary": {
            description:  `"A unique residential development inspired by countryside living, offering charming homes and a relaxed atmosphere.",
           <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Amara Model Townhouse| Floor Area: 48 sqm Min. Lot Area: 45 sqm</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. San Antonio, Biñan, Laguna  ",
            image: "https://th.bing.com/th/id/OIP.ZkGnva0GS3tV3ln_c4GQ9QHaEO?w=307&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Olivares Homes": {
            description: ` "Affordable and durable homes in a well-established community, providing comfort and security for its residents.",
            <ul class="checklist">
            <ul>📣MODEL UNIT</ul>
<ul>🏡PEARL Townhouse- Complete type</ul>
<ul>✅ 2 Bedrooms</ul>
<ul>✅ 2 Toilet and Bath</ul>
<ul>✅ Living Area</ul>
<ul>✅ Dinning Area</ul>
<ul>✅ Kitchen</ul>
<ul>✅ Carport</ul>
            `, 

            location: "Brgy. San Francisco, Binan, Laguna",
            image: "https://investmanila.com/wp-content/uploads/2021/08/Pearl-Facade-850x570.jpg"
        },
        "Privado Homes": {
            description:` "Private and exclusive residences designed for luxury and privacy, offering spacious interiors and premium finishes.",
           <ul class="checklist">
           <ul>🏡TIESA MODEL</ul>
           <ul>✅LOT AREA: 110sqm </ul>
           <ul> ✅FLOOR AREA: 106sqm</ul>
<ul>✅3 Bedroom with walk in closet | 2 toilet and bath | service area | carport </ul>

             `, 
            location: "Brgy. San Francisco, Binan, Laguna",
            image: "https://static.wixstatic.com/media/b04e45_44cb5cf97e014c9a87a29331937274c0~mv2.png/v1/fill/w_979,h_540,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Privado%20Homes%20Bi%C3%B1an%20Laguna%20-%20Houses%20in%20the%20Philippines.png"
        },
        "Vista Rosa San Francisco Halang": {
            description: `"Homes with scenic views and refreshing surroundings, providing a peaceful escape from the city hustle.",
          <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Aurora|2 Storey Townhouse/<ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "San Francisco Halang, Binan, Laguna",
            image: "https://th.bing.com/th/id/OIP.XnEbHIOxvhiSUQcrIeNPwwHaHa?w=178&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Golden Meadows (Lot only)": {
            description: "Prime residential lots in a developing area, offering a great opportunity for future home construction and investment.",
            location: "Brgy. San Antonio, Biñan City, Laguna ",
            image: "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/1000x620/ca8ccf6f3d2d5b.jpg"
        },
        // CAVITE PROJECTS
        "Idesia Dasmarinas": {
            description:` "A well-planned community in Dasmarinas, Cavite, known for its modern homes and accessible location.",
            <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Aria  |Lot Area: 60-90 sqm, Floor Area: 63 sqm/<ul>
              <ul>🔥 Talia |Lot Area: 80 sqm, Floor Area: 63 sqm/<ul>
              <ul>🔥 Gaia  |Lot Area: 100 sqm, Floor Area: 63 sqm/<ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Dasmarinas, Cavite",
            image: "https://tse2.mm.bing.net/th/id/OIP.LA4Ttf7gFx8J_nDXZLDcEAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Sabella Mycitihomes": {
            description: ` "Affordable and well-designed homes in a vibrant community, perfect for growing families seeking value and convenience.",
            <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Aliyah TownHouse  | 50sqm<ul>
              <ul> ✅ Amenities</ul>
            `,
            location: " Panungyanan in General Trias , Cavite",
            image: "https://1.bp.blogspot.com/-lla44ZWAMSw/XG-zohqMh8I/AAAAAAAAD_w/OyFnoITRCFc4jh0baUZ22bvfarwsJtGPwCLcBGAs/s640/33612527_324444111421348_1620070928295657472_n.jpg"
        },
        "Axeia Cavite": {
            description: ` "Quality homes by Axeia, offering practical layouts and a comfortable living experience for first-time homebuyers.",
             <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Aliyah TownHouse  | 50sqm<ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Cavite",
            image: "https://th.bing.com/th/id/OIP.wssajhl419bgUYlJt2fntgHaFq?w=216&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Solar Resources": {
            description: `"A community focused on sustainable living, offering homes designed with energy efficiency and modern comforts in mind.",
           <ul class="checklist">
              <ul>✅Sold out! Inqire for Re-opens/ul>   
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Land area 66sqm Floor area 57-157 sqm<ul>
              <ul>🔥 Amenities</ul>
            `,
            location: "Brgy, San Agustin, Dasma. Cavite",
            image: "https://th.bing.com/th/id/OIP.D43_OwlFfngaARS_BnngLQAAAA?w=240&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Golden Horizon": {
            description:` "A sprawling community with diverse housing options, providing ample space and amenities for a complete family life.",
          <ul class="checklist">
              <ul>✅Sold out! Inqire for Re-opens/ul>   
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Land area 54sqm Floor area 105 sqm<ul>
              <ul>🔥 Amenities</ul>
            `,
            location: "Brgy. hugo, Perez Rd, Cavite",
            image: "https://static.wixstatic.com/media/7fd8f1_114ac7b548c64ceba268530aeb8f5350~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/..jpg"
        },
        "Terraces Imus (Condo)": {
            description: "Condominium units in Imus, offering a blend of urban convenience and suburban tranquility with modern amenities.",
            location: "Anabu Imus Cavite, Aguinaldo Highway",
            image: "https://th.bing.com/th/id/OIP.ozL2-I0ah3tkHTHTCCIk_gHaED?w=284&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "New Apec Cavite": {
            description: "Fresh and affordable housing solutions by Apec, designed for easy homeownership and comfortable community living.",
            location: "Brgy. San Agustin, Cavite",
            image: "https://tse1.mm.bing.net/th/id/OIP.EvmjFYpVNigF0ULG7-95rgHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Phirstpark Cavite": {
            description: ` "A master-planned community by Phirst, offering well-designed homes, open spaces, and accessible facilities for quality family life.",
        <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Amenities</ul>
              <ul> ✅ Bungalow | FA: 45sqm, LA: 83sqm</ul>
              <ul> ✅ Calista  | FA: 40sqm, LA: 50sqm</ul>
              <ul> ✅ Unna Single Attached | FA: 54sqm, LA: 88sqm</ul>
            `,
            location: "Brgy. Tanauan, Tanza, Cavite",
            image: "https://www.phirstparkhomes.com/wp-content/uploads/2021/05/Tanza-2.jpg"
        },
        // BATANGAS PROJECTS
        "Idesia Lipa": {
            description: `"Experience modern living in Lipa, Batangas, with Idesia's stylish homes and vibrant community atmosphere.",
 <ul class="checklist">
            <ul> 💥Reservation Fee:  30,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 3 Bedrooms</ul>
              <ul> ✨ 2 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥 Aria  |Lot Area: 60-90 sqm, Floor Area: 63 sqm/<ul>
              <ul>🔥 Talia |Lot Area: 80 sqm, Floor Area: 63 sqm/<ul>
              <ul>🔥 Gaia  |Lot Area: 100 sqm, Floor Area: 63 sqm/<ul>
              <ul> ✅ Amenities</ul>
              
            `,
            location: " JP Laurel Highway Brgy Inosluban Lipa City, Batangas",
            image: "https://tse2.mm.bing.net/th/id/OIP.rFbJ-XoOSN5QCywf1nmhWgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Nuvista Lipa": {
            description: ` "A well-developed community offering contemporary homes designed for comfort and practicality in Lipa.",
           <ul class="checklist">
            <ul> 💥Reservation Fee:  5,000 pesos</ul>
              <ul>🔥Sophia  Townhouse</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2  Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul> Yasmin-Townhouse</ul>
              <ul> Ayami-Single Attached</ul>
              <ul> Venice-Single Attached</ul>
              <ul> Marya Lofted</ul>
            `, 
            location: "Brgy. Antipolo Del Norte & Anilao, Lipa City, Batangas.Lipa, Batangas",
            image: "https://cdn.lionunion.com/spai2/q_lossy+ret_img+to_webp/https://www.lionunion.com/wp-content/uploads/2022/08/nuvista-homes-lipa-banner-1.jpg"
        },
        "Nuvista Homes Lipa Phase 2": {
            description: "The exciting second phase of Nuvista Homes, providing even more options for quality and affordable housing in Lipa.",
            location: "Brgy. Antipolo Del Norte, Lipa, Batangas",
            image: "https://properties.riseandshinerealty.com.ph/images/properties/1731290427-Screenshot%202024-11-11%20095842.png"
        },
        "Pueblo De Oro Courtyards Lipa": {
            description: ` "Homes with charming courtyards and open spaces, offering a unique living experience in Lipa.",
           <ul class="checklist">
            <ul> 𝐒𝐈𝐍𝐆𝐋𝐄 𝐃𝐄𝐓𝐀𝐂𝐇𝐄𝐃 𝐔𝐍𝐈𝐓𝐒✨🏠</ul>
            <ul> Minimum Lot Area:110 sqm   Floor Area: 108 sqm</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 3 Bedrooms</ul>
              <ul> ✨ 2 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Balintawak, Lipa City, Batangas",
            image: "https://pueblodeoro.com/wp-content/themes/pueblo-de-oro/img/lily%20iris/lily2.jpg"
        },
        "Pueblo De Oro Townscapes Malvar": {
            description: "Modern townhouses in a developing area of Malvar, designed for comfortable and convenient family living.",
            location: "Bulihan Malvar, Batangas",
            image: "https://th.bing.com/th/id/OIP.PzFpFtUfKoQDahvKLXIxugHaFj?w=215&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Lynville Estate Lipa": {
            description: ` "Spacious homes in a serene estate, offering a blend of modern design and peaceful suburban life in Lipa.",
           <ul class="checklist">
            <ul> 🏠 Zerina Premium Unit</ul>
            <ul> Minimum Lot Area: 80 sqm   Floor Area: 50.8 sqm</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Kayumanggi, Lipa, Batangas",
            image: "https://tse3.mm.bing.net/th/id/OIP.d12E-YyBHcsuMNZr2cbE2gHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Lynville Plains Lipa": {
            description:` "Well-built homes in a friendly community, providing an ideal setting for families to grow in Lipa.",
 <ul class="checklist">
            <ul> 💥Reservation Fee:  6,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 2 Bedrooms</ul>
              <ul> ✨ 1 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Malagonlong, Lipa City, Batangas",
            image: "https://tse3.mm.bing.net/th/id/OIP.rJ_JZFLYXWUzjQb1kJVt7gHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Eco Verde Lipa": {
            description: `"Environmentally conscious homes focusing on green living and sustainable design, nestled in Lipa's natural beauty.",
             <ul class="checklist">
            <ul> 💥Reservation Fee:  15,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 3 Bedrooms</ul>
              <ul> ✨ 2 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Pinagkawitan Lipa City, Batangas",
            image: "https://media.karousell.com/media/photos/products/2024/6/6/ecoverde_homes_two_storey_hous_1717640165_50ff94ea.jpg"
        },
        "Diamond Heights Lipa": {
            description: ` "Premium residences offering elegant designs and top-notch amenities, redefining luxury living in Lipa.",
            <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
              <ul> 🔥Model House:</ul>
              <ul> Sapphire</ul>
              <ul> Emerald</ul>
              <ul> Jade</ul>
            `,
            location: "𝖡𝗋𝗀𝗒. 𝖫𝖺𝗍𝖺𝗀 𝖫𝗂𝗉𝖺 𝖢𝗂𝗍𝗒 𝖡𝖺𝗍𝖺𝗀𝖺𝗌",
            image: "https://tse2.mm.bing.net/th/id/OIP.TqlZw-n5dTxH7R37xuJfkwHaDT?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Florence Homes by Next Asia Lipa": {
            description: `"Italian-inspired homes featuring classic architecture and modern comforts, bringing European charm to Lipa.",
          <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Plaridel, Lipa City, Batangas",
            image: "https://www.rappler.com/tachyon/2024/08/florencia-carousel.jpg"
        },
        "Next Asia Lipa": {
            description:` "Forward-thinking designs and innovative living spaces by Next Asia, providing contemporary homes in Lipa.",
           <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul>🔥Security Features:</ul>
              <ul> ✨ Gated community</ul>
              <ul> ✨ Security Guards</ul>
              <ul> ✨ Dedicated CCTV camera</ul>
              <ul> ✨ Street lights </ul>
              <ul>🔥Amenities</ul>
              <ul>✅Amina|Azul|Aliya|Ariela|Verdant|Ayla|Anya</ul>
            `,
            location: "Brgy. Latag, Lipa, Batangas",
            image: "https://th.bing.com/th/id/OIP.tHdN1fR5DenAodutnoBNYQHaFq?w=229&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Sunny Homes Padre Garcia": {
            description: `"Bright and welcoming homes in Padre Garcia, offering a cheerful and comfortable environment for families.",
          <ul class="checklist">
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ Bedrooms</ul>
              <ul> ✨ Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
                 <ul> ✨📏 Lot Area: 52 sqm</ul>
                  <ul> ✨🏠 Floor Area: 48 sqm</ul>
                   <ul>🔥🏦 Bank Financing🏠 Pag-IBIG Financing </ul> 
              <ul> ✅ Amenities</ul>
            `,
            location: "Padre Garcia, Batangas",
            image: "https://th.bing.com/th/id/OIP.J1BG6mjl4glkpi-_1hG-IwHaFj?w=243&h=183&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "PhirstEdition Sto Tomas": {
            description: "The first-rate community by Phirst in Sto. Tomas, offering well-designed homes and a vibrant neighborhood.",
            location: "Sto Tomas, Batangas",
            image: "https://tse2.mm.bing.net/th/id/OIP.yVC1qFXybLJtob4hrmUm5wHaGN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "The Park Lipa": {
            description: "Homes surrounded by lush parks and green spaces, promoting outdoor activities and a healthy lifestyle in Lipa.",
            location: "Brgy. Bolbok, Lipa City, Batangas",
            image: "https://th.bing.com/th/id/OIP.XHEcN1CaAVbbgcV21ap0uQHaDt?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Azalea Vista Lipa": {
            description: "Homes with beautiful vistas and a serene atmosphere, named after the lovely Azalea flower, in Lipa.",
            location: "Brgy. Pangao, Lipa City, Batangas",
            image: "https://th.bing.com/th/id/OIP.vg4rnQ2arIqXBDpSjvSApgHaFj?w=256&h=192&c=7&r=0&o=7&pid=1.7&rm=3"
        },
        "Burbank Lipa": {
            description: "A charming residential community inspired by classic American suburban designs, offering comfortable family homes in Lipa.",
            location: "Lipa, Batangas",
            image: "https://media.karousell.com/media/photos/products/2023/12/30/burbank_village_in_lipa_batang_1703920009_997fd22f_progressive"
        },
        "Niviare Lipa by Calmarland": {
            description: "High-quality homes by Calmarland, known for their durable construction and thoughtful designs in Lipa.",
            location: "Brgy. Antipolo, del Norte, Lipa, Batangas",
            image: "https://th.bing.com/th/id/OIP.bWXAgg48a_WHa9V9ye7BVQHaHa?w=162&h=186&c=7&r=0&o=5&pid=1.7"
        },
        "Valle Pio Sto. Tomas": {
            description: "Homes nestled in a tranquil valley, offering peaceful living with beautiful natural surroundings in Sto. Tomas.",
            location: "Sto. Tomas, Batangas",
            image: "https://tse3.mm.bing.net/th/id/OIP.9EX-CTSOSM7jDeMPFbwu_QHaHb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        "Hacienda Del Sol": {
            description: "A grand hacienda-style community offering spacious homes and a luxurious, resort-like living experience.",
            location: " Brgy. Pagaspas, Tanauan, Batangas",
            image: "https://static-ph.lamudi.com/static/media/bm9uZS9ub25l/2x2x2x380x244/b411d33b2325a7.jpg"
        },
        "Plaincrest Tanauan": {
            description: `"Modern and practical homes in Tanauan, designed for comfortable everyday living and easy access to city amenities.",
             <ul class="checklist">
            <ul> 💥Reservation Fee:  5,000 pesos</ul>
              <ul>🔥Home Features:</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨ 3 Bedrooms</ul>
              <ul> ✨ 2 Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> 🔥 Lot Area 40sqm.</ul>
               <ul>🔥 Floor Area 46.6sqm.</ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy. Pagaspas, Tanauan, Batangas",
            image: "https://www.lionunion.com/wp-content/uploads/2022/04/Plain-Crest-Subdivision-banner.jpg"
        },
        "Tanauan Parkplace Tanauan": {
            description:  `"A desirable address in Tanauan, offering quality homes within a vibrant community with parks and recreational areas.",
           <ul class="checklist">
            <ul> 💥Phase 3 || ADELPHA II - Single Attached</ul>
              <ul>🔥Typical Lot Area: 117 sq.m | Floor Area: 38 sq.m</ul>
              <ul> ✨ Spacious Living, Dining, & Kitchen Areas</ul>
              <ul> ✨  Bedrooms</ul>
              <ul> ✨  Toilets & Baths</ul>
              <ul> ✨ Service Area & Carport Amazing </ul>
              <ul> ✅ Amenities</ul>
            `,
            location: "Brgy, Hidalgo & Banjo East, Tanauan Batangas",
            image: "https://www.propertypinas.com/uploads/1/3/0/4/13042852/published/jasmine-sa_2.jpg"
        },
        "LeMoubreza South Sto. Tomas": {
            description: "Elegant homes offering a taste of sophisticated Southern living, with serene environments and thoughtful designs in Sto. Tomas.",
            location: "Brgy. San Vicente, Sto. Tomas, Batangas",
            image: "https://www.propertypinas.com/uploads/1/3/0/4/13042852/published/linnea-model_2.jpeg"
        }
        
    };

    

    // Event listener for all "View Details" buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectName = this.closest('.property-item').dataset.project; // Get project name from data attribute
            const details = projectDetails[projectName]; // Retrieve details from the data object

            if (details) {
                // Populate modal content
                modalProjectName.textContent = projectName;
                modalLocation.textContent = details.location;
                modalDescription.innerHTML = details.description || 'No description';
                modalImagePlaceholder.style.backgroundImage = `url('${details.image}')`;
                propertyModal.style.display = 'flex'; // Show the modal
            }
        });
    });

    

    // Close property modal when close button is clicked
    closeButton.addEventListener('click', () => {
        propertyModal.style.display = 'none'; // Hide the modal
    });

    // Close property modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target == propertyModal) {
            propertyModal.style.display = 'none';
        }
    });

    // "Inquire Now" button inside property modal
    inquireNowButton.addEventListener('click', () => {
        // Use custom message box instead of alert()
        showCustomMessageBox('Thank you for your interest in ' + modalProjectName.textContent + '! Please fill out the contact form below or connect with Yasmien directly via WhatsApp/Messenger.');
        propertyModal.style.display = 'none'; // Hide the property modal

        // Optional: Scroll to the contact section after inquiring
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });

    // --- Contact Form Submission Logic with Success Message ---
    const contactForm = document.querySelector('.contact-form');
    const contactFormContainer = document.querySelector('.contact-form-container'); // Parent to insert message

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
        // For this example, we'll just log it and show the success message.
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        console.log("Contact Form Submission:", { name, email, phone, message });

        // Show the success message
        displaySuccessMessage();

        contactForm.reset(); // Clear the form fields
    });

    /**
     * Displays a success message for the contact form.
     */
    function displaySuccessMessage() {
        // Check if a message already exists to prevent duplicates
        let successMessageDiv = document.getElementById('contactSuccessMessage');
        if (!successMessageDiv) {
            // This block should ideally not run if the HTML already includes the div
            successMessageDiv = document.createElement('div');
            successMessageDiv.id = 'contactSuccessMessage';
            successMessageDiv.classList.add('success-message');
            successMessageDiv.innerHTML = '<i class="fas fa-check-circle"></i> Thank you for your message! We\'ll contact you soon.';
            contactFormContainer.insertBefore(successMessageDiv, contactForm);
        }

        // Make sure it's visible and trigger animation
        successMessageDiv.style.display = 'block';
        successMessageDiv.style.opacity = '0'; // Reset opacity for animation
        void successMessageDiv.offsetWidth; // Trigger reflow to restart animation
        successMessageDiv.style.opacity = '1';

        // Optionally, hide the message after a few seconds
        setTimeout(() => {
            successMessageDiv.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                successMessageDiv.style.display = 'none'; // Hide after fade out
            }, 500); // Match fadeOut animation duration
        }, 5000); // Message visible for 5 seconds
    }
});
