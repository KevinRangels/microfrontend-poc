<script setup>
  import Popper from "vue3-popper"
</script>


<template>
    <div class="header d-flex">
    <svg
      class="logo"
      width="124"
      height="36"
      viewBox="0 0 124 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.6588 33.9872C47.7171 33.9872 45.9843 33.2703 44.4026 31.8686C42.8499 30.467 42.0719 28.4706 42.0719 25.9341C42.0719 23.3977 42.8467 21.4013 44.4026 19.9996C45.9843 18.598 47.7171 17.8811 49.6588 17.8811C50.4657 17.8811 51.1826 18.029 51.8384 18.299C53.1822 18.8648 53.6001 19.4017 53.928 19.9096H54.137V18.1801H58.8563V33.6818H55.8698C54.915 33.6818 54.137 32.907 54.137 31.9522H53.928C53.7802 32.2191 53.5391 32.4891 53.2722 32.7559C52.7032 33.2639 51.2405 33.9775 49.6588 33.9775V33.9872ZM50.4046 29.8465C52.4653 29.8465 54.227 28.3549 54.227 25.9406C54.227 23.5263 52.4653 22.0346 50.4046 22.0346C48.344 22.0346 46.6112 23.5263 46.6112 25.9406C46.6112 28.3549 48.2829 29.8465 50.4046 29.8465Z"
        fill="#27273F"
      />
      <path
        d="M66.2022 12.6088H66.6169V33.685H61.8976V16.9038C61.8976 14.5312 63.8265 12.6056 66.2022 12.6056V12.6088Z"
        fill="#27273F"
      />
      <path
        d="M76.4958 33.9872C74.5541 33.9872 72.8213 33.2703 71.2397 31.8686C69.6869 30.467 68.9089 28.4706 68.9089 25.9341C68.9089 23.3977 69.6837 21.4013 71.2397 19.9996C72.8213 18.598 74.5541 17.8811 76.4958 17.8811C77.3027 17.8811 78.0196 18.029 78.6755 18.299C80.0192 18.8648 80.4372 19.4017 80.7651 19.9096H80.974V18.1801H85.6933V33.6818H82.7068C81.752 33.6818 80.974 32.907 80.974 31.9522H80.7651C80.6172 32.2191 80.3761 32.4891 80.1093 32.7559C79.5435 33.2639 78.0775 33.9775 76.4958 33.9775V33.9872ZM77.2417 29.8465C79.3023 29.8465 81.064 28.3549 81.064 25.9406C81.064 23.5263 79.3023 22.0346 77.2417 22.0346C75.181 22.0346 73.4482 23.5263 73.4482 25.9406C73.4482 28.3549 75.1199 29.8465 77.2417 29.8465Z"
        fill="#27273F"
      />
      <path
        d="M98.2857 17.8875C99.8385 17.8875 101.182 18.4822 102.317 19.646C103.452 20.8097 104.018 22.5071 104.018 24.8057V33.6882H103.217C101.041 33.6882 99.2759 31.9233 99.2759 29.7533V25.1336C99.2759 22.9572 98.1121 22.0024 96.4694 22.0024C95.6046 22.0024 94.8877 22.3303 94.2897 22.9861C93.6918 23.642 93.425 24.2078 93.4539 24.6836V33.685H88.7378V18.1833H93.4539V20.9865C93.6629 20.3597 94.1997 19.6749 95.0677 18.958C95.9325 18.2411 97.0094 17.8843 98.2921 17.8843H98.2889L98.2857 17.8875Z"
        fill="#27273F"
      />
      <path
        d="M113.865 33.9872C111.923 33.9872 110.193 33.2703 108.608 31.8686C107.056 30.467 106.281 28.4706 106.281 25.9341C106.281 23.3977 107.059 21.4013 108.608 19.9996C110.19 18.598 111.923 17.8811 113.865 17.8811C114.671 17.8811 115.388 18.029 116.044 18.299C117.388 18.8648 117.806 19.4017 118.134 19.9096H118.343V18.1801H123.059V33.6818H120.072C119.118 33.6818 118.34 32.907 118.34 31.9522H118.131C117.983 32.2191 117.742 32.4891 117.475 32.7559C116.906 33.2639 115.443 33.9775 113.861 33.9775L113.865 33.9872ZM114.61 29.8465C116.671 29.8465 118.433 28.3549 118.433 25.9406C118.433 23.5263 116.671 22.0346 114.61 22.0346C112.55 22.0346 110.817 23.5263 110.817 25.9406C110.817 28.3549 112.489 29.8465 114.61 29.8465Z"
        fill="#27273F"
      />
      <path
        d="M38.7415 29.824C37.4202 29.824 37.2369 29.0749 37.2369 28.3516V22.1021H40.5771V18.1961H37.2498V13.6986H32.5916V18.1961H32.1222C28.0169 18.1736 28.3416 22.1021 28.3416 22.1021H32.4791V29.3128C32.4791 32.8877 34.2247 34 37.3559 34C38.7093 34 39.7927 33.791 40.606 33.341V29.4961C39.9149 29.705 39.2848 29.8272 38.7415 29.8272V29.824Z"
        fill="#27273F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.9717 32.7494H12.4027C11.8433 32.7494 11.2357 32.9005 11.2357 31.7368V30.8495C11.2357 30.7788 11.2936 30.7209 11.3643 30.7209H14.1516C14.2223 30.7209 14.2801 30.7788 14.2801 30.8495V31.7368C14.2801 32.9005 13.5311 32.7494 12.9717 32.7494ZM15.0067 29.6086H10.5156C10.2392 29.6086 10.0173 29.8336 10.0173 30.1069V31.7271C10.0173 34.1704 11.6215 33.8714 12.8046 33.8714H12.7145C13.9008 33.8714 15.5018 34.1704 15.5018 31.7271V30.1069C15.5018 29.8336 15.2799 29.6086 15.0099 29.6086H15.0067Z"
        fill="#27273F"
      />
      <path
        d="M21.7674 5.36906C17.8807 1.75885 13.1743 1.98067 12.676 2.01604C12.1745 1.98067 7.46801 1.76207 3.58133 5.37228C-0.340709 9.0082 -1.85809 15.9682 3.27914 20.7261C9.02397 26.0498 12.168 28.583 12.168 28.583C12.168 28.583 12.422 28.8563 12.676 28.8563C12.9267 28.8563 13.1839 28.583 13.1839 28.583C13.1839 28.583 16.328 26.0466 22.0728 20.7261C27.21 15.9682 25.6926 9.0082 21.7706 5.36906H21.7674ZM1.86464 13.5314C1.86464 7.03111 6.71575 4.94471 8.42923 4.06707C8.1174 4.43677 6.88935 5.8127 6.42642 6.68391C5.69023 8.06305 4.80938 10.3745 4.80938 13.5314C4.80938 18.7265 8.79572 23.2722 10.6056 25.3875C10.6892 25.4872 10.776 25.5837 10.8564 25.6801C8.48067 23.793 1.86785 19.1701 1.86785 13.5346L1.86464 13.5314ZM11.9623 26.0401C10.5285 23.9184 6.85077 18.9515 6.85077 13.2292C6.85077 5.17296 11.0654 3.80989 11.988 3.60093C11.7533 7.59048 11.6633 11.609 11.718 15.5535C11.763 18.9612 11.943 22.5457 12.2645 26.4999C12.1809 26.3745 12.078 26.2234 11.9591 26.0434L11.9623 26.0401ZM12.9878 26.4966C13.3093 22.5457 13.4893 18.958 13.5343 15.5503C13.589 11.609 13.499 7.58726 13.2643 3.59771C14.1901 3.80667 18.4015 5.17296 18.4015 13.226C18.4015 18.9483 14.7238 23.9152 13.2932 26.0369C13.171 26.217 13.0714 26.3681 12.9878 26.4934V26.4966ZM14.4023 25.6737C14.4827 25.5772 14.5695 25.4776 14.6531 25.3811C16.463 23.2658 20.4493 18.7201 20.4493 13.525C20.4493 10.3681 19.5717 8.05984 18.8323 6.67748C18.3661 5.80627 17.1413 4.43356 16.8295 4.06064C18.5397 4.93828 23.3909 7.02789 23.3909 13.5282C23.3909 19.1637 16.778 23.7866 14.4023 25.6737Z"
        fill="#27273F"
      />
    </svg>
    <div>
      <div class="d-flex gap">
        <Popper
          placement="bottom-end"
          offset-distance="3"
        >
          <div class="help-center tooltip border">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.32031 14.8073H5.82031V17.3073H3.32031V14.8073ZM5 0.666672C6.43229 0.718755 7.61719 1.18751 8.55469 2.07292C9.41406 2.90626 9.86979 3.94792 9.92188 5.19792C10 6.44792 9.60938 7.6198 8.75 8.71355C8.51562 9 8.09896 9.36459 7.5 9.8073C6.95312 10.25 6.58854 10.5755 6.40625 10.7839C6.14583 11.0964 5.97656 11.474 5.89844 11.9167C5.84635 12.1771 5.82031 12.5938 5.82031 13.1667H3.32031C3.32031 12.2552 3.34635 11.6172 3.39844 11.2526C3.47656 10.6276 3.64583 10.1328 3.90625 9.76823C4.0625 9.50782 4.29688 9.2474 4.60938 8.98698C4.79167 8.85678 5.0651 8.67448 5.42969 8.44011C5.82031 8.17969 6.09375 7.9974 6.25 7.89323C6.90104 7.26823 7.29167 6.60417 7.42188 5.90105C7.55208 5.17188 7.39583 4.54688 6.95312 4.02605C6.53646 3.50521 5.88542 3.21876 5 3.16667C4.29688 3.16667 3.69792 3.41407 3.20312 3.90886C2.73438 4.37761 2.5 4.96355 2.5 5.66667H0C0 4.75521 0.221354 3.92188 0.664062 3.16667C1.10677 2.38542 1.70573 1.77344 2.46094 1.33073C3.24219 0.888026 4.08854 0.666672 5 0.666672Z"
                fill="#0A0716"
              />
            </svg>
            <span class="tooltiptext">
              Ayuda y recursos
            </span>
          </div>
          <template #content>
            <div 
              class="help-center-container"
            >
              <slot name="help-links" />
              <!-- <template v-if="props.secondHelpLinks">
                <hr>
                <slot name="second-help-links" />
              </template> -->
            </div>
          </template>
        </Popper>

        <Popper
          placement="bottom-end"
          offset-distance="3"
        >
          <div class="world-active border">
            <div class="world-select">
              <slot name="world-selected" />
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.17188 0.148438L5 3.97656L8.82812 0.148438L10 1.32031L5 6.32031L0 1.32031L1.17188 0.148438Z"
                  fill="#8567FF"
                />
              </svg>
            </div>
          </div>
          <template #content>
            <div class="world-list">
              <router-link to="/remuneraciones"
                class="world-list-item"
                href="#"
              >
              <div
                class="world-item-content"
              >
                Remuneraciones
              </div>
              </router-link>
              <router-link to="/do"
                class="world-list-item"
                href="#"
              >
              <div
                class="world-item-content"
              >
                DO
              </div>
              </router-link>
            </div>
          </template>
        </Popper>

        <slot name="base-selector" />

        <Popper
          placement="bottom-end"
          offset-distance="3"
        >
          <div class="user border">
            <!-- <img
              v-if="!showInitials && props.img"
              class="avatar-img pointer"
              :src="props.img"
              alt="avatar"
              @error="errorImg"
            > -->
            <div
              class="avatar-initials avatar-initials-md pointer"
            >
              KR
            </div>
          </div>
          <template #content>
            <div class="user-menu">
              <div class="user-data">
                <!-- <img
                  v-if="!showInitials && props.img"
                  class="avatar-img"
                  :src="props.img"
                  alt="avatar"
                  @error="errorImg"
                > -->
                <div
                  class="avatar-initials avatar-initials-sm pointer"
                >
                  KR
                </div>
                <a
                  class="user-text"
                >
                  <p class="user-title">
                    Kevin Rangel
                  </p>
                  <p class="user-subtitle">
                    Frontend
                  </p>
                </a>
              </div>
              <div class="avatar-menu-slot">
                <slot name="avatar-menu" />
              </div>
            </div>
          </template>
        </Popper>
      </div>
    </div>
  </div>
  </template>

