// ছোট JS: হ্যামবাগার মেনু এবং কন্টাক্ট ফর্ম সাবমিশন হ্যান্ডল করা হয়েছে

document.addEventListener('DOMContentLoaded', function () {
  const hambBtn = document.getElementById('hambBtn');
  const navList = document.getElementById('navList');

  // হ্যামবাগার টগল (মোবাইল)
  hambBtn.addEventListener('click', function () {
    if (!navList) return;
    navList.classList.toggle('open');
    if (navList.classList.contains('open')) {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'column';
      navList.style.position = 'absolute';
      navList.style.right = '16px';
      navList.style.top = '64px';
      navList.style.background = 'rgba(11,18,32,0.95)';
      navList.style.padding = '10px';
      navList.style.borderRadius = '8px';
    } else {
      navList.style.display = '';
      navList.style.position = '';
      navList.style.background = '';
      navList.style.padding = '';
      navList.style.borderRadius = '';
    }
  });

  // ডেমো বাটন — নমুনা ইন্টারঅ্যাকশন
  const demoBtn = document.getElementById('demoBtn');
  if (demoBtn) {
    demoBtn.addEventListener('click', function () {
      alert('ডেমো দেখানো হবে — (এইটি এখন এস্ট্যাটিক প্রিভিউ)।');
    });
  }

  // কন্টাক্ট ফর্ম সাবমিশন — (সার্ভারে পাঠাচ্ছে না), শুধু ভ্যালিডেশন + সিমুলেটেড সাবমিশন
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('দয়া করে সব ঘর পূরণ করো।');
        return;
      }

      // এখানে তুমি AJAX/Fetch ব্যবহার করে সার্ভারেও পাঠাতে পারো।
      alert('ধন্যবাদ, তোমার মেসেজ পাওয়া গেছে — আমরা শীঘ্রই যোগাযোগ করবো।');
      contactForm.reset();
    });
  }
});