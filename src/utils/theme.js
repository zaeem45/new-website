import { injectGlobal } from 'styled-components';

injectGlobal`
    /* ----------------------------- */
    /* ==reset */
    /* ----------------------------- */

    /* base font-size corresponds to 10px and is adapted to rem unit */
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #fff;
        color: #000;
        font-family: 'Work Sans', sans-serif;
        font-size: 1.6em; /* equiv 14px */
        line-height: 1.5; /* adapt to your design */
    }

    a {
        text-decoration: none;
    }

    /* font-sizing for content */
    /* preserve vertical-rythm, thanks to http://soqr.fr/vertical-rhythm/ */
    p,
    ul,
    ol,
    dl,
    blockquote,
    pre,
    td,
    th,
    label,
    textarea,
    caption,
    details,
    figure,
    hgroup {
        font-size: 1em; /* equiv 14px */
        line-height: 1.5;
        margin: 1.5em 0 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: #262626;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-variant: small-caps;
    }
    h1,
    .h1-like {
        font-size: 1.8571em; /* equiv 26px */
        line-height: 1.6154em;
        margin: 0.8077em 0 0 0;
    }
    h2,
    .h2-like {
        font-size: 1.7143em; /* equiv 24px */
        line-height: 1.75em;
        margin: 0.875em 0 0 0;
    }
    h3,
    .h3-like {
        font-size: 1.5714em; /* equiv 22px */
        line-height: 1.909em;
        margin: 0.9545em 0 0 0;
    }
    h4,
    .h4-like {
        font-size: 1.4286em; /* equiv 20px */
        line-height: 1.05em;
        margin: 1.05em 0 0 0;
    }
    h5,
    .h5-like {
        font-size: 1.2857em; /* equiv 18px */
        line-height: 1.1667em;
        margin: 1.1667em 0 0 0;
    }
    h6,
    .h6-like {
        font-size: 1.1429em; /* equiv 16px */
        line-height: 1.3125em;
        margin: 1.3125em 0 0 0;
    }

    /* alternate font-sizing */
    .smaller {
        font-size: 0.7143em; /* equiv 10px */
        line-height: 2.1em;
    }
    .small {
        font-size: 0.8571em; /* equiv 12px */
        line-height: 1.75em;
    }
    .big {
        font-size: 1.1429em; /* equiv 16px */
        line-height: 1.3125em;
    }
    .bigger {
        font-size: 1.2857em; /* equiv 18px */
        line-height: 1.1667em;
    }
    .biggest {
        font-size: 1.4286em; /* equiv 20px */
        line-height: 1.05em;
    }

    /* soft reset */
    html,
    body,
    textarea,
    figure,
    label {
        margin: 0;
        padding: 0;
    }
    ul,
    ol {
        padding-left: 2em;
    }
    code,
    pre,
    samp {
        white-space: pre-wrap;
        font-family: consolas, 'DejaVu Sans Mono', courier, monospace;
    }
    code {
        line-height: 1em;
    }
    table {
        margin-bottom: 1.5em;
    }

    /* avoid top margins on first content element */
    p:first-child,
    ul:first-child,
    ol:first-child,
    dl:first-child,
    blockquote:first-child,
    pre:first-child,
    h1:first-child,
    h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
        margin-top: 0;
    }

    /* avoid margins on nested elements */
    li p,
    li ul,
    li ol {
        margin-top: 0;
        margin-bottom: 0;
    }

    /* HTML5 tags */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    nav,
    section {
        display: block;
    }

    /* max values */
    img,
    table,
    td,
    blockquote,
    code,
    pre,
    textarea,
    input,
    video {
        max-width: 100%;
    }

    /* you shall not pass */
    div,
    textarea,
    table,
    td,
    th,
    code,
    pre,
    samp {
        word-wrap: break-word;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -o-hyphens: auto;
        hyphens: auto;
    }

    /* pictures */
    img {
        width: auto;
        height: auto;
        vertical-align: middle;
    }
    a img {
        border: 0;
    }

    /* scripts */
    body > script {
        display: none !important;
    }

    /* skip-links */
    .skip-links {
        position: absolute;
    }
    .skip-links a {
        position: absolute;
        left: -9999px;
        padding: 0.5em;
        background: #000;
        color: #fff;
        text-decoration: none;
    }
    .skip-links a:focus {
        position: static;
    }
`;

export default {
    white: '#fff',
    black: '#000',
    greyLight: '#EBEBEB',
    grey: '#696969',
    greyDark: '#262626',
    blue: '#193744',
};
