// ErrorPage.js
import React from 'react';
import './Style.css';

const ErrorPage = () => {
  return (
    <div className="container">
    <div className="screen-container">
      <div className="face-container">
        <div className="face">
          <div className="face-eye-container">
            <div className="face-eye" />
          </div>
          <div className="mouth" />
        </div>
      </div>
      <div className="window-container">
        <div className="orange-window-container">
          <div className="top-orange-window">
            <div className="top-orange-circle">
              <div className="orange-circle" />
            </div>
          </div>
          <div className="orange-window">
            <a
              href="https://www.instagram.com/gevstack/"
              className="error"
              target="blank"
            >
              ERROR
            </a>
          </div>
        </div>
        <div className="yellow-window-container">
          <div className="top-yellow-window">
            <div className="top-yellow-circle">
              <div className="yellow-circle" />
            </div>
          </div>
          <div className="yellow-window" />
        </div>
      </div>
      <div className="warning-container">
        <div className="top-warning" />
        <div className="warning-banner">
          <p className="warning">WARNING</p>
        </div>
      </div>
      <div className="esc-container">
        <div className="esc">
          <p className="escape">ESC</p>
        </div>
      </div>
      <div className="little-window-container">
        <div className="top-little-window">
          <div className="top-little-circle" />
        </div>
        <div className="little-window">
          <div className="cross-container">
            <div className="cross" />
            <div className="cross" />
          </div>
        </div>
      </div>
      <div className="password-container">
        <svg
          className="asterisk"
          width={14}
          height={13}
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0H6V4.08594L3.11084 1.19678L1.69678 2.61096L4.58594 5.5H0.5V7.5H4.58594L1.69678 10.3892L3.11084 11.8033L6 8.91418V13H8V8.91418L10.8892 11.8033L12.3032 10.3892L9.41406 7.5H13.5V5.5H9.41406L12.3032 2.61096L10.8892 1.19678L8 4.08594V0Z"
            fill="#040404"
          />
        </svg>
        <div className="rectangle" />
        <svg
          className="lock"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM9.92798 4.57763C11.2784 4.58407 12.5128 5.44523 13.0371 6.64673C13.2165 7.06522 13.3118 7.49512 13.3118 7.96143V9.15042H14.9499V15.4224H5.05005V9.15038H6.5564C6.55633 9.14586 6.55625 9.14133 6.55618 9.1368C6.54257 8.29994 6.52705 7.34543 6.82007 6.6467C7.3929 5.38155 8.57753 4.5712 9.92798 4.57763ZM9.85473 6.5747C9.10672 6.59043 8.6134 7.15925 8.54123 7.9614V9.15038H11.3269V7.94922C11.2925 7.18853 10.7168 6.59565 9.92795 6.5747C9.90355 6.57412 9.87913 6.57412 9.85473 6.5747Z"
            fill="black"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.92798 4.57763C11.2784 4.58407 12.5128 5.44523 13.0371 6.64673C13.2165 7.06522 13.3118 7.49512 13.3118 7.96143V9.15042H14.9499V15.4224H5.05005V9.15038H6.5564L6.55618 9.1368C6.54257 8.29994 6.52705 7.34543 6.82007 6.6467C7.3929 5.38155 8.57753 4.5712 9.92798 4.57763ZM8.54123 7.9614C8.6134 7.15925 9.10672 6.59043 9.85473 6.5747C9.87913 6.57412 9.90355 6.57412 9.92795 6.5747C10.7168 6.59565 11.2925 7.18853 11.3269 7.94922V9.15038H8.54123V7.9614ZM9.5 13.5V11.5H10.5V13.5H9.5Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="signal-form">
        <p className="signal">!</p>
      </div>
    </div>
  </div>
    );
};

export default ErrorPage;
