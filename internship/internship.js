var internships = [
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/35be96426ec8eeb524ab288d9f7e665a8c6113a2.jpg',
        course: 'Jr Sales Engineer',
        companyName: 'Allwave AV',
        type: 'Full Time Internship',
        category: 'Business Development',
        city: 'mumbai',
        stipend: '8000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/9a1b5a51b4a3fea4078b0e13e877a8ec422fdd21.jpg',
        course: 'PHP Developer - Intern',
        companyName: 'Bitpastel Solution Pvt Ltd',
        type: 'Work From Home',
        category: 'Software Development',
        city: 'mumbai',
        stipend: '7500 - 10000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/companylogos/acc313217760c271982fd8292660d06162307a7c/88a004f3139e489ab07e9c6a0474a679d86b4e57com.png',
        course: 'Wordpress Web Developer',
        companyName: 'Allwave AV',
        type: 'Part Time Internship',
        category: 'Business Development',
        city: 'Bangalore',
        stipend: '8000 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/d2014eb04767ce811420b47d91c3c99219a774b4.jpg',
        course: 'Content Writer Intern',
        companyName: 'Leadstart Publishing',
        type: 'Full Time Internship',
        category: 'Content Writing',
        city: 'Chennai',
        stipend: 'None'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/f26feb9e33fcce49c4d5634126ef72232c8c18ed.jpg',
        course: 'Video Editor/Graphic Designer',
        companyName: 'UrbanGuru',
        type: 'Part Time Internship',
        category: 'Business Development',
        city: 'Hyderabad',
        stipend: '1500 per month'
        
    },
    {
        img: 'https://assets.interntheory.com/uploads/company/logos/a74d88544322279c33db28830bff100d0d6e12f6.jpg',
        course: 'Social Media & Content Creation Intern',
        companyName: 'Strategy Wanted',
        type: 'Work From Home',
        category: 'Business Development',
        city: 'Delhi',
        stipend: '8000 per month',
        
    },
    
];
var rightBox = document.getElementById('rightbox');
var i = 0;

if (localStorage.getItem('internships') == null) {
    (localStorage.setItem('internships', JSON.stringify(internships)));
}



