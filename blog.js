let artikel = []

function addBlog(done){
    done.preventDefault();

    let title = document.getElementById('input-blog-title').value;
    let content = document.getElementById('input-blog-content').value;
    let imagi = document.getElementById('input-blog-image').files;

    imagi = URL.createObjectURL(imagi[0]);
    console.log(imagi);

    let blog={
        title: title,
        content: content,
        image: imagi,
        author: `Is`,
        waktuPos: new Date()
    }
    
    artikel.push(blog);
    // console.log(artikel);


    for (let i = 0; i <= artikel.length; i++) {
        console.log(artikel[i]);
    }

    manipulasi()       
}

function blog1(){
  return `
  <div id="contents" class="blog-list">
    <!-- dynamic content would be here -->
    <div class="blog-list-item">
      <div class="blog-image">
        <img src="assets/blog-img.png" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
          >
        </h1>
        <div class="detail-blog-content">
          12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
        </div>
        <p>
          Ketimpangan sumber daya manusia (SDM) di sektor digital masih
          menjadi isu yang belum terpecahkan. Berdasarkan penelitian
          ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
          meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Quam, molestiae
          numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
          eligendi debitis?
        </p>
      </div>
    </div>
  </div>`
}

function manipulasi() {
    let manipulasidata = document.getElementById('contents')
    
    manipulasidata.innerHTML = blog1()

    for (let i = 0; i <= artikel.length; i++) {
        manipulasidata.innerHTML +=  
        `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${artikel[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">
            ${artikel[i].title}
            </a
            >
          </h1>
          <div class="detail-blog-content">
            ${getRealTime(artikel[i].waktuPos)} | ${artikel[i].author}
          </div>
          <p>
          ${artikel[i].content}
          </p>
        </div>
        <div style="text-align: center; margin-top: auto">
          <span style="font-size: 10px; opacity:0.5">
          ${jarakWaktu(artikel[i].waktuPos)}
          </span>
        </div>
        `;
        
    }
}

// let time = new Date();

// console.log(time);

// console.log(time.getDate());
// console.log(time.getMonth());
let bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "December",]
let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu" ]

function getRealTime(time) {
  let hariIndex = time.getDay();
  let tanggal = time.getDate();
  let tahun = time.getFullYear();
  let bulanIndex = time.getMonth();
  let jam = time.getHours();
  let menit = time.getMinutes();
  let detik = time.getSeconds();

  let waktuPenuh = `${hari[hariIndex]}, ${tanggal} ${bulan[bulanIndex]} ${tahun}, ${jam}:${menit}:${detik} WIB`
  
  return waktuPenuh

}

function jarakWaktu(){
  let timepost = new Date('5 Jan 2022 11:25 ');
  let timenow = new Date();

  let distance = timenow-timepost;

  let milisecond = 1000 //perdetik 1000 ms
  let second = 3600 // perjam 3600 detik
  let hour = 23 // sehari 23 jam

  let distanceDay= Math.floor(distance / (milisecond*second*hour));
  let distanceSeconds = Math.floor(distance / milisecond)
  let distanceMinute = Math.floor(distance / (1000*60));
  let distanceHour = Math.floor(distance / (1000*60*60));


  // console.log(`${distanceDay} days ago`)

  if (distanceDay>=1 ){
    return (`${distanceDay} day ago`)
  }else{
    if (distanceHour>=1) {
      return(`${distanceHour} hours ago`)
    }else{
      if(distanceMinute>=1){
        return(`${distanceMinute} Minutes ago`)
      }else{
        return(`${distanceSeconds} Seconds ago`) 
      }
    }
  }
}

setInterval(() =>{
  manipulasi()
}, 1000)