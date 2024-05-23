import React, { useEffect } from "react";
import styles from "./style.module.css";

const Products = () => {
  // useEffect(() => {
  //   const scrollImage = document.querySelector(`.${styles.scrollImage}`);
  //   const secondSection = document.querySelector(`.${styles.secondSection}`);
  //   const thirdSection = document.querySelector(`.${styles.thirdSection}`);

  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const secondSectionTop = secondSection.offsetTop;
  //     const secondSectionHeight = secondSection.offsetHeight;
  //     const imageHeight = scrollImage.offsetHeight;

  //     if (scrollPosition >= secondSectionTop) {
  //       const distanceScrolled = scrollPosition - secondSectionTop;
  //       const maxDistance = secondSectionHeight - imageHeight;
  //       const scrollPercentage = distanceScrolled / maxDistance;
  //       const translateY = -scrollPercentage * 100;
  //       scrollImage.style.transform = `translateY(${translateY}%)`;
  //     }

  //     if (scrollPosition >= thirdSection.offsetTop) {
  //       thirdSection.style.display = "block"; // Show the third section
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // Cleanup event listener
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <div class="section">
        <div class="front-full front-full-story featured1">
          <div class="front-shade"></div>
          <img
            width="3346"
            height="1878"
            alt=""
            decoding="async"
            data-srcset="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png 3346w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-300x168.png 300w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1024x575.png 1024w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-768x431.png 768w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1536x862.png 1536w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-2048x1149.png 2048w"
            data-src="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png"
            data-sizes="(min-width: 960px) 75vw, 100vw"
            class="attachment-post-thumbnail size-post-thumbnail wp-post-image lazyloaded"
            src="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png"
            sizes="(min-width: 960px) 75vw, 100vw"
            srcset="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png 3346w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-300x168.png 300w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1024x575.png 1024w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-768x431.png 768w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1536x862.png 1536w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-2048x1149.png 2048w"
          />
          <noscript>
            <img
              width="3346"
              height="1878"
              src="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png"
              class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
              alt=""
              decoding="async"
              srcset="https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1.png 3346w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-300x168.png 300w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1024x575.png 1024w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-768x431.png 768w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-1536x862.png 1536w, https://newestamericans.com/wp-content/uploads/2023/03/Refugee-Scholar_02_overbright_NAbg-1-2048x1149.png 2048w"
              sizes="(min-width: 960px) 75vw, 100vw"
            />
          </noscript>{" "}
          <div class="front-full-inner">
            <div class="font-full-inner-content front-story">
              <h3>Refugee Scholar</h3>
              <div class="front-excerpt">
                <p>A third-generation refugee defies the odds</p>
              </div>
            </div>
            {/* <img src="logo-2.png" alt="not found" style={{width:"3rem" , height:"2rem"}}/> */}
          </div>
        </div>
    </div>
  );
};

export default Products;