function showInternships(e) {
    let block = document.createElement('div');
    block.setAttribute('class', 'r_blocks')

    block.innerHTML = null;
    
    
    let block_img = document.createElement('img');
    block_img.src = e.img;
    block.append(block_img);
    let block_texts = document.createElement('div');
    block_texts.setAttribute('class', 'block_texts');
    block.append(block_texts)
    let block_course = document.createElement('span');
    block_course.innerHTML = e.course;
    block_texts.append(block_course)
    let block_company = document.createElement('p');
    block_company.innerHTML = e.companyName;
    block_texts.append(block_company)
    let block_type = document.createElement('p');
    block_type.innerHTML = e.type;
    block_texts.append(block_type)
    let block_category = document.createElement('p');
    block_category.innerHTML = e.category;
    block_texts.append(block_category)
    let block_city = document.createElement('p');
    block_city.innerHTML = e.city;
    block_texts.append(block_city)
    let block_stipend = document.createElement('p');
    block_stipend.innerHTML =`Stipend:<a> ${e.stipend}</a>`;
    block_texts.append(block_stipend);
    let share = document.createElement('div');
    share.setAttribute('id','share_icon')
    share.innerHTML = "<button id = 'share'><i class ='material-icons' style ='font-size:28px'>share</i></button>";
    share.addEventListener('click', shareToggle);
    block_texts.append(share);
    let view = document.createElement('p');
    view.innerHTML = `<a href='Allwave AV.html' style='text-decoration:none' class = 'view'>VIEW AND APPLY<a>`;
    view.addEventListener('click', apply(e));
    block_texts.append(view);
    let timeLimit = document.createElement('p');
    timeLimit.innerHTML = '4 weeks left';
    timeLimit.setAttribute('class', 'duration');
    block.append(timeLimit);

    rightBox.append(block);

    function shareToggle() {
        i++;
        console.log(i);
    
        let toggleDiv = document.createElement('div');
        toggleDiv.setAttribute('class','toggle_div')
    let fb = document.createElement('a');
    fb.setAttribute('class', 'toggle_buttons');
    fb.href = 'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.interntheory.com%2F';
    fb.innerHTML = "<img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png' />"
    toggleDiv.append(fb);
    let twitter = document.createElement('a');
    twitter.href = 'https://twitter.com/intent/tweet?text=Apply%20for%20Develop%20Your%20Skillset&amp%3Burl=www.interntheory.com%2Finternship%2F%2Fcourses%3Futm_source%3Dinternshipslist&utm_medium=webpage&url=https%3A%2F%2Fwww.interntheory.com%2F';
    twitter.innerHTML = "<img src='https://image.flaticon.com/icons/png/512/124/124021.png' />"
    twitter.setAttribute('class', 'toggle_buttons');
    toggleDiv.append(twitter);
    let google = document.createElement('a');
    google.href = 'https://plus.google.com/up/?continue=https://plus.google.com/share?url%3Dwww.interntheory.com/internship//courses?utm_source%253Dinternshipslist%26utm_medium%3Dwebpage';
    google.innerHTML = "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWAnpTuOOQsWjMdX2TupggGxhoL3k3_ZvFu3oBk4jUll27lU-EPWp2650qUmpWNtJrC4&usqp=CAU' />"
    google.setAttribute('class', 'toggle_buttons');
    toggleDiv.append(google);
    let linkedin = document.createElement('a');
    linkedin.href = 'https://www.linkedin.com/sharing/share-offsite/?url=www.interntheory.com/internship//courses?utm_source=internshipslist&utm_medium=webpage';
    linkedin.innerHTML = "<img src='https://cdn.iconscout.com/icon/free/png-256/linkedin-160-461814.png' />"
    linkedin.setAttribute('class', 'toggle_buttons');
    toggleDiv.append(linkedin);
    let whatsapp = document.createElement('a');
    whatsapp.href = 'https://api.whatsapp.com/send?text=Hey%2C%0D%0AI%20came%20across%20this%20awesome%20opportunity%20that%20might%20interest%20you%21%20Check%20it%20out%20here%3A%20www.interntheory.com/internship//courses?utm_source=internshipslist&utm_medium=webpage';
    whatsapp.innerHTML = "<img src = 'https://image.flaticon.com/icons/png/512/124/124034.png' />"
    whatsapp.setAttribute('class', 'toggle_buttons');
    toggleDiv.append(whatsapp);
        if (i % 2 == 1) {
            toggleDiv.style.visibility = 'visible';
            console.log('*')
        } else {
            toggleDiv.style.visibility = 'hidden';
            console.log('/')
        }
    

   
    
    }
    

}

var content = (JSON.parse(localStorage.getItem('internships')));
var n = content.length;

for (let i = 0; i < n; i++){
    showInternships(content[i]);
}

function apply(e) {
  
}



function search() {

    var form = document.getElementById('myForm');
    var city = document.getElementById('myCity').value;
    var type = document.getElementById('myType').value;
    var preferences = document.getElementById('myPreferences').value;
    
        
    function filter() {
        let filterCity = content.filter(function (el) {
            return el.city == city;
        });

        let filterType = content.filter(function (el) {
            return el.type == type;
        });

        let filterPreferences = content.filter(function (el) {
            return el.category == preferences;
        })
        
        // window.localStorage.removeItem("filterPreferences")
        // window.localStorage.removeItem("filterCity")
        // window.localStorage.removeItem("filterType")
                    

        // (localStorage.setItem('filterPreferences', JSON.stringify(filterPreferences)));
        // (localStorage.setItem('filterCity', JSON.stringify(filterCity)));
        // (localStorage.setItem('filterType', JSON.stringify(filterType)));
        
        
    
    }
    filter();
    showInternships(JSON.parse(localStorage.getItem('filterPreferences')))
    
}
    