<style scoped>
  .pointer {
    cursor: pointer;
  }
  .d-flex {
    display: flex;
    align-items: center;
  }
  .gap {
    gap: 8px;
  }
  hr {
    width: 100%;
    border: 1px solid rgba(10, 7, 22, 0.16);
    cursor: default;
    height: 0px;
    border-width: thin 0 0 0;
    margin: 0px;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    font-family: "Inter", sans-serif;
    justify-content: space-between;
    background-color: #FDFDFF;
    border-bottom: 1px solid rgba(10,7,22,.16);
    z-index: 9999;
    padding: 12px 16px;
    box-sizing: border-box;
  }
  .help-center {
    width: 28px;
    height: 28px;
    cursor: pointer;
    border-radius: 28px;
    color: #8567FF;
    text-align: center;
    background: rgba(133, 103, 255, 0.08);
    border: 2px solid transparent;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip {
    position: relative;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 140px;
    background-color: #2D2D2D;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    position: absolute;
    z-index: 101;
    top: calc(100% + 10px);
    left: 50%;
    margin-left: -70px;
    border-radius: 3px;
  }

  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #2D2D2D transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }

  .help-center-container {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 8px;
    gap: 6px;
    z-index: 9999;
    box-shadow: 0px 8px 56px rgba(39, 39, 63, 0.16);
    width: 200px;
    box-sizing: border-box;
  }

  .world-active{
    width: 260px;
    height: 36px;
    background-color: rgba(133, 103, 255, 0.08);
    border-radius: 24px;
    color: #8567FF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    padding: 0 16px;
    box-sizing: border-box;
  }

  .world-select {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
  }
  .world-list {
    width: 315px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 8px;
    gap: 4px;
    z-index: 9999;
    box-shadow: 0px 8px 56px rgba(39, 39, 63, 0.16);
    box-sizing: border-box;
  }

  .user {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    box-sizing: border-box;
  }
  .avatar-img {
    height: 100%;
    width: auto;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .avatar-initials {
    background: #FF6636;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #FDFDFF;
  }
  .avatar-initials-md {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }
  .avatar-initials-sm {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }
  .user-menu {
    width: 280px;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 8px;
    z-index: 9999;
    box-shadow: 0px 8px 56px rgba(39, 39, 63, 0.16);
    box-sizing: border-box;
  }
  .user-menu .avatar-img {
    height: 44px;
    width: 44px;
    border-radius: 50%;
  }
  .user-data {
    display: flex;
    gap: 10px;
    padding: 8px 8px 0 8px;
    margin-bottom: 16px;
  }
  .user-text {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }
  .user-title {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #0A0716;
    margin: 0;
  }
  .user-subtitle {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #7c8db0;
    margin: 0;
  }
  .border:hover{
    outline: 3px solid rgba(133, 103, 255, 0.48);
  }
  
  .world-list-item {
    color: #0A0716;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0px 8px;
    min-height: 36px;
    border-radius: 4px;
    text-decoration: none;
    box-sizing: border-box;
  }
  .world-item-content {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    box-sizing: border-box;
  }
  .world-item-content.disabled {
    opacity: .3;
  }
  .world-list-item:hover {
    background-color: rgba(133, 103, 255, 0.08);
    border-radius: 4px;
  }
  .world-list-item .badge {
    background-color: #ADFFED;
    color: #0A110F;
    padding: 1.5px 4px;
    border-radius: 38px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
  }
</style>