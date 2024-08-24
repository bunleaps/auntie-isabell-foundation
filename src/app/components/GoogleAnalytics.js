import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        async
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-651GRSNNFW"
      ></Script>
      <Script id="" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-651GRSNNFW');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
