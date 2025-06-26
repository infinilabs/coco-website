"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const INPUTTEXTS = [
  "Find that 2025 client proposal",
  "Search My Team's Knowledgebase",
  "Search My Local Files",
  "What's our Kubernetes upgrade policy?",
  "Search Local Applications",
  "Search My Family Photos",
  "Embed knowledge search into our support portal",
  "Search My Local Images",
  "Summarize last quarter's sales performance",
  "Search My Local Videos",
  "Launch my development environment",
  "Search Company Shared Documents",
  "Where can I find our remote work policy?",
  "Search AI Commands",
  "Search AI Assistants",
  "Search My Company's News",
  "Search My Team's Blogs",
  "Search for issues no matter where they are",
];

export default function Searchbox() {
  const { theme } = useTheme();

  const typeRef = useRef(true);

  const svgContent = `<svg width="100%" height="200px" viewBox="0 0 800 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="translate(30, 20)">
        <title>Coco AI</title>
        <defs>
            <linearGradient x1="11.317145%" y1="49.5605469%" x2="97.1736012%" y2="50.3073602%" id="linearGradient-1">
                <stop stop-color="#5E85FF" offset="0%"></stop>
                <stop stop-color="#EBC8FE" offset="39.100743%"></stop>
                <stop stop-color="#5274FF" offset="75.8142788%"></stop>
                <stop stop-color="#49FFF3" offset="100%"></stop>
            </linearGradient>
            <filter x="-7.8%" y="-83.3%" width="115.6%" height="266.7%" filterUnits="objectBoundingBox" id="filter-2">
                <feGaussianBlur stdDeviation="15" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <filter x="-2.2%" y="-23.3%" width="104.4%" height="146.7%" filterUnits="objectBoundingBox" id="filter-3">
                <feGaussianBlur stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
            </filter>
            <linearGradient x1="15.836133%" y1="49.5605469%" x2="97.1736012%" y2="50.3073602%" id="linearGradient-4">
                <stop stop-color="#5E85FF" offset="0%"></stop>
                <stop stop-color="#49FFF3" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="15.836133%" y1="30.0554017%" x2="97.1736012%" y2="63.9495545%" id="linearGradient-5">
                <stop stop-color="#49FFF3" offset="0%"></stop>
                <stop stop-color="#5E85FF" offset="100%"></stop>
            </linearGradient>
            <rect id="path-6" x="0" y="0" width="24" height="24"></rect>
            <path d="M7.41753949,2.73147335 L7.49613377,3.46088195 L7.89150331,2.94584027 C8.29590953,2.41820736 9.04758014,2.3279563 9.57040661,2.74425889 C10.0932331,3.16056148 10.1892317,3.9257724 9.78482543,4.45340531 L9.28813377,5.09988195 L10.1862891,5.00873648 C10.8433032,4.94167488 11.4345131,5.4294279 11.5067934,6.09816333 C11.5790736,6.76689877 11.1050533,7.36338011 10.4480392,7.43044171 L9.61413377,7.51488195 L10.2470296,8.01864251 C10.7698561,8.4349451 10.8658546,9.20015602 10.4614484,9.72778893 C10.0570422,10.2554218 9.30537158,10.3456729 8.78254511,9.9293703 L8.14013377,9.41788195 L8.22736066,10.2239185 C8.29964095,10.8926539 7.82562057,11.4891352 7.16860652,11.5561968 C6.51159247,11.6232584 5.92038259,11.1355054 5.8481023,10.46677 L5.76413377,9.69788195 L5.25389845,10.3649518 C4.84949222,10.8925847 4.09782161,10.9828358 3.57499515,10.5665332 C3.05216868,10.1502306 2.9561701,9.3850197 3.36057633,8.85738679 L3.94513377,8.09288195 L3.08691929,8.18179314 C2.42990524,8.24885473 1.83869536,7.76110172 1.76641507,7.09236629 C1.69413478,6.42363085 2.16815515,5.82714951 2.8251692,5.76008791 L3.46413377,5.69488195 L2.92484952,5.26515759 C2.40202305,4.848855 2.30602448,4.08364408 2.7104307,3.55601117 C3.11483692,3.02837826 3.86650753,2.9381272 4.389334,3.35442979 L5.14413377,3.95488195 L5.03828114,2.97432487 C4.96600085,2.30558944 5.44002122,1.7091081 6.09703527,1.6420465 C6.75404933,1.5749849 7.3452592,2.06273792 7.41753949,2.73147335 Z" id="path-8"></path>
        </defs>
        <g id="官网2-y" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="coco-AI-3" transform="translate(-590, -341)">
                <g id="编组-5" transform="translate(640, 391)">
                    <rect id="矩形" stroke="url(#linearGradient-1)" stroke-width="10" filter="url(#filter-2)" x="0" y="0" width="640" height="60" rx="30"></rect>
                    <rect id="矩形" stroke="url(#linearGradient-1)" stroke-width="4" filter="url(#filter-3)" x="0" y="0" width="640" height="60" rx="30"></rect>
                    <rect id="矩形" stroke="url(#linearGradient-4)" stroke-width="2" fill=${
                      theme === "dark" ? "#04071B" : "#EBF6FF"
                    } x="1" y="1" width="638" height="58" rx="29"></rect>
                    <rect id="矩形备份-2" stroke="url(#linearGradient-5)" stroke-width="0.904761905" x="582.452381" y="18.452381" width="37.0952381" height="23.0952381" rx="7.23809524"></rect>
                    <g id="编组-5备份-2" transform="translate(19, 19)">
                        <mask id="mask-7" fill="white">
                            <use xlink:href="#path-6"></use>
                        </mask>
                        <g id="矩形"></g>
                        <g id="编组-3备份-11" mask="url(#mask-7)">
                            <g transform="translate(-1.65, -1.5)">
                                <path d="M25.597563,3.09685112 C25.6755881,3.6532308 25.2972354,4.17178225 24.7524886,4.25506821 L20.160031,4.95575613 L19.4534978,6.28532461 C19.9290295,6.4576 20.4553117,6.55492426 21.0366911,6.57684038 L21.0511334,6.5761666 C21.4446376,6.59469279 21.8185863,6.84973301 21.9521434,7.28154431 C22.3585588,8.59554952 23.0988232,9.89606684 24.1817796,11.1834072 C24.3110794,11.3371095 24.3921721,11.5271499 24.4146178,11.7290625 L24.5256182,12.7189035 C24.8237074,13.951259 24.7867916,15.3688762 24.3497591,16.9999037 C22.7331289,23.0332497 16.528171,26.612787 10.4905977,24.9950241 C4.54486573,23.4018701 0.978743058,17.36245 2.41559766,11.4168979 C2.76678088,12.1312504 3.38212001,12.7238814 4.18926582,13.0364209 L4.1514766,13.0202369 C3.80818784,16.0654791 5.01381259,19.0350475 7.24372474,21.0051477 C7.10251512,20.4978737 7.00829841,20.1038795 6.96040006,19.815015 C6.8904878,19.3933892 6.85477788,18.8778594 6.8500984,18.261571 C6.84583717,17.7003679 7.28950111,17.2351963 7.84104953,17.2225811 C8.39259796,17.2099659 8.8431707,17.6546843 8.84743192,18.2158874 C8.85020518,18.5811254 8.86530224,18.894494 8.89160413,19.1535752 C9.16508602,20.8858806 9.79882129,21.7712445 10.7923387,21.8087836 L10.9078935,21.80873 C11.8233715,21.7909073 12.8508745,20.9238769 13.9904023,19.207639 C14.3469392,18.6097713 14.6300984,17.9391331 14.8399879,17.1940919 C14.9823685,16.6886858 15.4729705,16.3803071 15.9676359,16.4654492 L16.0735725,16.4897889 C16.6023118,16.6423196 16.907273,17.2049479 16.7547223,17.7464544 C16.4395366,18.865264 15.9814806,19.8674898 15.3797666,20.7485193 C14.675797,21.7792713 13.8792218,22.6438867 12.9904992,23.3382967 C17.2838675,23.5504659 21.2778259,20.7682898 22.4257029,16.4843544 C22.5373138,16.0678171 22.6169363,15.673181 22.6658596,15.2988133 L22.6821188,15.1394303 L22.5700444,15.1760941 C21.6212922,15.4568069 20.5782454,15.473747 19.50012,15.1848641 C18.6007411,14.9438763 17.7747294,14.5296284 17.0667253,13.9758746 L16.853284,13.7983437 L16.6878226,13.8206496 C15.7662769,13.9165408 14.8089449,13.8638034 13.8602184,13.6608192 L13.3867777,13.546799 C12.3330645,13.2644574 11.3556115,12.8099057 10.5059074,12.2160231 C10.8613292,11.8787022 11.1248127,11.4676512 11.2864534,11.0192231 L11.3017466,10.9688258 L11.399754,10.9346149 C11.5684275,10.868162 11.7310957,10.7876397 11.8858508,10.6938831 C12.4823925,11.0728821 13.1659266,11.3775599 13.9142933,11.5780842 C15.1870609,11.9191212 16.4480563,11.905495 17.5318425,11.6030138 C18.1286063,12.3532045 18.9912293,12.9384451 20.0276355,13.2161493 C20.9881106,13.4735078 21.8440137,13.3699743 22.5616047,13.013515 C22.5244766,12.7714394 22.4667667,12.5340159 22.3892261,12.3027702 L22.3037072,12.0702045 C21.59895,11.1727394 21.0294426,10.2567642 20.5970951,9.3223462 L20.5214649,9.14954033 L20.3441783,9.23590126 C19.5034276,9.60719684 18.5871912,9.68408444 17.6232244,9.46402749 L17.3255387,9.38591904 L17.1961724,9.42830959 C15.857266,9.81035674 14.3473523,9.46684507 13.3435058,8.57714759 C13.4836162,7.81620366 13.3326415,7.04366163 12.9495626,6.38797251 L12.9736298,6.34204199 C13.1839069,5.8758432 13.2795783,5.35946673 13.2445279,4.83772722 C13.369082,4.8060715 13.4920078,4.7639578 13.6115299,4.71254388 C13.9414867,4.57060893 14.3194013,4.6195999 14.6020855,4.84095456 C15.5040879,5.54726367 16.4146832,5.74395622 17.4240938,5.46423713 C17.4975307,5.44388693 17.5721548,5.43236994 17.6465822,5.42940588 L18.648362,3.54390808 C18.7988026,3.26061587 19.070789,3.06571076 19.3820959,3.01811526 L24.4699347,2.24023915 C25.0146815,2.1569532 25.5195379,2.54047144 25.597563,3.09685112 Z" id="形状结合" stroke="none" fill=${
                                  theme === "dark" ? "#FFFFFF" : "#828282"
                                } fill-rule="nonzero"></path>
                                <mask id="mask-9" fill="white">
                                    <use xlink:href="#path-8"></use>
                                </mask>
                                <use id="形状结合" stroke="none" fill=${
                                  theme === "dark" ? "#FFFFFF" : "#828282"
                                } fill-rule="nonzero" transform="translate(6.6366, 6.5991) rotate(-243) translate(-6.6366, -6.5991)" xlink:href="#path-8"></use>
                            </g>
                        </g>
                    </g>
                    <g id="Tab" transform="translate(588, 25)" fill="#5E86FF" fill-rule="nonzero">
                        <polygon id="路径" points="0 1.71829105 2.7345815 1.71829105 2.7345815 10.8678238 4.03744493 10.8678238 4.03744493 1.71829105 6.75770925 1.71829105 6.75770925 0.631508678 0 0.631508678"></polygon>
                        <path d="M7.87444934,6.81441923 C7.87444934,9.31108144 9.49229075,11 11.5825991,11 C13.0286344,11 14.0451542,10.2363151 14.5176211,9.36982644 L14.5176211,10.8678238 L15.8348018,10.8678238 L15.8348018,2.81975968 L14.5176211,2.81975968 L14.5176211,4.28838451 C14.0594714,3.45126836 13.0572687,2.68758344 11.5969163,2.68758344 C9.49229075,2.68758344 7.87444934,4.30307076 7.87444934,6.81441923 Z M14.5176211,6.82910547 C14.5176211,8.72363151 13.2863436,9.82510013 11.8546256,9.82510013 C10.4229075,9.82510013 9.20594714,8.70894526 9.20594714,6.81441923 C9.20594714,4.91989319 10.4229075,3.84779706 11.8546256,3.84779706 C13.2863436,3.84779706 14.5176211,4.96395194 14.5176211,6.82910547 Z" id="形状"></path>
                        <path d="M19.342511,4.31775701 L19.342511,0 L18.0396476,0 L18.0396476,10.8678238 L19.342511,10.8678238 L19.342511,9.38451268 C19.8292952,10.2656876 20.845815,11 22.277533,11 C24.3821586,11 26,9.31108144 26,6.81441923 C26,4.30307076 24.3964758,2.68758344 22.277533,2.68758344 C20.8887665,2.68758344 19.8436123,3.42189586 19.342511,4.31775701 Z M24.6685022,6.81441923 C24.6685022,8.70894526 23.4515419,9.82510013 22.0055066,9.82510013 C20.5881057,9.82510013 19.342511,8.72363151 19.342511,6.82910547 C19.342511,4.96395194 20.5881057,3.84779706 22.0055066,3.84779706 C23.4515419,3.84779706 24.6685022,4.91989319 24.6685022,6.81441923 Z" id="形状"></path>
                    </g>
                    <text id="Ask-Coco-AI" font-family="PingFangSC-Regular, PingFang SC" font-size="16" font-weight="normal" fill="#3E4782">
                        <tspan x="481.916" y="36">Ask Coco AI</tspan>
                    </text>
                </g>
            </g>
        </g>
    </g>
    <g transform="translate(30, 20)">
        <title>编组 5</title>
        <defs>
            <linearGradient x1="11.317145%" y1="49.5605469%" x2="97.1736012%" y2="50.3073602%" id="linearGradient-1">
                <stop stop-color="#5E85FF" offset="0%"></stop>
                <stop stop-color="#EBC8FE" offset="39.100743%"></stop>
                <stop stop-color="#5274FF" offset="75.8142788%"></stop>
                <stop stop-color="#49FFF3" offset="100%"></stop>
            </linearGradient>
            <!-- 其他defs内容保持不变 -->
        </defs>
        <g id="官网2-y" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <!-- 原搜索框图形内容 -->
        </g>
    </g>

    <!-- 打字机效果SVG（置于最上层） -->
    <g>
        <style>
            .static-text { font: 18px sans-serif; fill: #ffffff; }
            .typing-text { font: 18px sans-serif; fill: ${
              theme === "dark" ? "#49FFF3" : "#000"
            }; }
            .cursor { fill: #49FFF3; }
        </style>
        
        <!-- 静态文字：调整位置以匹配搜索框 -->
        <text x="135" y="108" class="static-text"></text>
        
        <!-- 动态文字和光标 -->
        <g>
            <text x="135" y="108" class="typing-text">
                <tspan id="__typing-content__"></tspan>
            </text>
            <rect x="135" y="93" width="2" height="16" class="cursor" id="__cursor__">
                <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
            </rect>
        </g>
    </g>
</svg>`;

  useEffect(() => {
    typeRef.current = false;
    const typingContent = document.getElementById(
      "__typing-content__"
    ) as SVGTextElement | null;
    const cursor = document.getElementById("__cursor__");
    if (typingContent && cursor) {
      let textIndex = 0,
        charIndex = 0;
      const typingSpeed = 80;

      const textLen = typingContent.getComputedTextLength();

      function type() {
        if (charIndex < INPUTTEXTS[textIndex].length) {
          typingContent &&
            (typingContent.textContent +=
              INPUTTEXTS[textIndex].charAt(charIndex));
          charIndex++;
          cursor && cursor.setAttribute("x", 135 + textLen.toString());
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(erase, 2000);
        }
      }

      function erase() {
        if (charIndex > 0) {
          typingContent &&
            (typingContent.textContent = INPUTTEXTS[textIndex].substring(
              0,
              charIndex - 1
            ));
          charIndex--;
          cursor && cursor.setAttribute("x", 135 + textLen.toString());
          setTimeout(erase, typingSpeed / 2);
        } else {
          textIndex = (textIndex + 1) % INPUTTEXTS.length;
          setTimeout(type, 500);
        }
      }

      setTimeout(type, 1000);
    }
  }, [theme]);

  return (
    <>
      <div id="searchbox-container"></div>
      <div
        id="searchbox-trigger"
        className="cursor-pointer w-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></div>
      <Script id="searchbox-module" type="module" strategy="afterInteractive">
        {`
                    import { searchbox } from "https://coco.infini.cloud/integration/d0taohm2a89828kdfebg/widget";
                    setTimeout(() => searchbox({container: "#searchbox-container", trigger: "searchbox-trigger"}), 0)
                `}
      </Script>
    </>
  );
}

