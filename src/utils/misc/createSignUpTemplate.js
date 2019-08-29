export const createSignUpTemplate = config => ({
  subject: `${config.appName} --- ${config.signUpSubject}`,
  message: `
  <html>
    <head>
      <style>
      body {
        font-size: 15px;
        color: #555555;
      }
        .ui.facebook.button {
          cursor: pointer;
          display: inline-block;
          min-height: 1em;
          outline: 0;
          border: none;
          vertical-align: baseline;
          background: ${config.mainColor} none;
          color: rgba(0, 0, 0, .6);
          font-family: Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
          margin: 0 .25em 0 0;
          padding: .78571429em 1.5em .78571429em;
          text-transform: none;
          text-shadow: none;
          font-weight: 700;
          line-height: 1em;
          font-style: normal;
          text-align: center;
          text-decoration: none;
          border-radius: .28571429rem;
          box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, .15) inset;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
          transition: opacity .1s ease, background-color .1s ease, color .1s ease, box-shadow .1s ease, background .1s ease;
          will-change: '';
          -webkit-tap-highlight-color: transparent;
          background-color: ${config.mainColor};
          color: #fff;
          text-shadow: none;
          background-image: none;
          box-shadow: 0 0 0 0 rgba(34, 36, 38, .15);
          font-size: 14px;
        }
        .header_flex {
          display: flex;
          justify-content: left;
          align-items: center;
          max-width: 100%;
          min-width: 100%;
        }
        .center2center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .title {
          color: ${config.mainColor};
          font-weight: 'bold';
          font-size: 20px;
        }
        .logo {
          width: 50px;
          height: 50px;
          min-height: 50px;
          min-width: 50px;
          padding-right: 10px;
        }
        .hr_border {
          border:none;
          border-top: solid 1px #F1F1F1;
          height:1px;
          color:#FFFFFF;
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .mail_body {
        }
        .verify {
          padding-bottom: 20px;
        }
        .verify_code {
          background-color: #F1F1F1;
          padding: 10px;
          border: solid 1px #DDDDDD;
          font-size: 12px;
        }
        .names {
          margin-bottom: 12px;
        }
        .app_description {
          margin-top: 40px;
          font-size: 14px;
          color: ${config.mainColor};
          opacity: .6;
        }
        .footer {
          color:#3B475E;
          font-size: 10px;
        }
        .footer a {
          text-decoration: none;
        }
        .footer a:hover {
          color: ${config.mainColor};
          transition-duration: .3s;
        }
        @media (max-width: 600px) {
          .ui.facebook.button {
            width: 100% !important;
            box-sizing: border-box;
          }
          .verify {
            width: 100% !important;
          }
         .logo {
            padding-left: 20px;
          }
        }
      </style>
    </head>
    <body>
      <div
        class="header_flex"
      >
        <div
          class="center2center"
        >
          <img src="${config.logo}" class="logo" />
          <span
          class="title"
          >
           アカウントの認証を完了してください
          </span>
        </div>
      </div>
      <hr
        class="hr_border"
      />
      <div
        class="mail_body"
      >
        <div style="margin-bottom: 25px">最近作成した${config.appName}アカウントの登録を完了するにはアカウントの認証を行ってください。</div>
        <div class="verify"> <code class="verify_code"> %{CODE}% </code> </div>
        <div style="margin-top: 12px; margin-bottom: 25px;box-sizing: border-box;">
          <![if !mso]>
          <a href="%{LINK}%" class="ui facebook button">アカウントを認証</a>
          <![endif]>
          <!--[if mso]>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="%{LINK}%" style="mso-width-percent:980;height:80px;" arcsize="9%" fillcolor="${config.mainColor}" stroke="f">
            <v:textbox style="mso-fit=-shape-to-text:t" inset="0px,11px,0px,11px">
              <center style="font-size:18px;line-height:22px;color:#FFFFFF;
                font-family:Lato, 'Helvetica Neue', Arial, Helvetica, sans-serif;
                font-weight:bold;mso-line-height-rule:exactly;mso-text-raise:0px"
              >
                アカウントを認証
              </center>
            </v:textbox>
          </v:roundrect>
          <![endif]-->
        </div>
      </div>
      <hr
        class="hr_border"
      />
      <div
        class="footer"
      >
      このメッセージは %{EMAIL}% に送信されたものです。
      このメールにお心当たりがない場合は、お手数ですが本メールを破棄くださいますよう、お願いいたします。
      </div>
    </body>
  </html>
  `,
});
