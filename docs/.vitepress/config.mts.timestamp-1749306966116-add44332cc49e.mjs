// docs/.vitepress/config.mts
import { defineConfig } from "file:///D:/code/teek-hyde/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.14.1_async-validator@4.2.5_less@_jhen5aggywbrtjdkq5nthr754i/node_modules/vitepress/dist/node/index.js";
import { defineTeekConfig } from "file:///D:/code/teek-hyde/node_modules/.pnpm/vitepress-theme-teek@1.3.5_vitepress@1.6.3_@algolia+client-search@5.23.0_@types+node@22.14.1__tqz3kikqvm2vv3k4ghlan4grom/node_modules/vitepress-theme-teek/es/config/index.mjs";
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from "file:///D:/code/teek-hyde/node_modules/.pnpm/vitepress-plugin-group-icons@1.5.2/node_modules/vitepress-plugin-group-icons/dist/index.mjs";
import timeline from "file:///D:/code/teek-hyde/node_modules/.pnpm/vitepress-markdown-timeline@1.2.2/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";

// docs/.vitepress/ConfigHyde/icon/Svgicon.ts
var Blog = `<svg t="1748063380189" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4048" width="256" height="256"><path d="M0 0h1024v1024H0z" fill="#5da8ff" opacity=".01" p-id="4049"></path><path d="M795.562667 228.437333A126.037333 126.037333 0 0 1 921.6 354.474667v504.106666c0 34.816-28.202667 63.018667-63.018667 63.018667h-141.568V354.474667c0-69.632 8.96-126.037333 78.549334-126.037334z" fill="#7aaeeb" p-id="4050" data-spm-anchor-id="a313x.search_index.0.i15.1dbc3a81biy5SY" class=""></path><path d="M669.525333 102.4a126.037333 126.037333 0 0 1 126.037334 126.037333v630.186667c0 34.773333 28.202667 62.976 63.018666 62.976H228.394667A126.037333 126.037333 0 0 1 102.4 795.562667V228.437333A126.037333 126.037333 0 0 1 228.437333 102.4z m-220.544 519.893333h-189.013333a47.274667 47.274667 0 1 0 0 94.506667h189.013333a47.274667 47.274667 0 1 0 0-94.506667z m189.013334-189.056h-378.026667a47.274667 47.274667 0 1 0 0 94.506667h378.026667a47.274667 47.274667 0 0 0 0-94.506667zM322.986667 244.224H259.925333a47.274667 47.274667 0 0 0 0 94.464H322.986667a47.274667 47.274667 0 1 0 0-94.506667z" fill="#5da8ff" p-id="4051" data-spm-anchor-id="a313x.search_index.0.i7.1dbc3a81biy5SY" class=""></path></svg>`;
var Linux = `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
	<g fill="none">
		<rect width="256" height="256" fill="#f4f2ed" rx="60" />
		<path fill="#eceff1" d="m85.95 199.926l24.53 13.62h37.096l34.702-26.055l15.556-40.859l-35.899-43.227l-10.171-24.278l-49.66 1.776l.598 13.62l-9.573 17.764l-14.958 29.016l-2.991 24.278z" />
		<path fill="#263238" d="M187.064 114.656c-9.573-13.62-17.351-21.91-21.539-39.082s1.197-12.435-2.393-27.24c-1.795-7.697-4.787-13.027-7.778-17.172c-3.59-4.145-7.778-6.514-10.172-7.106c-5.384-2.96-17.949-7.698-33.505.592c-16.155 8.29-14.36 26.055-11.368 62.177c0 2.368-.599 5.33-1.795 7.698c-2.393 5.33-6.582 10.066-10.171 14.212c-4.189 5.921-8.377 11.843-11.368 18.356c-7.18 13.62-13.762 30.792-11.967 37.306c2.992-.592 40.686 56.255 40.686 57.439c2.393-.592 12.564-.592 21.539-.592c12.565-.592 19.744-1.184 29.916 1.184c0-1.776-.599-3.553-.599-5.329c0-3.553.599-6.514 1.197-10.659c.598-2.961 1.197-5.921 1.795-9.474c-5.983 5.329-16.753 11.251-26.924 13.027c-8.975 1.776-23.933-1.184-31.113-10.067c.599 0 1.795 0 2.394-.592c1.795-.592 3.59-1.184 4.188-2.368c1.795-2.961.598-5.922-.598-7.698c-1.197-1.777-10.172-8.291-14.36-11.843c-4.188-3.553-6.581-5.33-8.975-7.698l-4.786-4.738c-1.197-1.184-1.795-2.368-2.393-2.961c-1.197-2.96-1.795-6.513-1.197-11.25c.598-6.514 2.991-11.844 5.983-17.765c1.197-2.369 4.188-7.106 4.188-7.106s-10.171 24.871-4.786 32.569c0 0 .598-7.698 2.991-15.396c1.795-5.33 4.787-13.028 8.377-17.173s12.564-19.541 13.163-29.016c0-4.145.598-8.29.598-11.25c-2.393-2.37 39.489-8.29 41.882-1.777c.598 2.369 8.975 23.686 13.761 34.937c2.393 5.33 5.385 10.067 7.18 15.988c1.795 6.514 2.991 15.396 2.991 24.279c0 1.776 0 4.737-.598 7.698c1.197 0 24.531-24.871-2.991-45.596c0 0 16.752 7.698 17.351 23.094c.598 12.435-4.787 22.502-5.983 24.278c.598 0 12.564 5.33 13.162 5.33c2.394 0 7.18-1.777 7.18-1.777c.599-1.776 2.393-6.514 2.393-8.29c4.189-13.62-5.983-35.529-15.556-49.149" />
		<path fill="#eceff1" d="M111.078 75.574c4.296 0 7.778-5.303 7.778-11.843c0-6.541-3.482-11.843-7.778-11.843S103.3 57.19 103.3 63.73s3.483 11.843 7.778 11.843m26.924 1.185c5.618 0 10.172-6.098 10.172-13.62S143.62 49.52 138.002 49.52c-5.617 0-10.171 6.098-10.171 13.62s4.554 13.62 10.171 13.62" />
		<path fill="#212121" d="M115.424 64.541c-.497-3.893-2.761-6.817-5.056-6.53s-3.752 3.676-3.254 7.57c.497 3.893 2.76 6.817 5.055 6.53c2.295-.288 3.752-3.677 3.255-7.57m21.981 8.664c3.304 0 5.983-3.446 5.983-7.698c0-4.251-2.679-7.698-5.983-7.698c-3.305 0-5.984 3.447-5.984 7.698s2.679 7.698 5.984 7.698" />
		<path fill="#ffc107" d="M216.98 195.781c-2.393-1.184-6.582-2.961-10.172-8.29c-1.794-2.961-1.196-11.251-4.188-14.804c-1.795-2.368-4.188-1.184-4.786-1.184c-5.385 1.184-17.95 9.474-26.326 0c-1.197-1.184-2.992-2.961-5.983-2.961c-2.992 0-4.188 1.184-5.385 3.553s-1.197 4.145-1.197 10.067c0 4.737 0 10.066-.598 14.211c-1.197 10.067-2.991 15.989-2.991 21.91c0 6.514 1.794 10.659 4.188 12.435c1.795 1.777 4.786 2.961 11.368 2.961c6.581 0 10.769-2.368 14.958-6.514c2.991-2.96 5.384-4.145 13.761-10.066c6.581-4.145 16.753-9.475 18.547-11.251c1.197-1.184 2.992-1.777 2.992-5.33c0-2.96-2.393-4.145-4.188-4.737m-120.261 1.777c-5.983-9.475-6.582-11.251-10.77-17.173c-3.59-5.921-11.368-17.172-16.154-17.172c-3.59 0-5.385 1.776-7.778 4.145c-2.394 2.368-4.787 7.698-8.975 10.659c-3.59 2.96-13.761 2.368-16.154 5.921s2.393 8.883 2.393 17.765c0 3.553-2.992 5.921-3.59 8.29c-.598 2.961-1.197 4.737 0 7.106c2.393 3.553 5.385 4.737 25.727 8.882c10.77 2.369 20.941 8.29 27.523 8.883c6.581.592 17.949 0 17.949-15.989c.599-9.474-4.786-11.843-10.171-21.317m11.368-107.18c-3.59-2.369-6.582-4.738-6.582-8.29c0-3.553 2.394-4.738 5.984-7.698c.598-.593 7.179-6.514 13.761-6.514s14.359 4.145 17.351 5.33c5.385 1.183 10.769 2.368 10.171 6.513c-.598 5.921-1.196 7.106-7.18 10.067c-4.188 1.184-11.966 7.698-17.351 7.698c-2.393 0-5.983 0-8.376-.593c-1.795-.592-4.787-3.553-7.778-6.513" />
		<path fill="#634703" d="M106.89 85.64c1.197 1.185 2.992 2.37 4.787 2.961c1.196.592 2.991 1.185 2.991 1.185h5.385c2.992 0 7.18-1.185 11.368-3.553c4.188-1.777 4.787-2.961 7.778-4.145c2.992-1.777 5.983-3.553 4.787-4.145c-1.197-.593-2.394 0-6.582 2.368c-3.59 2.369-6.581 3.553-10.171 5.33c-1.795.592-4.188 1.776-5.983 1.776h-5.385c-1.795 0-2.992-.592-4.787-1.184c-1.196-.593-1.795-1.185-2.393-1.185c-1.196-.592-3.59-2.96-4.786-3.553c0 0-1.197 0-.599.593zm17.95-13.027c.598 1.184 1.795 1.184 2.393 1.776s1.197.593 1.197.593c.598-.593 0-1.777-.599-1.777c0-1.184-2.991-1.184-2.991-.592m-9.573 1.184c0 .593 1.196 1.185 1.196.593c.599-.593 1.197-1.185 1.795-1.185c1.197-.592.598-1.184-1.196-1.184c-1.197.592-1.197 1.184-1.795 1.776" />
		<path fill="#455a64" d="M173.303 178.609v1.776c1.197 2.369 4.188 2.961 6.581 2.961c3.59 0 7.18-2.369 8.975-4.737c0-.592.598-1.185 1.197-1.777c1.196-1.776 1.795-2.96 2.393-3.553c0 0-.598-.592-.598-1.184c-.599-1.184-2.394-2.369-4.787-2.961c-1.795-.592-4.786-1.184-5.983-1.184c-5.385-.592-8.376 1.184-10.171 2.961c0 0 .598 0 .598.592c1.197 1.184 1.795 2.369 1.795 4.145c.598 1.184 0 1.776 0 2.961" />
	</g>
</svg>`;
var Nginx = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
	<path fill="#43a047" d="M16 0L2 8v16l14 8l14-8V8Zm8 23a1 1 0 0 1-1 1h-2.52a1 1 0 0 1-.78-.375L12 14v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2.52a1 1 0 0 1 .78.375L20 18V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
</svg>`;
var Git = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
	<path fill="#e64a19" d="M13.172 2.828L11.78 4.22l1.91 1.91l2 2A2.986 2.986 0 0 1 20 10.81a3.25 3.25 0 0 1-.31 1.31l2.06 2a2.68 2.68 0 0 1 3.37.57a2.86 2.86 0 0 1 .88 2.117a3.02 3.02 0 0 1-.856 2.109A2.9 2.9 0 0 1 23 19.81a2.93 2.93 0 0 1-2.13-.87a2.694 2.694 0 0 1-.56-3.38l-2-2.06a3 3 0 0 1-.31.12V20a3 3 0 0 1 1.44 1.09a2.92 2.92 0 0 1 .56 1.72a2.88 2.88 0 0 1-.878 2.128a2.98 2.98 0 0 1-2.048.871a2.981 2.981 0 0 1-2.514-4.719A3 3 0 0 1 16 20v-6.38a2.96 2.96 0 0 1-1.44-1.09a2.9 2.9 0 0 1-.56-1.72a2.9 2.9 0 0 1 .31-1.31l-3.9-3.9l-7.579 7.572a4 4 0 0 0-.001 5.658l10.342 10.342a4 4 0 0 0 5.656 0l10.344-10.344a4 4 0 0 0 0-5.656L18.828 2.828a4 4 0 0 0-5.656 0" />
</svg>`;
var Docker = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="#0288d1" d="M21.81 10.25c-.06-.04-.56-.43-1.64-.43c-.28 0-.56.03-.84.08c-.21-1.4-1.38-2.11-1.43-2.14l-.29-.17l-.18.27c-.24.36-.43.77-.51 1.19c-.2.8-.08 1.56.33 2.21c-.49.28-1.29.35-1.46.35H2.62c-.34 0-.62.28-.62.63c0 1.15.18 2.3.58 3.38c.45 1.19 1.13 2.07 2 2.61c.98.6 2.59.94 4.42.94c.79 0 1.61-.07 2.42-.22c1.12-.2 2.2-.59 3.19-1.16A8.3 8.3 0 0 0 16.78 16c1.05-1.17 1.67-2.5 2.12-3.65h.19c1.14 0 1.85-.46 2.24-.85c.26-.24.45-.53.59-.87l.08-.24zm-17.96.99h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H3.85c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.43 0h1.76c.08 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16H6.28c-.09 0-.16.07-.16.16v1.58c.01.09.07.16.16.16m2.47 0h1.75c.1 0 .17-.07.17-.16V9.5c0-.08-.06-.16-.17-.16H8.75c-.08 0-.15.07-.15.16v1.58c0 .09.06.16.15.16m2.44 0h1.77c.08 0 .15-.07.15-.16V9.5c0-.08-.06-.16-.15-.16h-1.77c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16M6.28 9h1.76c.08 0 .16-.09.16-.18V7.25c0-.09-.07-.16-.16-.16H6.28c-.09 0-.16.06-.16.16v1.57c.01.09.07.18.16.18m2.47 0h1.75c.1 0 .17-.09.17-.18V7.25c0-.09-.06-.16-.17-.16H8.75c-.08 0-.15.06-.15.16v1.57c0 .09.06.18.15.18m2.44 0h1.77c.08 0 .15-.09.15-.18V7.25c0-.09-.07-.16-.15-.16h-1.77c-.08 0-.15.06-.15.16v1.57c0 .09.07.18.15.18m0-2.28h1.77c.08 0 .15-.07.15-.16V5c0-.1-.07-.17-.15-.17h-1.77c-.08 0-.15.06-.15.17v1.56c0 .08.07.16.15.16m2.46 4.52h1.76c.09 0 .16-.07.16-.16V9.5c0-.08-.07-.16-.16-.16h-1.76c-.08 0-.15.07-.15.16v1.58c0 .09.07.16.15.16" />
</svg>`;
var Appstore = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
	<path fill="#5da8ff" d="M2.02 1.515a.505.505 0 0 0-.505.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505V2.02a.505.505 0 0 0-.505-.506zm5.05 9.394a2.02 2.02 0 0 1 2.02 2.02v5.05A2.02 2.02 0 0 1 7.07 20H2.02A2.02 2.02 0 0 1 0 17.98v-5.05a2.02 2.02 0 0 1 2.02-2.02zm10.91 0A2.02 2.02 0 0 1 20 12.93v5.05A2.02 2.02 0 0 1 17.98 20h-5.05a2.02 2.02 0 0 1-2.02-2.02v-5.05a2.02 2.02 0 0 1 2.02-2.02zM7.07 12.424H2.02a.505.505 0 0 0-.505.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505v-5.05a.505.505 0 0 0-.505-.506m10.91 0h-5.05a.505.505 0 0 0-.506.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505v-5.05a.505.505 0 0 0-.505-.506M7.07 0a2.02 2.02 0 0 1 2.02 2.02v5.05a2.02 2.02 0 0 1-2.02 2.02H2.02A2.02 2.02 0 0 1 0 7.07V2.02A2.02 2.02 0 0 1 2.02 0zm10.91 0A2.02 2.02 0 0 1 20 2.02v5.05a2.02 2.02 0 0 1-2.02 2.02h-5.05a2.02 2.02 0 0 1-2.02-2.02V2.02A2.02 2.02 0 0 1 12.93 0zm0 1.515h-5.05a.505.505 0 0 0-.506.505v5.05c0 .28.226.506.505.506h5.05a.505.505 0 0 0 .506-.505V2.02a.505.505 0 0 0-.505-.506" stroke-width="0.5" stroke="#5da8ff" />
</svg>`;
var Photo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="none">
		<path stroke="#5da8ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.33 17.657c.11-.366.17-.755.17-1.157v-9a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v9.07m16.83 1.087l-.088-.104l-2.466-2.976a2 2 0 0 0-3.073-.008l-1.312 1.566l-.214.261m7.153 1.26a4 4 0 0 1-3.713 2.842m0 0l-.117.002h-9a4 4 0 0 1-4-3.93m13.117 3.928l-.093-.106l-3.347-3.996m-9.676.175l.177-.201l3.206-3.827a2 2 0 0 1 3.066 0l3.227 3.853" />
		<circle cx="15.091" cy="8.909" r="1.5" fill="#5da8ff" />
	</g>
</svg>`;
var Music = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<g fill="#86adff">
		<path d="M11 13.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5" />
		<path d="M9.367 2.25c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.281.55-.403 1.154-.461 1.868c-.057.697-.057 1.563-.057 2.655v5.266c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057zm5.133 6.5h-1.25v5.75a2.25 2.25 0 1 1-1.5-2.122V8.6c0-.746.604-1.35 1.35-1.35h1.4a.75.75 0 0 1 0 1.5" />
	</g>
</svg>`;
var Film = `<svg t="1748392735697" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10973" width="256" height="256"><path d="M904 848H120c-30.93 0-56-25.07-56-56V232c0-30.93 25.07-56 56-56h784c30.93 0 56 25.07 56 56v560c0 30.93-25.07 56-56 56z" fill="#8C9EFF" p-id="10974"></path><path d="M64 792c0 30.93 25.07 56 56 56h84V680H64v112z" fill="#E1F5FF" p-id="10975" data-spm-anchor-id="a313x.search_index.0.i24.583b3a81r1QqqT" class="selected"></path><path d="M120 176c-30.93 0-56 25.07-56 56v112h140V176h-84z" fill="#7aaeeb" p-id="10976" data-spm-anchor-id="a313x.search_index.0.i20.583b3a81r1QqqT" class="selected"></path><path d="M64 344h140v168H64z" fill="#E1F5FF" p-id="10977" data-spm-anchor-id="a313x.search_index.0.i25.583b3a81r1QqqT" class="selected"></path><path d="M64 512h140v168H64z" fill="#7aaeeb" p-id="10978" data-spm-anchor-id="a313x.search_index.0.i21.583b3a81r1QqqT" class="selected"></path><path d="M819.21 848h84c30.93 0 56-25.07 56-56V680h-140v168z" fill="#E1F5FF" p-id="10979" data-spm-anchor-id="a313x.search_index.0.i23.583b3a81r1QqqT" class="selected"></path><path d="M903.21 176h-84v168h140V232c0-30.93-25.07-56-56-56z" fill="#7aaeeb" p-id="10980" data-spm-anchor-id="a313x.search_index.0.i19.583b3a81r1QqqT" class="selected"></path><path d="M819.21 344h140v168h-140z" fill="#E1F5FF" p-id="10981" data-spm-anchor-id="a313x.search_index.0.i22.583b3a81r1QqqT" class="selected"></path><path d="M819.21 512h140v168h-140z" fill="#7aaeeb" p-id="10982" data-spm-anchor-id="a313x.search_index.0.i18.583b3a81r1QqqT" class="selected"></path><path d="M619.24 536.25l-158.49 91.5c-18.67 10.78-42-2.69-42-24.25v-183c0-21.55 23.33-35.03 42-24.25l158.49 91.5c18.67 10.78 18.67 37.72 0 48.5z" fill="#FFD600" p-id="10983"></path></svg>`;
var About = `<svg t="1748393240929" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18839" width="256" height="256"><path d="M512 0Q373.80531 0 253.734513 70.230088 138.19469 138.19469 70.230088 253.734513 0 372.672566 0 512t70.230088 258.265487q67.964602 115.539823 183.504425 183.504425 120.070796 70.230088 258.831859 70.230088T770.265487 953.769912q116.672566-67.964602 183.504425-183.504425 70.230088-118.938053 70.230088-258.265487t-70.230088-258.265487Q886.938053 138.19469 770.265487 70.230088 651.327434 0 512 0z m0 968.495575q-123.469027 0-229.946903-62.300885-103.079646-60.035398-164.247787-163.115044-62.300885-106.477876-62.300885-230.513274T117.80531 282.053097q61.168142-103.079646 164.247787-164.247787 106.477876-62.300885 230.513275-62.300885T743.079646 117.80531q103.079646 61.168142 163.115044 164.247787 62.300885 106.477876 62.300885 230.513275T906.19469 743.079646q-60.035398 103.079646-163.115044 163.115044-106.477876 62.300885-231.079646 62.300885z m0-695.504425q-15.858407 18.123894-15.858407 43.044248 0 20.389381 13.026549 33.982301t33.415929 13.59292q22.654867 0 39.646017-18.690265t16.991151-42.477876q0-20.389381-13.59292-34.548673T549.946903 254.867257q-22.088496 1.132743-37.946903 18.123893z m39.646018 340.955753q-15.858407 15.858407-29.451328 26.053097 6.79646-32.849558 31.716814-116.672566 20.389381-71.362832 20.389381-82.690266 0-14.725664-11.327434-24.353982t-31.716814-7.929204q-20.389381 1.699115-46.442478 16.424779-27.185841 15.858407-61.168141 53.238938l-12.460177 12.460177 39.646017 30.584071 32.849558-31.716814q-44.176991 144.99115-44.176991 185.769911 0 18.123894 10.761062 30.017699t28.318584 11.893806q17.557522 0 41.345133-12.460177 21.522124-12.460177 66.831858-55.504425l12.460177-11.327434-35.115044-35.115044z" p-id="18840" fill="#7aaeeb"></path></svg>`;
var Link = `<svg t="1748156239695" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27189" width="256" height="256"><path d="M0 0h1024v1024H0z" fill="#ffffff00" p-id="27190"></path><path d="M361.376 617.376a32 32 0 0 0 45.248 45.248l-45.248-45.248z m301.248-210.752a32 32 0 0 0-45.248-45.248l45.248 45.248zM622.72 147.552l-22.624-22.624 22.624 22.624z m248.896 248.896l-22.624-22.624 22.624 22.624z m-402.24-140.8a32 32 0 1 0 45.216 45.28L469.344 255.68z m-72.928 616l-22.624-22.656 22.624 22.624z m-248.896 0l22.624-22.656-22.624 22.624z m0-248.928l22.624 22.624-22.624-22.624z m402.592 140.48a32 32 0 0 0-45.248-45.28l45.248 45.248z m197.024-287.552a32 32 0 1 0 45.28 45.248l-45.28-45.248zM294.624 520.896a32 32 0 1 0-45.248-45.248l45.248 45.248z m112 141.76l256-256-45.248-45.28-256 256 45.248 45.248z m238.72-492.48a144 144 0 0 1 203.648 0l45.248-45.248a208 208 0 0 0-294.144 0l45.248 45.248z m203.648 0a144 144 0 0 1 0 203.648l45.248 45.248a208 208 0 0 0 0-294.144l-45.248 45.248z m-248.896-45.248L469.344 255.68l45.248 45.248 130.752-130.752-45.248-45.248zM373.824 848.96a144 144 0 0 1-203.648 0l-45.248 45.28a208 208 0 0 0 294.144 0l-45.248-45.28z m-203.648 0a144 144 0 0 1 0-203.648l-45.248-45.248a208 208 0 0 0 0 294.144l45.248-45.248z m248.896 45.28l131.072-131.104-45.248-45.248-131.072 131.072 45.248 45.28z m429.92-520.448l-101.824 101.824 45.28 45.248 101.792-101.824-45.248-45.248zM170.176 645.344l124.48-124.448-45.28-45.248-124.48 124.48 45.28 45.216z" fill="#7aaeeb" p-id="27191"></path></svg>`;
var Nav = `<svg t="1748156505578" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32184" width="256" height="256"><path d="M0 0h1024v1024H0z" fill="#7aaeeb" fill-opacity="0" p-id="32185"></path><path d="M587.562667 896l-2.474667-0.085333a43.52 43.52 0 0 1-39.68-32.064l-82.773333-300.949334-302.656-84.373333a43.626667 43.626667 0 0 1-31.914667-39.957333 43.669333 43.669333 0 0 1 27.797333-42.922667L836.416 130.986667a43.733333 43.733333 0 0 1 56.618667 56.618666l-264.725334 680.533334A44.010667 44.010667 0 0 1 587.562667 896zM203.136 434.858667l303.168 84.522666 82.88 301.290667L834.816 189.162667 203.136 434.858667z" fill="#7aaeeb" fill-opacity=".65" p-id="32186"></path></svg>`;
var SiteAnalytics = `<svg t="1748156803600" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="38235" width="256" height="256"><path d="M170.666667 85.333333v768h768v85.333334H85.333333V85.333333h85.333334z m512 170.666667h256v256h-85.333334V402.048l-67.370666 67.2a203957.589333 203957.589333 0 0 0-115.797334 115.541333l-30.165333 30.165334-170.666667-170.666667-213.333333 213.333333L195.669333 597.333333 469.333333 323.626667l170.666667 170.666666 85.717333-85.461333L793.344 341.333333H682.666667V256z" fill="#7aaeeb" p-id="38236"></path></svg>`;
var Status = `<svg t="1748156926781" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40271" width="256" height="256"><path d="M800.256 756.736H215.722667a68.266667 68.266667 0 0 1-68.266667-68.266667V235.52a68.266667 68.266667 0 0 1 68.266667-68.266667h584.533333a68.266667 68.266667 0 0 1 68.266667 68.266667v452.778667a68.266667 68.266667 0 0 1-68.266667 68.437333zM215.722667 219.648a15.701333 15.701333 0 0 0-15.701334 15.701333v452.949334a15.872 15.872 0 0 0 15.701334 15.872h584.533333a15.872 15.872 0 0 0 15.872-15.872V235.52a15.872 15.872 0 0 0-15.872-15.872z" fill="#7aaeeb" p-id="40272"></path><path d="M676.522667 851.626667H339.456a26.453333 26.453333 0 0 1 0-52.736h337.066667a26.453333 26.453333 0 1 1 0 52.736z" fill="#7aaeeb" p-id="40273"></path><path d="M563.2 582.997333h-3.072a26.453333 26.453333 0 0 1-21.504-17.066666l-71.68-186.368-76.288 127.829333a26.453333 26.453333 0 0 1-22.528 12.8h-85.333333a26.453333 26.453333 0 0 1 0-52.736h69.632l96.256-161.28a26.453333 26.453333 0 0 1 36.181333-9.045333 26.624 26.624 0 0 1 11.093333 12.970666l73.898667 190.805334 28.842667-41.472a26.282667 26.282667 0 0 1 21.674666-11.434667h111.616a26.453333 26.453333 0 0 1 0 52.736H634.88l-49.322667 70.997333a26.453333 26.453333 0 0 1-22.357333 11.264z" fill="#7aaeeb" p-id="40274"></path></svg>`;

// docs/.vitepress/ConfigHyde/icon/NavIcon.ts
var TeekIcon = {
  text: "Teek\u4E3B\u9898",
  link: "/Teek",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: "https://vp.teek.top/teek-logo-mini.svg",
    iconType: "img"
    // size: 12, // 图标大小
  }
};
var VdoingIcon = {
  text: "Vdoing\u4E3B\u9898",
  link: "/Vdoing",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: "https://vuepress.vuejs.org/images/hero.png",
    iconType: "img",
    size: 16
    // 图标大小
  }
};
var SSLIcon = {
  text: "SSL\u8BC1\u4E66",
  link: "/SSL",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: "https://allinssl.com/logo.svg",
    iconType: "img",
    size: 12
    // 图标大小
  }
};
var BlogIcon = {
  text: "\u535A\u5BA2\u642D\u5EFA",
  link: "/Blog",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Blog
  }
};
var NginxIcon = {
  text: "Nginx",
  link: "/Nginx",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Nginx
  }
};
var LinuxIcon = {
  text: "Linux",
  link: "/Linux",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Linux
  }
};
var GitIcon = {
  text: "Git",
  link: "/Git",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Git
  }
};
var DockerIcon = {
  text: "Docker",
  link: "/Docker",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Docker
  }
};
var AppstoreIcon = {
  text: "\u5B9E\u7528\u8F6F\u4EF6",
  link: "/Appstore",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Appstore
  }
};
var PhotoIcon = {
  text: "\u76F8\u518C",
  link: "https://photo.seasir.top/",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Photo
  }
};
var MusicIcon = {
  text: "\u97F3\u4E50",
  link: "http://music.alger.fun/#/",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Music
  }
};
var FilmIcon = {
  text: "\u5F71\u7247",
  link: "/Film",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Film
  }
};
var AboutIcon = {
  text: "\u5173\u4E8E\u672C\u7AD9",
  link: "/About",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: About
  },
  size: 26
  // 图标大小
};
var LinkIcon = {
  text: "\u53CB\u94FE\u94FE\u63A5",
  link: "/Link",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Link
  }
};
var NavIcon = {
  text: "\u7F51\u7AD9\u5BFC\u822A",
  link: "/nav",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Nav
  }
};
var SiteAnalyticsIcon = {
  text: "\u7AD9\u70B9\u7EDF\u8BA1",
  link: "https://umami.seasir.top/share/rvVBNZWa0sUCN6wG/teek.seasir.top",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: SiteAnalytics
  }
};
var StatusIcon = {
  text: "\u7AD9\u70B9\u72B6\u6001",
  link: "https://status.seasir.top/",
  subMenu: true,
  // 是否有子菜单
  iconProps: {
    icon: Status
  }
};

// docs/.vitepress/ConfigHyde/Nav.ts
var Nav2 = [
  {
    text: "\u{1F3E1}\u9996\u9875",
    items: [
      { text: "\u9996\u9875", link: "/" },
      { text: "\u8D77\u59CB\u9875", link: "https://hyde.seasir.top/" }
    ]
  },
  {
    text: "\u{1F4D6}\u7B14\u8BB0\u4E13\u680F",
    items: [
      {
        component: "NavIcon",
        props: TeekIcon
      },
      {
        component: "NavIcon",
        props: VdoingIcon
      },
      {
        component: "NavIcon",
        props: SSLIcon
      },
      {
        component: "NavIcon",
        props: BlogIcon
      }
    ]
  },
  {
    text: "\u{1F9F0}\u5DE5\u5177\u8D44\u6E90",
    // 目录页链接，此处 link 是 vdoing 主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        component: "NavIcon",
        props: LinuxIcon
      },
      {
        component: "NavIcon",
        props: NginxIcon
      },
      {
        component: "NavIcon",
        props: GitIcon
      },
      {
        component: "NavIcon",
        props: DockerIcon
      },
      {
        component: "NavIcon",
        props: AppstoreIcon
      }
    ]
  },
  {
    text: "\u{1F3D9}\uFE0F\u751F\u6D3B\u5A31\u4E50",
    items: [
      {
        component: "NavIcon",
        props: PhotoIcon
      },
      {
        component: "NavIcon",
        props: MusicIcon
      },
      {
        component: "NavIcon",
        props: FilmIcon
      }
    ]
  },
  { text: "\u{1F442}\u7545\u6240\u6B32\u8A00", link: "/message-area/" },
  {
    text: "\u{1F44F}\u6587\u7AE0\u7D22\u5F15",
    items: [
      {
        text: "\u672C\u7AD9",
        items: [
          { text: "\u6587\u7AE0\u5206\u7C7B", link: "/categories/" },
          { text: "\u6587\u7AE0\u6807\u7B7E", link: "/tags/" },
          { text: "\u6587\u7AE0\u5F52\u6863", link: "/archives/" },
          { text: "\u6587\u7AE0\u6E05\u5355", link: "/articleOverview/" },
          { text: "\u7AD9\u70B9\u767B\u5F55", link: "/login/" },
          {
            text: "\u98CE\u9669\u63D0\u793A",
            link: "/risk-link?target=https://teek.seasir.top/"
          }
        ]
      }
    ]
  },
  {
    text: "\u{1F310}\u7AD9\u70B9\u4FE1\u606F",
    items: [
      {
        component: "NavIcon",
        props: AboutIcon
      },
      {
        component: "NavIcon",
        props: LinkIcon
      },
      {
        component: "NavIcon",
        props: NavIcon
      },
      {
        component: "NavIcon",
        props: SiteAnalyticsIcon
      },
      {
        component: "NavIcon",
        props: StatusIcon
      }
    ]
  }
];

// docs/.vitepress/ConfigHyde/Head.ts
var description = ["Hd Security \u4F7F\u7528\u6587\u6863", "\u8BA4\u8BC1\u6846\u67B6"].toString();
var HeadData = [
  // 51.la数据挂件
  [
    "script",
    {
      charset: "UTF-8",
      id: "LA_COLLECT",
      src: "//sdk.51.la/js-sdk-pro.min.js",
      defer: "defer"
    }
  ],
  [
    "script",
    { defer: "defer" },
    `LA.init({id:"3LmDV843SgGyC2Zp",ck:"3LmDV843SgGyC2Zp",autoTrack:true,hashMode:true,screenRecord:true})`
  ],
  ["meta", { name: "referrer", content: "no-referrer-when-downgrade" }],
  //不蒜子统计
  ["meta", { name: "author", content: "Tianke" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
    }
  ],
  [
    "meta",
    {
      name: "description",
      description
    }
  ],
  ["meta", { name: "keywords", description }],
  ["meta", { name: "baidu-site-verification", content: "codeva-QnY1Xh758j" }],
  // 百度收录
  [
    "meta",
    { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }
  ],
  // Bing 收录验证
  ["link", { rel: "icon", href: "/favicon.ico", type: "image/png" }],
  // 阿里在线矢量库
  [
    "link",
    {
      rel: "stylesheet",
      href: "//at.alicdn.com/t/font_2989306_w303erbip9.css"
    }
  ],
  [
    // 阿里图标库symbol 引用
    "script",
    {
      src: "https://at.alicdn.com/t/c/font_4899452_xj7acblxpxj.js",
      media: "print",
      onload: "this.media='all'"
    }
  ],
  // umami统计
  [
    "script",
    {
      src: "https://umami.seasir.top/script.js",
      "data-website-id": "aa519ead-42bb-4f0c-96b5-0ccf630f82be",
      defer: "defer"
    }
  ],
  ["noscript", {}, '<meta http-equiv="refresh" content="0; url={https://www.baidu.com/}">']
  // 禁用js跳转
  //免费的音乐播放器
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ], // 插入自定义脚本
  // [
  //   "script",
  //   {
  //     type: "text/javascript",
  //     id: "myhk",
  //     src: "https://myhkw.cn/api/player/174131850675",
  //     key: "174131850675",
  //     m: "",
  //     defer: "defer", // 添加defer属性，确保脚本在DOM加载完成后执行
  //   },
  // ],
];

// docs/.vitepress/theme/icon/icons.ts
var gitee = `<svg t="1743875298298" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2388" width="200" height="200"><path d="M512 1024C229.2224 1024 0 794.7776 0 512S229.2224 0 512 0s512 229.2224 512 512-229.2224 512-512 512z m259.1488-568.8832H480.4096a25.2928 25.2928 0 0 0-25.2928 25.2928l-0.0256 63.2064c0 13.952 11.3152 25.2928 25.2672 25.2928h177.024c13.9776 0 25.2928 11.3152 25.2928 25.2672v12.6464a75.8528 75.8528 0 0 1-75.8528 75.8528H366.592a25.2928 25.2928 0 0 1-25.2672-25.2928v-240.1792a75.8528 75.8528 0 0 1 75.8272-75.8528h353.9456a25.2928 25.2928 0 0 0 25.2672-25.2928l0.0768-63.2064a25.2928 25.2928 0 0 0-25.2672-25.2928H417.152a189.6192 189.6192 0 0 0-189.6192 189.6448v353.9456c0 13.9776 11.3152 25.2928 25.2928 25.2928h372.9408a170.6496 170.6496 0 0 0 170.6496-170.6496v-145.408a25.2928 25.2928 0 0 0-25.2928-25.2672z" fill="#C71D23" p-id="2389"></path></svg>`;
var email = `<svg t="1743875620187" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16697" width="200" height="200"><path d="M512 0A512 512 0 1 1 0 512 512 512 0 0 1 512 0z" fill="#ff485f" p-id="16698" data-spm-anchor-id="a313x.search_index.0.i13.70183a81yTylfI" class="selected"></path><path d="M726.980923 295.384615H280.123077A63.606154 63.606154 0 0 0 216.615385 358.892308v295.187692a63.606154 63.606154 0 0 0 63.507692 63.507692h446.857846a63.606154 63.606154 0 0 0 63.507692-63.507692v-295.187692A63.606154 63.606154 0 0 0 726.980923 295.384615z m25.403077 358.715077a25.481846 25.481846 0 0 1-25.403077 25.403077H280.123077a25.481846 25.481846 0 0 1-25.403077-25.403077v-295.187692a25.481846 25.481846 0 0 1 25.403077-25.403077h446.857846a25.481846 25.481846 0 0 1 25.403077 25.403077z" fill="#FFFFFF" p-id="16699"></path><path d="M693.720615 396.307692l-190.148923 119.965539-190.148923-119.965539a19.062154 19.062154 0 0 0-20.322461 32.236308l200.073846 126.247385a19.062154 19.062154 0 0 0 10.161231 2.934153h0.630153a19.062154 19.062154 0 0 0 10.161231-2.934153l200.073846-126.247385a19.101538 19.101538 0 1 0-20.48-32.236308z" fill="#FFFFFF" p-id="16700"></path></svg>`;
var WhatsApp = `<svg t="1743875749604" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20479" width="200" height="200"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#1BD741" p-id="20480"></path><path d="M760.2 269.5c-62.1-61.4-144.6-95.2-232.5-95.2-181.1 0-328.5 145.7-328.5 324.8 0 57.2 15.1 113.2 43.9 162.3l-46.6 168.3 174.2-45.2c48.2 25.9 102.1 39.5 157 39.6h0.1c181.1 0 328.6-145.7 328.6-324.8 0.1-86.8-34.1-168.3-96.2-229.8zM527.8 769.3c-49 0-97-13-139.1-37.6l-10-5.9-103.4 26.7 27.6-99.6-6.5-10.2c-27.4-43-42-92.8-41.8-143.6 0-148.9 122.5-270 273.3-270 72.9 0 141.6 28.2 193.2 79.1 51.4 50.6 80.1 119.3 79.9 191-0.1 149-122.6 270.1-273.2 270.1zM677.6 567c-8.2-4.1-48.6-23.7-56.1-26.4-7.5-2.7-13-4.1-18.5 4.1-5.4 8.1-21.2 26.4-26 31.9-4.8 5.4-9.6 6.1-17.7 2.1-8.2-4.1-34.7-12.7-66.1-40.3-24.4-21.5-40.9-48.1-45.7-56.2-4.8-8.1-0.5-12.6 3.6-16.5 3.8-3.6 8.2-9.5 12.3-14.2 4.1-4.7 5.4-8.1 8.2-13.6 2.7-5.4 1.4-10.1-0.6-14.2-2.1-4.1-18.5-44-25.3-60.3-6.6-15.9-13.5-13.7-18.5-13.9-4.8-0.2-10.2-0.2-15.7-0.2-5.4 0-14.4 2-21.9 10.1-7.5 8.1-28.7 27.8-28.7 67.7 0 39.9 29.4 78.5 33.6 84 4.1 5.4 57.9 87.4 140.3 122.5 19.6 8.3 34.8 13.3 46.8 17.1 19.7 6.1 37.6 5.2 51.7 3.2 15.8-2.3 48.6-19.6 55.4-38.5 6.9-18.9 6.9-35.2 4.8-38.5-2.1-3.7-7.6-5.8-15.9-9.9z m0 0" fill="#FFFFFF" p-id="20481"></path></svg>`;
var telegram = `<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="12" fill="#039be5"></circle>
  <path fill="#fff" d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path>
</svg>`;

// docs/.vitepress/ConfigHyde/SocialLinks.ts
var SocialLinks = [
  {
    icon: { svg: gitee },
    link: "https://gitee.com/SeasirHyde/teek-hyde"
  },
  {
    icon: { svg: email },
    link: "mailto:seasir666@gmail.com"
  },
  {
    icon: { svg: WhatsApp },
    link: "https://api.whatsapp.com/send/?phone=13527063419&text=Hello"
  },
  {
    icon: { svg: telegram },
    link: "https://t.me/seasir_Bot"
  },
  {
    icon: "github",
    link: "https://github.com/Kele-Bingtang/vitepress-theme-teek/tree/dev"
  }
];

// docs/.vitepress/ConfigHyde/Comment.ts
var CommentData = {
  // twikoo 配置，官网：https://twikoo.js.org/
  envId: "https://twikoo.seasir.top/",
  // link: "https://cdn.jsdelivr.net/npm/twikoo@1.6.41/dist/twikoo.all.min.js", //teek主题内置
  version: "1.6.42"
  // waline 配置，官网：https://waline.js.org/
  // serverURL: "https://tk.waline.youngkbt.cn/",
  // jsLink: "https://unpkg.com/@waline/client@v3/dist/waline.js",
  // cssLink: "https://unpkg.com/@waline/client@v3/dist/waline.css",
  // giscus 配置，官网：https://giscus.app/zh-CN
  // repo: "Kele-Bingtang/vitepress-theme-teek",
  // repoId: "R_kgDONpVfBA",
  // category: "Announcements",
  // categoryId: "DIC_kwDONpVfBM4Cm3v9",
  // artalk 配置，官网：https://artalk.js.org/
  // server: "",
  // site: "",
};

// docs/.vitepress/ConfigHyde/FooterGroup.ts
var FooterGroup = [
  {
    title: "\u535A\u5BA2",
    links: [
      { name: "\u5168\u90E8\u5206\u7C7B", link: "/categories" },
      { name: "\u5168\u90E8\u6807\u7B7E", link: "/tags" },
      { name: "\u6587\u7AE0\u5F52\u6863", link: "/archivesPage" },
      { name: "\u5168\u90E8\u6E05\u5355", link: "/articleOverview" }
    ]
  },
  {
    title: "\u4E13\u680F",
    links: [
      { name: "TeeK \u4E3B\u9898", link: "/Teek" },
      { name: "Vdoing\u4E3B\u9898", link: "/Vdoing/" },
      { name: "SSL\u8BC1\u4E66", link: "/SSL" }
    ]
  },
  {
    title: "\u9875\u9762",
    links: [
      { name: "\u7545\u6240\u6B32\u8A00", link: "/message-area/" },
      { name: "\u5173\u4E8E\u672C\u7AD9", link: "/about-website/" }
    ]
  },
  {
    title: "\u670D\u52A1",
    links: [
      {
        name: "\u7AD9\u70B9\u7EDF\u8BA1",
        link: "https://umami.seasir.top/share/rvVBNZWa0sUCN6wG/teek.seasir.top"
      },
      { name: "\u7AD9\u70B9\u72B6\u6001", link: "https://status.seasir.top/" }
    ]
  }
];

// docs/.vitepress/ConfigHyde/Wallaper.ts
var Wallpaper = [
  "/home/bg1.webp",
  "/home/bg2.webp",
  "/home/bg3.webp",
  "/home/bg4.webp",
  "/home/bg5.webp",
  "/home/bg6.webp",
  "/home/bg7.webp",
  "/home/bg8.webp",
  "/home/bg9.webp",
  "/home/bg10.webp",
  "/home/bg11.webp",
  "/home/bg12.webp",
  "/home/bg13.webp",
  "/home/bg14.webp",
  "/home/bg15.webp",
  "/home/bg16.webp",
  "/home/bg17.webp",
  "/home/bg18.webp",
  "/home/bg19.webp",
  "/home/bg20.webp",
  "/home/bg21.webp",
  "/home/bg22.webp",
  "/home/bg23.webp",
  "/home/bg24.webp",
  "/home/bg25.webp",
  "/home/bg26.webp",
  "/home/bg27.webp",
  "/home/bg28.webp",
  "/home/bg29.webp",
  "/home/bg30.webp",
  "/home/bg31.webp"
];

// docs/.vitepress/config.mts
import { visualizer } from "file:///D:/code/teek-hyde/node_modules/.pnpm/rollup-plugin-visualizer@5.14.0_rollup@4.38.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import viteImagemin from "file:///D:/code/teek-hyde/node_modules/.pnpm/vite-plugin-imagemin@0.6.1_vite@6.3.2_@types+node@22.14.1_less@4.3.0_sass@1.86.2_terser@5.39.0_/node_modules/vite-plugin-imagemin/dist/index.mjs";
var description2 = ["Hd Security \u4F7F\u7528\u6587\u6863", "\u8BA4\u8BC1\u6846\u67B6"].toString();
var CoverImgList = Wallpaper;
var teekConfig = defineTeekConfig({
  // teekHome: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // teekTheme: true, // 是否使用tk主题，teekHome 和 teekTheme 默认都是 true，可以注释
  // vpHome: true, // 是否使用vp主题，是否启用 VitePress 首页风格，支持 teekHome 和 vpHome 同时存在。
  backTopDone: (TkMessage) => TkMessage.success({
    message: "\u5DF2\u8FBE\u5230\u9876\u90E8\u{1F389}",
    duration: 3e3
  }),
  toCommentDone: (TkMessage) => TkMessage.success({
    message: "\u5DF2\u8FBE\u5230\u8BC4\u8BBA\u533A\u2728",
    duration: 3e3
  }),
  // 新版代码块配置
  codeBlock: {
    disabled: false,
    // 是否禁用新版代码块
    collapseHeight: 700,
    // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
    copiedDone: (TkMessage) => TkMessage.success("\u4EE3\u7801\u5DF2\u590D\u5236 \u{1F389}")
  },
  page: {
    pageSize: 16
    // 每页显示的文章数量
  },
  post: {
    coverImgMode: "full"
    // 封面图模式，default 为默认，full 为全图
  },
  author: { name: "Hyde", link: "https://gitee.com/SeasirHyde/teek-hyde" },
  // 作者信息
  articleAnalyze: {
    imageViewer: { hideOnClickModal: true },
    // 图片预览是否点击遮罩层关闭}
    showIcon: true,
    // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
    dateFormat: "yyyy-MM-dd hh:mm:ss",
    // 文章日期格式，首页和文章页解析日期时使用
    showInfo: true,
    // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
    showAuthor: true,
    // 是否展示作者
    showCreateDate: true,
    // 是否展示创建日期
    showUpdateDate: true,
    // 是否展示更新日期，是否展示更新时间，仅在文章页显示
    showCategory: true,
    // 是否展示分类
    showTag: true,
    // 是否展示标签
    // 将文章信息传到一级标题下面
    teleport: {
      selector: "h1",
      position: "after",
      className: "h1-bottom-info"
    }
  },
  // 超过半年的文章自动提示文章内容可能已过时
  articleTopTip: (frontmatter) => {
    const tip = {
      type: "warning",
      text: "\u6587\u7AE0\u53D1\u5E03\u8F83\u65E9\uFF0C\u5185\u5BB9\u53EF\u80FD\u8FC7\u65F6\uFF0C\u9605\u8BFB\u6CE8\u610F\u7504\u522B\u3002"
    };
    const longTime = 6 * 30 * 24 * 60 * 60 * 1e3;
    if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime)
      return tip;
  },
  // 评论配置
  comment: {
    provider: "twikoo",
    options: CommentData
  },
  // 公告
  notice: {
    enabled: true,
    // 是否启用公告功能
    title: "\u516C\u544A",
    // 公告标题，支持函数式：需要和国际化搭配使用，根据不同语言环境返回不同标题
    initOpen: true,
    duration: 0,
    // 弹框定时自动关闭，0 不自动消失
    mobileMinify: false,
    // 移动端自动最小化
    reopen: true,
    useStorage: false,
    // 是是否使用 localStorage 存储公告状态，如：当打开公告弹框后，下次进来则自动打开弹框
    twinkle: false,
    // 公告图标是否打开闪烁提示
    position: "top"
    // 公告弹框出现位置
    // ...
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      //这条命令注释后，才会让文档和目录的样式保持一致
      collapsed: true,
      //打开侧边栏自动收缩功能
      // ignoreList: ["nav"], //忽略的文件夹和文件
      ignoreWarn: true
      // 忽略警告
    },
    autoFrontmatter: true,
    // 自动生成 frontmatter
    permalinkOption: {
      notFoundDelayLoad: 1e3
      // 1秒后加载
    },
    autoFrontmatterOption: {
      exclude: { title: true, date: true },
      // 排除自动生成字段
      transform: (frontmatter) => {
        if (frontmatter.coverImg) return;
        const list = CoverImgList;
        const coverImg = list[Math.floor(Math.random() * list.length)];
        const transformResult = { ...frontmatter, coverImg };
        return Object.keys(transformResult).length ? transformResult : void 0;
      }
    }
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
      md.use(groupIconMdPlugin);
    }
  },
  // 站点分析
  siteAnalytics: [
    {
      provider: "google",
      options: {
        id: "G-YDTSLB09YH"
      }
    }
    // {
    //   provider: "baidu",
    //   options: {
    //     id: "******",
    //   },
    // },
    // {
    //   provider: "umami",
    //   options: {
    //     id: "******",
    //     src: "**",
    //   },
    // },
  ],
  // 赞赏在文章下方
  appreciation: {
    position: "doc-after",
    options: {
      // buttonHtml: `<button>测试按钮</button>`,
      icon: "weChatPay",
      // 赞赏图标，内置 weChatPay 和 alipay
      expandTitle: "\u6253\u8D4F\u652F\u6301",
      // 展开标题，支持 HTML
      collapseTitle: "\u4E0B\u6B21\u4E00\u5B9A",
      // 折叠标题，支持 HTML
      content: `<img src='/appreciation/WeChatPay.jpg'><img src='/appreciation/Alipay.jpg'>`,
      // 赞赏内容，支持 HTML
      expand: false
      // 是否默认展开，默认 false
    }
  },
  // 赞赏在 文章导航栏下侧
  // appreciation: {
  //   position: "aside-bottom",
  //   options: {
  //     title: `<span style="color: var(--tk-theme-color)">欢迎打赏支持</span>`, // 赞赏标题，支持 HTML
  //     content: `<img src='/appreciation/WeChatPay.jpg'><img src='/appreciation/Alipay.jpg'>`, // 赞赏内容，支持 HTML
  //   },
  // },
  articleShare: { enabled: true },
  // 文章分享
  footerGroup: FooterGroup,
  // 页脚信息组配置
  // 精选文章卡片
  topArticle: {
    enabled: true,
    // 是否启用精选文章卡片
    limit: 5,
    // 一页显示的数量
    autoPage: false,
    // 是否自动翻页
    pageSpeed: 4e3,
    // 翻页间隔时间，单位：毫秒。autoPage 为 true 时生效
    dateFormat: "yyyy-MM-dd hh:mm:ss"
    // 精选文章的日期格式
  },
  themeSize: "large",
  // 风险链接提示页
  riskLink: {
    enabled: true,
    //是否启用风险链接提示功能
    whitelist: ["https://teek.seasir.top/", /https:\/\/github.com/],
    // 白名单，匹配到的链接不提示风险
    blacklist: []
    // 黑名单，匹配到的链接提示风险
  },
  // 私密文章（登录页）
  private: {
    enabled: true,
    // 是否启用私密文章功能
    expire: "1d",
    //可选，登录失效时间，如果不填则以全局配置为准，全局设置默认为 1d
    session: true,
    //可选，开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false
    siteLogin: false,
    //可选，是否使用站点级别登录功能，即第一次进入网站需要验证，默认为 false
    site: [
      {
        username: "teek",
        //用户名
        password: "teek",
        //密码
        role: "common",
        // 角色，common为普通用户，admin为管理员
        expire: "1d",
        // 过期时间，单位：天
        session: true,
        // 可选，开启是否在网页关闭或刷新后，清除登录状态，这样再次访问网页，需要重新登录，默认为 false
        strategy: "always"
        //可选，登录策略，once 代表一次登录，always 代表每次访问都登录，默认为 once
      },
      {
        username: "teek-site-2",
        password: "teek",
        role: "admin",
        expire: "1d",
        session: false,
        strategy: "always"
      }
    ],
    pages: [
      {
        username: "teek",
        password: "teek",
        expire: "1d",
        session: true,
        strategy: "once"
      },
      {
        username: "teek-pages-2",
        password: "teek",
        expire: "1d",
        session: false,
        strategy: "always"
      }
    ]
    // realm: {
    //   blog: [
    //     {
    //       username: "teek-blog-1",
    //       password: "teek",
    //       expire: "1d",
    //       session: true,
    //       strategy: "once",
    //     },
    //     {
    //       username: "teek-blog-2",
    //       password: "teek",
    //       expire: "1d",
    //       session: false,
    //       strategy: "always",
    //     },
    //   ],
    //   comment: [
    //     {
    //       username: "teek-comment-1",
    //       password: "teek",
    //       expire: "1d",
    //       session: true,
    //       strategy: "always",
    //     },
    //     {
    //       username: "teek-comment-2",
    //       password: "teek",
    //       expire: "1d",
    //       session: false,
    //       strategy: "always",
    //     },
    //   ],
    // },
    // onFocus: (value, formName) => {},
    // onBlur: (value, formName) => {},
    // doLogin: (loginInfo, type, nativeExecLogin) => true,
    // doValidate: (type, frontmatter, nativeExecLogin) => true,
    // encrypt: (value, frontmatter) => value,
    // decrypt: (value, frontmatter) => value,
  },
  // 在每个文章页顶部显示 VitePress 容器添加提示，使用场景如超过半年的文章自动提示文章内容可能已过时。
  articleBottomTip: () => {
    return {
      type: "tip",
      title: "\u58F0\u660E",
      text: `<p>\u4F5C\u8005\uFF1AHyde</p>
             <p>\u7248\u6743\uFF1A\u6B64\u6587\u7AE0\u7248\u6743\u5F52 Hyde \u6240\u6709\uFF0C\u5982\u6709\u8F6C\u8F7D\uFF0C\u8BF7\u6CE8\u660E\u51FA\u5904!</p>
             <p style="margin-bottom: 0">\u94FE\u63A5\uFF1A\u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u5206\u4EAB\u6B64\u9875\u9762\u590D\u5236\u6587\u7AE0\u94FE\u63A5</p>
            `
    };
  }
});
var config_default = defineConfig({
  extends: teekConfig,
  base: "/",
  title: "Hyde Blog",
  description: description2,
  cleanUrls: true,
  lastUpdated: true,
  // 显示最后更新时间
  lang: "zh-CN",
  head: HeadData,
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "\u63D0\u793A",
      warningLabel: "\u8B66\u544A",
      dangerLabel: "\u5371\u9669",
      infoLabel: "\u4FE1\u606F",
      detailsLabel: "\u8BE6\u7EC6\u4FE1\u606F"
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.ico",
    darkModeSwitchLabel: "\u4E3B\u9898",
    sidebarMenuLabel: "\u83DC\u5355",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0\u65F6\u95F4",
    outline: {
      level: [2, 4],
      label: "\u672C\u9875\u5BFC\u822A"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    nav: Nav2,
    // 导航栏配置
    socialLinks: SocialLinks,
    // 社交链接配置
    search: {
      provider: "local"
    },
    editLink: {
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875",
      pattern: "https://github.com/Kele-Bingtang/hd-security/edit/master/hd-security-docs/docs/:path"
    }
  },
  vite: {
    plugins: [
      groupIconVitePlugin(),
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        mozjpeg: { quality: 70 },
        pngquant: { quality: [0.7, 0.8] },
        svgo: {
          plugins: [
            { name: "removeViewBox" },
            { name: "removeEmptyAttrs", active: false }
          ]
        }
      })
    ],
    server: {
      // host: "127.0.0.1", // 指定服务器应该监听哪个 IP 地址
      // port: 5173, // 指定开发服务器端口
      // strictPort: true, // 若端口已被占用则会直接退出
      // open: true, // 运行后自动打开网页
    },
    build: {
      chunkSizeWarningLimit: 1500,
      // 限制警告的块大小
      assetsInlineLimit: 4096,
      // 小于 4KB 的字体转为 base64
      minify: "terser",
      // 使用 Terser 进行代码压缩
      rollupOptions: {
        plugins: [
          visualizer({
            filename: "../stats.html",
            open: false,
            // 打包后自动打开报告
            gzipSize: true,
            // 压缩大小
            brotliSize: true
          })
        ],
        output: {
          manualChunks: {
            theme: ["vitepress-theme-teek"]
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          // 移除所有 console.* 调用（生产环境建议开启）
          drop_debugger: true,
          // 移除 debugger 语句（生产环境必备）
          pure_funcs: ["console.info"],
          // 保留 console.info 调用（白名单机制）
          dead_code: true,
          // 移除不可达代码（消除死代码）
          arrows: true,
          // 将 function 转换为箭头函数（优化代码体积）
          unused: true,
          // 移除未使用的变量/函数（需确保不影响程序逻辑）
          join_vars: true,
          // 合并连续 var 声明（优化作用域）
          collapse_vars: true
          // 内联单次使用的变量（体积优化）
        },
        format: {
          comments: false,
          // 移除所有注释（保留版权声明需使用正则表达式）
          beautify: false,
          // 禁用代码美化（进一步减小体积）
          preamble: "/* \u9879\u76EE\u7248\u672C 1.0.0 */"
          // 文件头部添加版权声明（需遵守 MIT 协议）
        },
        mangle: {
          toplevel: true,
          // 混淆顶级作用域变量名（保留 class/function 名称）
          properties: false
          // 保留对象属性名（防止破坏 DOM 属性绑定）
        }
      }
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL0NvbmZpZ0h5ZGUvaWNvbi9TdmdpY29uLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL2ljb24vTmF2SWNvbi50cyIsICJkb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9OYXYudHMiLCAiZG9jcy8udml0ZXByZXNzL0NvbmZpZ0h5ZGUvSGVhZC50cyIsICJkb2NzLy52aXRlcHJlc3MvdGhlbWUvaWNvbi9pY29ucy50cyIsICJkb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9Tb2NpYWxMaW5rcy50cyIsICJkb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9Db21tZW50LnRzIiwgImRvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL0Zvb3Rlckdyb3VwLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL1dhbGxhcGVyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZWVrLWh5ZGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnLm10c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS90ZWVrLWh5ZGUvZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcbmltcG9ydCB7IGRlZmluZVRlZWtDb25maWcgfSBmcm9tIFwidml0ZXByZXNzLXRoZW1lLXRlZWsvY29uZmlnXCI7XHJcbi8vIGltcG9ydCBcInZpdGVwcmVzcy10aGVtZS10ZWVrL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGdyb3VwSWNvbk1kUGx1Z2luLFxyXG4gIGdyb3VwSWNvblZpdGVQbHVnaW4sXHJcbn0gZnJvbSBcInZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnNcIjsgLy8gXHU1QkZDXHU1MTY1XHU0RUUzXHU3ODAxXHU3RUM0XHU1NkZFXHU2ODA3XHU2M0QyXHU0RUY2XHJcbmltcG9ydCB0aW1lbGluZSBmcm9tIFwidml0ZXByZXNzLW1hcmtkb3duLXRpbWVsaW5lXCI7IC8vIFx1NUJGQ1x1NTE2NVx1NjVGNlx1OTVGNFx1N0VCRlx1NjNEMlx1NEVGNlxyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi9Db25maWdIeWRlL05hdlwiOyAvLyBcdTVCRkNcdTUxNjVOYXZcdTZBMjFcdTU3NTdcclxuaW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiOyAvLyBcdTU3MjhcdTY1ODdcdTRFRjZcdTk4NzZcdTkwRThcdTZERkJcdTUyQTBcdTdDN0JcdTU3OEJcdTVCRkNcdTUxNjVcclxuaW1wb3J0IHsgSGVhZERhdGEgfSBmcm9tIFwiLi9Db25maWdIeWRlL0hlYWRcIjsgLy8gXHU1QkZDXHU1MTY1IEhlYWREYXRhIFx1NUJGQ1x1NTE2NVx1NTQ4Q1x1N0M3Qlx1NTc4Qlx1NjVBRFx1OEEwMFxyXG5pbXBvcnQgeyBTb2NpYWxMaW5rcyB9IGZyb20gXCIuL0NvbmZpZ0h5ZGUvU29jaWFsTGlua3NcIjsgLy9cdTVCRkNcdTUxNjVcdTc5M0VcdTRFQTRcdTk0RkVcdTYzQTVcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgQ29tbWVudERhdGEgfSBmcm9tIFwiLi9Db25maWdIeWRlL0NvbW1lbnRcIjsgLy9cdTVCRkNcdTUxNjVcdThCQzRcdThCQkFcdTkxNERcdTdGNkVcclxuaW1wb3J0IHsgRm9vdGVyR3JvdXAgfSBmcm9tIFwiLi9Db25maWdIeWRlL0Zvb3Rlckdyb3VwXCI7IC8vXHU1QkZDXHU1MTY1XHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGXHU3RUM0XHU5MTREXHU3RjZFXHJcbmltcG9ydCB7IFdhbGxwYXBlciB9IGZyb20gXCIuL0NvbmZpZ0h5ZGUvV2FsbGFwZXJcIjsgLy8gXHU1QkZDXHU1MTY1V2FsbGFwZXJcdTZBMjFcdTU3NTdcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjsgLy8gXHU1QkZDXHU1MTY1XHU1M0VGXHU4OUM2XHU1MzE2XHU1MjA2XHU2NzkwXHU2M0QyXHU0RUY2XHJcbmltcG9ydCB2aXRlSW1hZ2VtaW4gZnJvbSBcInZpdGUtcGx1Z2luLWltYWdlbWluXCI7IC8vIFx1NUJGQ1x1NTE2NVx1NTZGRVx1NzI0N1x1NTM4Qlx1N0YyOVx1NjNEMlx1NEVGNlxyXG5cclxuY29uc3QgZGVzY3JpcHRpb24gPSBbXCJIZCBTZWN1cml0eSBcdTRGN0ZcdTc1MjhcdTY1ODdcdTY4NjNcIiwgXCJcdThCQTRcdThCQzFcdTY4NDZcdTY3QjZcIl0udG9TdHJpbmcoKTtcclxuY29uc3QgQ292ZXJJbWdMaXN0ID0gV2FsbHBhcGVyOyAvLyBcdTgzQjdcdTUzRDZcdTU4QzFcdTdFQjhcdTUyMTdcdTg4NjhcclxuXHJcbmNvbnN0IHRlZWtDb25maWcgPSBkZWZpbmVUZWVrQ29uZmlnKHtcclxuICAvLyB0ZWVrSG9tZTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU0RjdGXHU3NTI4dGtcdTRFM0JcdTk4OThcdUZGMEN0ZWVrSG9tZSBcdTU0OEMgdGVla1RoZW1lIFx1OUVEOFx1OEJBNFx1OTBGRFx1NjYyRiB0cnVlXHVGRjBDXHU1M0VGXHU0RUU1XHU2Q0U4XHU5MUNBXHJcbiAgLy8gdGVla1RoZW1lOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTRGN0ZcdTc1Mjh0a1x1NEUzQlx1OTg5OFx1RkYwQ3RlZWtIb21lIFx1NTQ4QyB0ZWVrVGhlbWUgXHU5RUQ4XHU4QkE0XHU5MEZEXHU2NjJGIHRydWVcdUZGMENcdTUzRUZcdTRFRTVcdTZDRThcdTkxQ0FcclxuICAvLyB2cEhvbWU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NEY3Rlx1NzUyOHZwXHU0RTNCXHU5ODk4XHVGRjBDXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4IFZpdGVQcmVzcyBcdTk5OTZcdTk4NzVcdTk4Q0VcdTY4M0NcdUZGMENcdTY1MkZcdTYzMDEgdGVla0hvbWUgXHU1NDhDIHZwSG9tZSBcdTU0MENcdTY1RjZcdTVCNThcdTU3MjhcdTMwMDJcclxuICBiYWNrVG9wRG9uZTogKFRrTWVzc2FnZSkgPT5cclxuICAgIFRrTWVzc2FnZS5zdWNjZXNzKHtcclxuICAgICAgbWVzc2FnZTogXCJcdTVERjJcdThGQkVcdTUyMzBcdTk4NzZcdTkwRThcdUQ4M0NcdURGODlcIixcclxuICAgICAgZHVyYXRpb246IDMwMDAsXHJcbiAgICB9KSxcclxuICB0b0NvbW1lbnREb25lOiAoVGtNZXNzYWdlKSA9PlxyXG4gICAgVGtNZXNzYWdlLnN1Y2Nlc3Moe1xyXG4gICAgICBtZXNzYWdlOiBcIlx1NURGMlx1OEZCRVx1NTIzMFx1OEJDNFx1OEJCQVx1NTMzQVx1MjcyOFwiLFxyXG4gICAgICBkdXJhdGlvbjogMzAwMCxcclxuICAgIH0pLFxyXG4gIC8vIFx1NjVCMFx1NzI0OFx1NEVFM1x1NzgwMVx1NTc1N1x1OTE0RFx1N0Y2RVxyXG4gIGNvZGVCbG9jazoge1xyXG4gICAgZGlzYWJsZWQ6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTc5ODFcdTc1MjhcdTY1QjBcdTcyNDhcdTRFRTNcdTc4MDFcdTU3NTdcclxuICAgIGNvbGxhcHNlSGVpZ2h0OiA3MDAsIC8vIFx1OEQ4NVx1NTFGQVx1OUFEOFx1NUVBNlx1NTQwRVx1ODFFQVx1NTJBOFx1NjI5OFx1NTNFMFx1RkYwQ1x1OEJCRVx1N0Y2RSB0cnVlIFx1NTIxOVx1OUVEOFx1OEJBNFx1NjI5OFx1NTNFMFx1RkYwQ2ZhbHNlIFx1NTIxOVx1OUVEOFx1OEJBNFx1NEUwRFx1NjI5OFx1NTNFMFxyXG4gICAgY29waWVkRG9uZTogKFRrTWVzc2FnZSkgPT4gVGtNZXNzYWdlLnN1Y2Nlc3MoXCJcdTRFRTNcdTc4MDFcdTVERjJcdTU5MERcdTUyMzYgXHVEODNDXHVERjg5XCIpLFxyXG4gIH0sXHJcbiAgcGFnZToge1xyXG4gICAgcGFnZVNpemU6IDE2LCAvLyBcdTZCQ0ZcdTk4NzVcdTY2M0VcdTc5M0FcdTc2ODRcdTY1ODdcdTdBRTBcdTY1NzBcdTkxQ0ZcclxuICB9LFxyXG4gIHBvc3Q6IHtcclxuICAgIGNvdmVySW1nTW9kZTogXCJmdWxsXCIsIC8vIFx1NUMwMVx1OTc2Mlx1NTZGRVx1NkEyMVx1NUYwRlx1RkYwQ2RlZmF1bHQgXHU0RTNBXHU5RUQ4XHU4QkE0XHVGRjBDZnVsbCBcdTRFM0FcdTUxNjhcdTU2RkVcclxuICB9LFxyXG4gIGF1dGhvcjogeyBuYW1lOiBcIkh5ZGVcIiwgbGluazogXCJodHRwczovL2dpdGVlLmNvbS9TZWFzaXJIeWRlL3RlZWstaHlkZVwiIH0sIC8vIFx1NEY1Q1x1ODAwNVx1NEZFMVx1NjA2RlxyXG4gIGFydGljbGVBbmFseXplOiB7XHJcbiAgICBpbWFnZVZpZXdlcjogeyBoaWRlT25DbGlja01vZGFsOiB0cnVlIH0sIC8vIFx1NTZGRVx1NzI0N1x1OTg4NFx1ODlDOFx1NjYyRlx1NTQyNlx1NzBCOVx1NTFGQlx1OTA2RVx1N0Y2OVx1NUM0Mlx1NTE3M1x1OTVFRH1cclxuICAgIHNob3dJY29uOiB0cnVlLCAvLyBcdTRGNUNcdTgwMDVcdTMwMDFcdTY1RTVcdTY3MUZcdTMwMDFcdTUyMDZcdTdDN0JcdTMwMDFcdTY4MDdcdTdCN0VcdTMwMDFcdTVCNTdcdTY1NzBcdTMwMDFcdTk2MDVcdThCRkJcdTY1RjZcdTk1N0ZcdTMwMDFcdTZENEZcdTg5QzhcdTkxQ0ZcdTdCNDlcdTY1ODdcdTdBRTBcdTRGRTFcdTYwNkZcdTc2ODRcdTU2RkVcdTY4MDdcdTY2MkZcdTU0MjZcdTY2M0VcdTc5M0FcclxuICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1NTS1kZCBoaDptbTpzc1wiLCAvLyBcdTY1ODdcdTdBRTBcdTY1RTVcdTY3MUZcdTY4M0NcdTVGMEZcdUZGMENcdTk5OTZcdTk4NzVcdTU0OENcdTY1ODdcdTdBRTBcdTk4NzVcdTg5RTNcdTY3OTBcdTY1RTVcdTY3MUZcdTY1RjZcdTRGN0ZcdTc1MjhcclxuICAgIHNob3dJbmZvOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVDNTVcdTc5M0FcdTRGNUNcdTgwMDVcdTMwMDFcdTY1RTVcdTY3MUZcdTMwMDFcdTUyMDZcdTdDN0JcdTMwMDFcdTY4MDdcdTdCN0VcdTMwMDFcdTVCNTdcdTY1NzBcdTMwMDFcdTk2MDVcdThCRkJcdTY1RjZcdTk1N0ZcdTMwMDFcdTZENEZcdTg5QzhcdTkxQ0ZcdTdCNDlcdTY1ODdcdTdBRTBcdTRGRTFcdTYwNkZcdUZGMENcdTUyMDZcdTUyMkJcdTRGNUNcdTc1MjhcdTRFOEVcdTk5OTZcdTk4NzVcdTU0OENcdTY1ODdcdTdBRTBcdTk4NzVcclxuICAgIHNob3dBdXRob3I6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NEY1Q1x1ODAwNVxyXG4gICAgc2hvd0NyZWF0ZURhdGU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NTIxQlx1NUVGQVx1NjVFNVx1NjcxRlxyXG4gICAgc2hvd1VwZGF0ZURhdGU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NjZGNFx1NjVCMFx1NjVFNVx1NjcxRlx1RkYwQ1x1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NjZGNFx1NjVCMFx1NjVGNlx1OTVGNFx1RkYwQ1x1NEVDNVx1NTcyOFx1NjU4N1x1N0FFMFx1OTg3NVx1NjYzRVx1NzkzQVxyXG4gICAgc2hvd0NhdGVnb3J5OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTVDNTVcdTc5M0FcdTUyMDZcdTdDN0JcclxuICAgIHNob3dUYWc6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NUM1NVx1NzkzQVx1NjgwN1x1N0I3RVxyXG4gICAgLy8gXHU1QzA2XHU2NTg3XHU3QUUwXHU0RkUxXHU2MDZGXHU0RjIwXHU1MjMwXHU0RTAwXHU3RUE3XHU2ODA3XHU5ODk4XHU0RTBCXHU5NzYyXHJcbiAgICB0ZWxlcG9ydDoge1xyXG4gICAgICBzZWxlY3RvcjogXCJoMVwiLFxyXG4gICAgICBwb3NpdGlvbjogXCJhZnRlclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwiaDEtYm90dG9tLWluZm9cIixcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBcdThEODVcdThGQzdcdTUzNEFcdTVFNzRcdTc2ODRcdTY1ODdcdTdBRTBcdTgxRUFcdTUyQThcdTYzRDBcdTc5M0FcdTY1ODdcdTdBRTBcdTUxODVcdTVCQjlcdTUzRUZcdTgwRkRcdTVERjJcdThGQzdcdTY1RjZcclxuICBhcnRpY2xlVG9wVGlwOiAoZnJvbnRtYXR0ZXIpID0+IHtcclxuICAgIGNvbnN0IHRpcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgIHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU1M0QxXHU1RTAzXHU4RjgzXHU2NUU5XHVGRjBDXHU1MTg1XHU1QkI5XHU1M0VGXHU4MEZEXHU4RkM3XHU2NUY2XHVGRjBDXHU5NjA1XHU4QkZCXHU2Q0U4XHU2MTBGXHU3NTA0XHU1MjJCXHUzMDAyXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFx1NTkyN1x1NEU4RVx1NTM0QVx1NUU3NFx1RkYwQ1x1NkRGQlx1NTJBMFx1NjNEMFx1NzkzQVxyXG4gICAgY29uc3QgbG9uZ1RpbWUgPSA2ICogMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG4gICAgaWYgKFxyXG4gICAgICBmcm9udG1hdHRlci5kYXRlICYmXHJcbiAgICAgIERhdGUubm93KCkgLSBuZXcgRGF0ZShmcm9udG1hdHRlci5kYXRlKS5nZXRUaW1lKCkgPiBsb25nVGltZVxyXG4gICAgKVxyXG4gICAgICByZXR1cm4gdGlwO1xyXG4gIH0sXHJcbiAgLy8gXHU4QkM0XHU4QkJBXHU5MTREXHU3RjZFXHJcbiAgY29tbWVudDoge1xyXG4gICAgcHJvdmlkZXI6IFwidHdpa29vXCIsXHJcbiAgICBvcHRpb25zOiBDb21tZW50RGF0YSxcclxuICB9LFxyXG4gIC8vIFx1NTE2Q1x1NTQ0QVxyXG4gIG5vdGljZToge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU1MTZDXHU1NDRBXHU1MjlGXHU4MEZEXHJcbiAgICB0aXRsZTogXCJcdTUxNkNcdTU0NEFcIiwgLy8gXHU1MTZDXHU1NDRBXHU2ODA3XHU5ODk4XHVGRjBDXHU2NTJGXHU2MzAxXHU1MUZEXHU2NTcwXHU1RjBGXHVGRjFBXHU5NzAwXHU4OTgxXHU1NDhDXHU1NkZEXHU5NjQ1XHU1MzE2XHU2NDJEXHU5MTREXHU0RjdGXHU3NTI4XHVGRjBDXHU2ODM5XHU2MzZFXHU0RTBEXHU1NDBDXHU4QkVEXHU4QTAwXHU3M0FGXHU1ODgzXHU4RkQ0XHU1NkRFXHU0RTBEXHU1NDBDXHU2ODA3XHU5ODk4XHJcbiAgICBpbml0T3BlbjogdHJ1ZSxcclxuICAgIGR1cmF0aW9uOiAwLCAvLyBcdTVGMzlcdTY4NDZcdTVCOUFcdTY1RjZcdTgxRUFcdTUyQThcdTUxNzNcdTk1RURcdUZGMEMwIFx1NEUwRFx1ODFFQVx1NTJBOFx1NkQ4OFx1NTkzMVxyXG4gICAgbW9iaWxlTWluaWZ5OiBmYWxzZSwgLy8gXHU3OUZCXHU1MkE4XHU3QUVGXHU4MUVBXHU1MkE4XHU2NzAwXHU1QzBGXHU1MzE2XHJcbiAgICByZW9wZW46IHRydWUsXHJcbiAgICB1c2VTdG9yYWdlOiBmYWxzZSwgLy8gXHU2NjJGXHU2NjJGXHU1NDI2XHU0RjdGXHU3NTI4IGxvY2FsU3RvcmFnZSBcdTVCNThcdTUwQThcdTUxNkNcdTU0NEFcdTcyQjZcdTYwMDFcdUZGMENcdTU5ODJcdUZGMUFcdTVGNTNcdTYyNTNcdTVGMDBcdTUxNkNcdTU0NEFcdTVGMzlcdTY4NDZcdTU0MEVcdUZGMENcdTRFMEJcdTZCMjFcdThGREJcdTY3NjVcdTUyMTlcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTVGMzlcdTY4NDZcclxuICAgIHR3aW5rbGU6IGZhbHNlLCAvLyBcdTUxNkNcdTU0NEFcdTU2RkVcdTY4MDdcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTk1RUFcdTcwQzFcdTYzRDBcdTc5M0FcclxuICAgIHBvc2l0aW9uOiBcInRvcFwiLCAvLyBcdTUxNkNcdTU0NEFcdTVGMzlcdTY4NDZcdTUxRkFcdTczQjBcdTRGNERcdTdGNkVcclxuICAgIC8vIC4uLlxyXG4gIH0sXHJcbiAgdml0ZVBsdWdpbnM6IHtcclxuICAgIHNpZGViYXJPcHRpb246IHtcclxuICAgICAgaW5pdEl0ZW1zOiBmYWxzZSwgLy9cdThGRDlcdTY3NjFcdTU0N0RcdTRFRTRcdTZDRThcdTkxQ0FcdTU0MEVcdUZGMENcdTYyNERcdTRGMUFcdThCQTlcdTY1ODdcdTY4NjNcdTU0OENcdTc2RUVcdTVGNTVcdTc2ODRcdTY4MzdcdTVGMEZcdTRGRERcdTYzMDFcdTRFMDBcdTgxRjRcclxuICAgICAgY29sbGFwc2VkOiB0cnVlLCAvL1x1NjI1M1x1NUYwMFx1NEZBN1x1OEZCOVx1NjgwRlx1ODFFQVx1NTJBOFx1NjUzNlx1N0YyOVx1NTI5Rlx1ODBGRFxyXG4gICAgICAvLyBpZ25vcmVMaXN0OiBbXCJuYXZcIl0sIC8vXHU1RkZEXHU3NTY1XHU3Njg0XHU2NTg3XHU0RUY2XHU1OTM5XHU1NDhDXHU2NTg3XHU0RUY2XHJcbiAgICAgIGlnbm9yZVdhcm46IHRydWUsIC8vIFx1NUZGRFx1NzU2NVx1OEI2Nlx1NTQ0QVxyXG4gICAgfSxcclxuICAgIGF1dG9Gcm9udG1hdHRlcjogdHJ1ZSwgLy8gXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwIGZyb250bWF0dGVyXHJcbiAgICBwZXJtYWxpbmtPcHRpb246IHtcclxuICAgICAgbm90Rm91bmREZWxheUxvYWQ6IDEwMDAsIC8vIDFcdTc5RDJcdTU0MEVcdTUyQTBcdThGN0RcclxuICAgIH0sXHJcblxyXG4gICAgYXV0b0Zyb250bWF0dGVyT3B0aW9uOiB7XHJcbiAgICAgIGV4Y2x1ZGU6IHsgdGl0bGU6IHRydWUsIGRhdGU6IHRydWUgfSwgLy8gXHU2MzkyXHU5NjY0XHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwXHU1QjU3XHU2QkI1XHJcbiAgICAgIHRyYW5zZm9ybTogKGZyb250bWF0dGVyKSA9PiB7XHJcbiAgICAgICAgLy8gXHU1OTgyXHU2NzlDXHU2NTg3XHU0RUY2XHU2NzJDXHU4RUFCXHU1QjU4XHU1NzI4XHU0RTg2IGNvdmVySW1nXHVGRjBDXHU1MjE5XHU0RTBEXHU3NTFGXHU2MjEwXHJcbiAgICAgICAgaWYgKGZyb250bWF0dGVyLmNvdmVySW1nKSByZXR1cm47IC8vIFx1OTY4Rlx1NjczQVx1ODNCN1x1NTNENiBjb3ZlckltZ1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gQ292ZXJJbWdMaXN0O1xyXG5cclxuICAgICAgICBjb25zdCBjb3ZlckltZyA9IGxpc3RbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpXTtcclxuXHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtUmVzdWx0ID0geyAuLi5mcm9udG1hdHRlciwgY292ZXJJbWcgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRyYW5zZm9ybVJlc3VsdCkubGVuZ3RoXHJcbiAgICAgICAgICA/IHRyYW5zZm9ybVJlc3VsdFxyXG4gICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBjb25maWc6IChtZCkgPT4ge1xyXG4gICAgICBtZC51c2UodGltZWxpbmUpOyAvL1x1NjVGNlx1OTVGNFx1N0VCRlx1NjNEMlx1NEVGNlxyXG4gICAgICBtZC51c2UoZ3JvdXBJY29uTWRQbHVnaW4pOyAvLyBcdTRFRTNcdTc4MDFcdTdFQzRcdTU2RkVcdTY4MDdcdTYzRDJcdTRFRjZcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyBcdTdBRDlcdTcwQjlcdTUyMDZcdTY3OTBcclxuICBzaXRlQW5hbHl0aWNzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGVyOiBcImdvb2dsZVwiLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgaWQ6IFwiRy1ZRFRTTEIwOVlIXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBwcm92aWRlcjogXCJiYWlkdVwiLFxyXG4gICAgLy8gICBvcHRpb25zOiB7XHJcbiAgICAvLyAgICAgaWQ6IFwiKioqKioqXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICBwcm92aWRlcjogXCJ1bWFtaVwiLFxyXG4gICAgLy8gICBvcHRpb25zOiB7XHJcbiAgICAvLyAgICAgaWQ6IFwiKioqKioqXCIsXHJcbiAgICAvLyAgICAgc3JjOiBcIioqXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIF0sXHJcbiAgLy8gXHU4RDVFXHU4RDRGXHU1NzI4XHU2NTg3XHU3QUUwXHU0RTBCXHU2NUI5XHJcbiAgYXBwcmVjaWF0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogXCJkb2MtYWZ0ZXJcIixcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgLy8gYnV0dG9uSHRtbDogYDxidXR0b24+XHU2RDRCXHU4QkQ1XHU2MzA5XHU5NEFFPC9idXR0b24+YCxcclxuICAgICAgaWNvbjogXCJ3ZUNoYXRQYXlcIiwgLy8gXHU4RDVFXHU4RDRGXHU1NkZFXHU2ODA3XHVGRjBDXHU1MTg1XHU3RjZFIHdlQ2hhdFBheSBcdTU0OEMgYWxpcGF5XHJcbiAgICAgIGV4cGFuZFRpdGxlOiBcIlx1NjI1M1x1OEQ0Rlx1NjUyRlx1NjMwMVwiLCAvLyBcdTVDNTVcdTVGMDBcdTY4MDdcdTk4OThcdUZGMENcdTY1MkZcdTYzMDEgSFRNTFxyXG4gICAgICBjb2xsYXBzZVRpdGxlOiBcIlx1NEUwQlx1NkIyMVx1NEUwMFx1NUI5QVwiLCAvLyBcdTYyOThcdTUzRTBcdTY4MDdcdTk4OThcdUZGMENcdTY1MkZcdTYzMDEgSFRNTFxyXG4gICAgICBjb250ZW50OiBgPGltZyBzcmM9Jy9hcHByZWNpYXRpb24vV2VDaGF0UGF5LmpwZyc+PGltZyBzcmM9Jy9hcHByZWNpYXRpb24vQWxpcGF5LmpwZyc+YCwgLy8gXHU4RDVFXHU4RDRGXHU1MTg1XHU1QkI5XHVGRjBDXHU2NTJGXHU2MzAxIEhUTUxcclxuICAgICAgZXhwYW5kOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU5RUQ4XHU4QkE0XHU1QzU1XHU1RjAwXHVGRjBDXHU5RUQ4XHU4QkE0IGZhbHNlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gXHU4RDVFXHU4RDRGXHU1NzI4IFx1NjU4N1x1N0FFMFx1NUJGQ1x1ODIyQVx1NjgwRlx1NEUwQlx1NEZBN1xyXG4gIC8vIGFwcHJlY2lhdGlvbjoge1xyXG4gIC8vICAgcG9zaXRpb246IFwiYXNpZGUtYm90dG9tXCIsXHJcbiAgLy8gICBvcHRpb25zOiB7XHJcbiAgLy8gICAgIHRpdGxlOiBgPHNwYW4gc3R5bGU9XCJjb2xvcjogdmFyKC0tdGstdGhlbWUtY29sb3IpXCI+XHU2QjIyXHU4RkNFXHU2MjUzXHU4RDRGXHU2NTJGXHU2MzAxPC9zcGFuPmAsIC8vIFx1OEQ1RVx1OEQ0Rlx1NjgwN1x1OTg5OFx1RkYwQ1x1NjUyRlx1NjMwMSBIVE1MXHJcbiAgLy8gICAgIGNvbnRlbnQ6IGA8aW1nIHNyYz0nL2FwcHJlY2lhdGlvbi9XZUNoYXRQYXkuanBnJz48aW1nIHNyYz0nL2FwcHJlY2lhdGlvbi9BbGlwYXkuanBnJz5gLCAvLyBcdThENUVcdThENEZcdTUxODVcdTVCQjlcdUZGMENcdTY1MkZcdTYzMDEgSFRNTFxyXG4gIC8vICAgfSxcclxuICAvLyB9LFxyXG4gIGFydGljbGVTaGFyZTogeyBlbmFibGVkOiB0cnVlIH0sIC8vIFx1NjU4N1x1N0FFMFx1NTIwNlx1NEVBQlxyXG4gIGZvb3Rlckdyb3VwOiBGb290ZXJHcm91cCwgLy8gXHU5ODc1XHU4MTFBXHU0RkUxXHU2MDZGXHU3RUM0XHU5MTREXHU3RjZFXHJcbiAgLy8gXHU3Q0JFXHU5MDA5XHU2NTg3XHU3QUUwXHU1MzYxXHU3MjQ3XHJcbiAgdG9wQXJ0aWNsZToge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU1NDJGXHU3NTI4XHU3Q0JFXHU5MDA5XHU2NTg3XHU3QUUwXHU1MzYxXHU3MjQ3XHJcbiAgICBsaW1pdDogNSwgLy8gXHU0RTAwXHU5ODc1XHU2NjNFXHU3OTNBXHU3Njg0XHU2NTcwXHU5MUNGXHJcbiAgICBhdXRvUGFnZTogZmFsc2UsIC8vIFx1NjYyRlx1NTQyNlx1ODFFQVx1NTJBOFx1N0ZGQlx1OTg3NVxyXG4gICAgcGFnZVNwZWVkOiA0MDAwLCAvLyBcdTdGRkJcdTk4NzVcdTk1RjRcdTk2OTRcdTY1RjZcdTk1RjRcdUZGMENcdTUzNTVcdTRGNERcdUZGMUFcdTZCRUJcdTc5RDJcdTMwMDJhdXRvUGFnZSBcdTRFM0EgdHJ1ZSBcdTY1RjZcdTc1MUZcdTY1NDhcclxuICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1NTS1kZCBoaDptbTpzc1wiLCAvLyBcdTdDQkVcdTkwMDlcdTY1ODdcdTdBRTBcdTc2ODRcdTY1RTVcdTY3MUZcdTY4M0NcdTVGMEZcclxuICB9LFxyXG4gIHRoZW1lU2l6ZTogXCJsYXJnZVwiLFxyXG4gIC8vIFx1OThDRVx1OTY2OVx1OTRGRVx1NjNBNVx1NjNEMFx1NzkzQVx1OTg3NVxyXG4gIHJpc2tMaW5rOiB7XHJcbiAgICBlbmFibGVkOiB0cnVlLCAvL1x1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1OThDRVx1OTY2OVx1OTRGRVx1NjNBNVx1NjNEMFx1NzkzQVx1NTI5Rlx1ODBGRFxyXG4gICAgd2hpdGVsaXN0OiBbXCJodHRwczovL3RlZWsuc2Vhc2lyLnRvcC9cIiwgL2h0dHBzOlxcL1xcL2dpdGh1Yi5jb20vXSwgLy8gXHU3NjdEXHU1NDBEXHU1MzU1XHVGRjBDXHU1MzM5XHU5MTREXHU1MjMwXHU3Njg0XHU5NEZFXHU2M0E1XHU0RTBEXHU2M0QwXHU3OTNBXHU5OENFXHU5NjY5XHJcbiAgICBibGFja2xpc3Q6IFtdLCAvLyBcdTlFRDFcdTU0MERcdTUzNTVcdUZGMENcdTUzMzlcdTkxNERcdTUyMzBcdTc2ODRcdTk0RkVcdTYzQTVcdTYzRDBcdTc5M0FcdTk4Q0VcdTk2NjlcclxuICB9LFxyXG4gIC8vIFx1NzlDMVx1NUJDNlx1NjU4N1x1N0FFMFx1RkYwOFx1NzY3Qlx1NUY1NVx1OTg3NVx1RkYwOVxyXG4gIHByaXZhdGU6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NTQyRlx1NzUyOFx1NzlDMVx1NUJDNlx1NjU4N1x1N0FFMFx1NTI5Rlx1ODBGRFxyXG4gICAgZXhwaXJlOiBcIjFkXCIsIC8vXHU1M0VGXHU5MDA5XHVGRjBDXHU3NjdCXHU1RjU1XHU1OTMxXHU2NTQ4XHU2NUY2XHU5NUY0XHVGRjBDXHU1OTgyXHU2NzlDXHU0RTBEXHU1ODZCXHU1MjE5XHU0RUU1XHU1MTY4XHU1QzQwXHU5MTREXHU3RjZFXHU0RTNBXHU1MUM2XHVGRjBDXHU1MTY4XHU1QzQwXHU4QkJFXHU3RjZFXHU5RUQ4XHU4QkE0XHU0RTNBIDFkXHJcbiAgICBzZXNzaW9uOiB0cnVlLCAvL1x1NTNFRlx1OTAwOVx1RkYwQ1x1NUYwMFx1NTQyRlx1NjYyRlx1NTQyNlx1NTcyOFx1N0Y1MVx1OTg3NVx1NTE3M1x1OTVFRFx1NjIxNlx1NTIzN1x1NjVCMFx1NTQwRVx1RkYwQ1x1NkUwNVx1OTY2NFx1NzY3Qlx1NUY1NVx1NzJCNlx1NjAwMVx1RkYwQ1x1OEZEOVx1NjgzN1x1NTE4RFx1NkIyMVx1OEJCRlx1OTVFRVx1N0Y1MVx1OTg3NVx1RkYwQ1x1OTcwMFx1ODk4MVx1OTFDRFx1NjVCMFx1NzY3Qlx1NUY1NVx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBmYWxzZVxyXG4gICAgc2l0ZUxvZ2luOiBmYWxzZSwgLy9cdTUzRUZcdTkwMDlcdUZGMENcdTY2MkZcdTU0MjZcdTRGN0ZcdTc1MjhcdTdBRDlcdTcwQjlcdTdFQTdcdTUyMkJcdTc2N0JcdTVGNTVcdTUyOUZcdTgwRkRcdUZGMENcdTUzNzNcdTdCMkNcdTRFMDBcdTZCMjFcdThGREJcdTUxNjVcdTdGNTFcdTdBRDlcdTk3MDBcdTg5ODFcdTlBOENcdThCQzFcdUZGMENcdTlFRDhcdThCQTRcdTRFM0EgZmFsc2VcclxuICAgIHNpdGU6IFtcclxuICAgICAge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcInRlZWtcIiwgLy9cdTc1MjhcdTYyMzdcdTU0MERcclxuICAgICAgICBwYXNzd29yZDogXCJ0ZWVrXCIsIC8vXHU1QkM2XHU3ODAxXHJcbiAgICAgICAgcm9sZTogXCJjb21tb25cIiwgLy8gXHU4OUQyXHU4MjcyXHVGRjBDY29tbW9uXHU0RTNBXHU2NjZFXHU5MDFBXHU3NTI4XHU2MjM3XHVGRjBDYWRtaW5cdTRFM0FcdTdCQTFcdTc0MDZcdTU0NThcclxuICAgICAgICBleHBpcmU6IFwiMWRcIiwgLy8gXHU4RkM3XHU2NzFGXHU2NUY2XHU5NUY0XHVGRjBDXHU1MzU1XHU0RjREXHVGRjFBXHU1OTI5XHJcbiAgICAgICAgc2Vzc2lvbjogdHJ1ZSwgLy8gXHU1M0VGXHU5MDA5XHVGRjBDXHU1RjAwXHU1NDJGXHU2NjJGXHU1NDI2XHU1NzI4XHU3RjUxXHU5ODc1XHU1MTczXHU5NUVEXHU2MjE2XHU1MjM3XHU2NUIwXHU1NDBFXHVGRjBDXHU2RTA1XHU5NjY0XHU3NjdCXHU1RjU1XHU3MkI2XHU2MDAxXHVGRjBDXHU4RkQ5XHU2ODM3XHU1MThEXHU2QjIxXHU4QkJGXHU5NUVFXHU3RjUxXHU5ODc1XHVGRjBDXHU5NzAwXHU4OTgxXHU5MUNEXHU2NUIwXHU3NjdCXHU1RjU1XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIGZhbHNlXHJcbiAgICAgICAgc3RyYXRlZ3k6IFwiYWx3YXlzXCIsIC8vXHU1M0VGXHU5MDA5XHVGRjBDXHU3NjdCXHU1RjU1XHU3QjU2XHU3NTY1XHVGRjBDb25jZSBcdTRFRTNcdTg4NjhcdTRFMDBcdTZCMjFcdTc2N0JcdTVGNTVcdUZGMENhbHdheXMgXHU0RUUzXHU4ODY4XHU2QkNGXHU2QjIxXHU4QkJGXHU5NUVFXHU5MEZEXHU3NjdCXHU1RjU1XHVGRjBDXHU5RUQ4XHU4QkE0XHU0RTNBIG9uY2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcInRlZWstc2l0ZS0yXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwidGVla1wiLFxyXG4gICAgICAgIHJvbGU6IFwiYWRtaW5cIixcclxuICAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgICAgICBzZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICBzdHJhdGVneTogXCJhbHdheXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwYWdlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwidGVla1wiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInRlZWtcIixcclxuICAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgICAgICBzZXNzaW9uOiB0cnVlLFxyXG4gICAgICAgIHN0cmF0ZWd5OiBcIm9uY2VcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHVzZXJuYW1lOiBcInRlZWstcGFnZXMtMlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcInRlZWtcIixcclxuICAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgICAgICBzZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICBzdHJhdGVneTogXCJhbHdheXNcIixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICAvLyByZWFsbToge1xyXG4gICAgLy8gICBibG9nOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgdXNlcm5hbWU6IFwidGVlay1ibG9nLTFcIixcclxuICAgIC8vICAgICAgIHBhc3N3b3JkOiBcInRlZWtcIixcclxuICAgIC8vICAgICAgIGV4cGlyZTogXCIxZFwiLFxyXG4gICAgLy8gICAgICAgc2Vzc2lvbjogdHJ1ZSxcclxuICAgIC8vICAgICAgIHN0cmF0ZWd5OiBcIm9uY2VcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHVzZXJuYW1lOiBcInRlZWstYmxvZy0yXCIsXHJcbiAgICAvLyAgICAgICBwYXNzd29yZDogXCJ0ZWVrXCIsXHJcbiAgICAvLyAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgIC8vICAgICAgIHNlc3Npb246IGZhbHNlLFxyXG4gICAgLy8gICAgICAgc3RyYXRlZ3k6IFwiYWx3YXlzXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vICAgY29tbWVudDogW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHVzZXJuYW1lOiBcInRlZWstY29tbWVudC0xXCIsXHJcbiAgICAvLyAgICAgICBwYXNzd29yZDogXCJ0ZWVrXCIsXHJcbiAgICAvLyAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgIC8vICAgICAgIHNlc3Npb246IHRydWUsXHJcbiAgICAvLyAgICAgICBzdHJhdGVneTogXCJhbHdheXNcIixcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgIHVzZXJuYW1lOiBcInRlZWstY29tbWVudC0yXCIsXHJcbiAgICAvLyAgICAgICBwYXNzd29yZDogXCJ0ZWVrXCIsXHJcbiAgICAvLyAgICAgICBleHBpcmU6IFwiMWRcIixcclxuICAgIC8vICAgICAgIHNlc3Npb246IGZhbHNlLFxyXG4gICAgLy8gICAgICAgc3RyYXRlZ3k6IFwiYWx3YXlzXCIsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgXSxcclxuICAgIC8vIH0sXHJcbiAgICAvLyBvbkZvY3VzOiAodmFsdWUsIGZvcm1OYW1lKSA9PiB7fSxcclxuICAgIC8vIG9uQmx1cjogKHZhbHVlLCBmb3JtTmFtZSkgPT4ge30sXHJcbiAgICAvLyBkb0xvZ2luOiAobG9naW5JbmZvLCB0eXBlLCBuYXRpdmVFeGVjTG9naW4pID0+IHRydWUsXHJcbiAgICAvLyBkb1ZhbGlkYXRlOiAodHlwZSwgZnJvbnRtYXR0ZXIsIG5hdGl2ZUV4ZWNMb2dpbikgPT4gdHJ1ZSxcclxuICAgIC8vIGVuY3J5cHQ6ICh2YWx1ZSwgZnJvbnRtYXR0ZXIpID0+IHZhbHVlLFxyXG4gICAgLy8gZGVjcnlwdDogKHZhbHVlLCBmcm9udG1hdHRlcikgPT4gdmFsdWUsXHJcbiAgfSxcclxuICAvLyBcdTU3MjhcdTZCQ0ZcdTRFMkFcdTY1ODdcdTdBRTBcdTk4NzVcdTk4NzZcdTkwRThcdTY2M0VcdTc5M0EgVml0ZVByZXNzIFx1NUJCOVx1NTY2OFx1NkRGQlx1NTJBMFx1NjNEMFx1NzkzQVx1RkYwQ1x1NEY3Rlx1NzUyOFx1NTczQVx1NjY2Rlx1NTk4Mlx1OEQ4NVx1OEZDN1x1NTM0QVx1NUU3NFx1NzY4NFx1NjU4N1x1N0FFMFx1ODFFQVx1NTJBOFx1NjNEMFx1NzkzQVx1NjU4N1x1N0FFMFx1NTE4NVx1NUJCOVx1NTNFRlx1ODBGRFx1NURGMlx1OEZDN1x1NjVGNlx1MzAwMlxyXG4gIGFydGljbGVCb3R0b21UaXA6ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFwidGlwXCIsXHJcbiAgICAgIHRpdGxlOiBcIlx1NThGMFx1NjYwRVwiLFxyXG4gICAgICB0ZXh0OiBgPHA+XHU0RjVDXHU4MDA1XHVGRjFBSHlkZTwvcD5cclxuICAgICAgICAgICAgIDxwPlx1NzI0OFx1Njc0M1x1RkYxQVx1NkI2NFx1NjU4N1x1N0FFMFx1NzI0OFx1Njc0M1x1NUY1MiBIeWRlIFx1NjI0MFx1NjcwOVx1RkYwQ1x1NTk4Mlx1NjcwOVx1OEY2Q1x1OEY3RFx1RkYwQ1x1OEJGN1x1NkNFOFx1NjYwRVx1NTFGQVx1NTkwNCE8L3A+XHJcbiAgICAgICAgICAgICA8cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDBcIj5cdTk0RkVcdTYzQTVcdUZGMUFcdTUzRUZcdTcwQjlcdTUxRkJcdTUzRjNcdTRFMEFcdTg5RDJcdTUyMDZcdTRFQUJcdTZCNjRcdTk4NzVcdTk3NjJcdTU5MERcdTUyMzZcdTY1ODdcdTdBRTBcdTk0RkVcdTYzQTU8L3A+XHJcbiAgICAgICAgICAgIGAsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGV4dGVuZHM6IHRlZWtDb25maWcsXHJcbiAgYmFzZTogXCIvXCIsXHJcbiAgdGl0bGU6IFwiSHlkZSBCbG9nXCIsXHJcbiAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxyXG4gIGNsZWFuVXJsczogdHJ1ZSxcclxuICBsYXN0VXBkYXRlZDogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcbiAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gIGhlYWQ6IEhlYWREYXRhIGFzIEhlYWRDb25maWdbXSxcclxuICBtYXJrZG93bjoge1xyXG4gICAgLy8gXHU1RjAwXHU1NDJGXHU4ODRDXHU1M0Y3XHJcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIC8vIFx1OUVEOFx1OEJBNFx1Nzk4MVx1NzUyOFx1RkYxQlx1OEJCRVx1N0Y2RVx1NEUzQSB0cnVlIFx1NTNFRlx1NEUzQVx1NjI0MFx1NjcwOVx1NTZGRVx1NzI0N1x1NTQyRlx1NzUyOFx1NjFEMlx1NTJBMFx1OEY3RFx1MzAwMlxyXG4gICAgICBsYXp5TG9hZGluZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICAvLyBcdTY2RjRcdTY1MzlcdTVCQjlcdTU2NjhcdTlFRDhcdThCQTRcdTUwM0NcdTY4MDdcdTk4OThcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICB0aXBMYWJlbDogXCJcdTYzRDBcdTc5M0FcIixcclxuICAgICAgd2FybmluZ0xhYmVsOiBcIlx1OEI2Nlx1NTQ0QVwiLFxyXG4gICAgICBkYW5nZXJMYWJlbDogXCJcdTUzNzFcdTk2NjlcIixcclxuICAgICAgaW5mb0xhYmVsOiBcIlx1NEZFMVx1NjA2RlwiLFxyXG4gICAgICBkZXRhaWxzTGFiZWw6IFwiXHU4QkU2XHU3RUM2XHU0RkUxXHU2MDZGXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGhlbWVDb25maWc6IHtcclxuICAgIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcclxuICAgIGxvZ286IFwiL2Zhdmljb24uaWNvXCIsXHJcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiBcIlx1NEUzQlx1OTg5OFwiLFxyXG4gICAgc2lkZWJhck1lbnVMYWJlbDogXCJcdTgzRENcdTUzNTVcIixcclxuICAgIHJldHVyblRvVG9wTGFiZWw6IFwiXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4XCIsXHJcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXHU0RTBBXHU2QjIxXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XCIsXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGxldmVsOiBbMiwgNF0sXHJcbiAgICAgIGxhYmVsOiBcIlx1NjcyQ1x1OTg3NVx1NUJGQ1x1ODIyQVwiLFxyXG4gICAgfSxcclxuICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICBwcmV2OiBcIlx1NEUwQVx1NEUwMFx1OTg3NVwiLFxyXG4gICAgICBuZXh0OiBcIlx1NEUwQlx1NEUwMFx1OTg3NVwiLFxyXG4gICAgfSxcclxuICAgIG5hdjogTmF2LCAvLyBcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcclxuICAgIHNvY2lhbExpbmtzOiBTb2NpYWxMaW5rcywgLy8gXHU3OTNFXHU0RUE0XHU5NEZFXHU2M0E1XHU5MTREXHU3RjZFXHJcbiAgICBzZWFyY2g6IHtcclxuICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcclxuICAgIH0sXHJcbiAgICBlZGl0TGluazoge1xyXG4gICAgICB0ZXh0OiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXHJcbiAgICAgIHBhdHRlcm46XHJcbiAgICAgICAgXCJodHRwczovL2dpdGh1Yi5jb20vS2VsZS1CaW5ndGFuZy9oZC1zZWN1cml0eS9lZGl0L21hc3Rlci9oZC1zZWN1cml0eS1kb2NzL2RvY3MvOnBhdGhcIixcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgdml0ZToge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBncm91cEljb25WaXRlUGx1Z2luKCksXHJcbiAgICAgIHZpdGVJbWFnZW1pbih7XHJcbiAgICAgICAgZ2lmc2ljbGU6IHsgb3B0aW1pemF0aW9uTGV2ZWw6IDcgfSxcclxuICAgICAgICBtb3pqcGVnOiB7IHF1YWxpdHk6IDcwIH0sXHJcbiAgICAgICAgcG5ncXVhbnQ6IHsgcXVhbGl0eTogWzAuNywgMC44XSB9LFxyXG4gICAgICAgIHN2Z286IHtcclxuICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcInJlbW92ZVZpZXdCb3hcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwicmVtb3ZlRW1wdHlBdHRyc1wiLCBhY3RpdmU6IGZhbHNlIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAvLyBob3N0OiBcIjEyNy4wLjAuMVwiLCAvLyBcdTYzMDdcdTVCOUFcdTY3MERcdTUyQTFcdTU2NjhcdTVFOTRcdThCRTVcdTc2RDFcdTU0MkNcdTU0RUFcdTRFMkEgSVAgXHU1NzMwXHU1NzQwXHJcbiAgICAgIC8vIHBvcnQ6IDUxNzMsIC8vIFx1NjMwN1x1NUI5QVx1NUYwMFx1NTNEMVx1NjcwRFx1NTJBMVx1NTY2OFx1N0FFRlx1NTNFM1xyXG4gICAgICAvLyBzdHJpY3RQb3J0OiB0cnVlLCAvLyBcdTgyRTVcdTdBRUZcdTUzRTNcdTVERjJcdTg4QUJcdTUzNjBcdTc1MjhcdTUyMTlcdTRGMUFcdTc2RjRcdTYzQTVcdTkwMDBcdTUxRkFcclxuICAgICAgLy8gb3BlbjogdHJ1ZSwgLy8gXHU4RkQwXHU4ODRDXHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU3RjUxXHU5ODc1XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxNTAwLCAvLyBcdTk2NTBcdTUyMzZcdThCNjZcdTU0NEFcdTc2ODRcdTU3NTdcdTU5MjdcdTVDMEZcclxuICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsIC8vIFx1NUMwRlx1NEU4RSA0S0IgXHU3Njg0XHU1QjU3XHU0RjUzXHU4RjZDXHU0RTNBIGJhc2U2NFxyXG4gICAgICBtaW5pZnk6IFwidGVyc2VyXCIsIC8vIFx1NEY3Rlx1NzUyOCBUZXJzZXIgXHU4RkRCXHU4ODRDXHU0RUUzXHU3ODAxXHU1MzhCXHU3RjI5XHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICB2aXN1YWxpemVyKHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IFwiLi4vc3RhdHMuaHRtbFwiLFxyXG4gICAgICAgICAgICBvcGVuOiBmYWxzZSwgLy8gXHU2MjUzXHU1MzA1XHU1NDBFXHU4MUVBXHU1MkE4XHU2MjUzXHU1RjAwXHU2MkE1XHU1NDRBXHJcbiAgICAgICAgICAgIGd6aXBTaXplOiB0cnVlLCAvLyBcdTUzOEJcdTdGMjlcdTU5MjdcdTVDMEZcclxuICAgICAgICAgICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgICAgdGhlbWU6IFtcInZpdGVwcmVzcy10aGVtZS10ZWVrXCJdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB0ZXJzZXJPcHRpb25zOiB7XHJcbiAgICAgICAgY29tcHJlc3M6IHtcclxuICAgICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5IGNvbnNvbGUuKiBcdThDMDNcdTc1MjhcdUZGMDhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTVFRkFcdThCQUVcdTVGMDBcdTU0MkZcdUZGMDlcclxuICAgICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWUsIC8vIFx1NzlGQlx1OTY2NCBkZWJ1Z2dlciBcdThCRURcdTUzRTVcdUZGMDhcdTc1MUZcdTRFQTdcdTczQUZcdTU4ODNcdTVGQzVcdTU5MDdcdUZGMDlcclxuICAgICAgICAgIHB1cmVfZnVuY3M6IFtcImNvbnNvbGUuaW5mb1wiXSwgLy8gXHU0RkREXHU3NTU5IGNvbnNvbGUuaW5mbyBcdThDMDNcdTc1MjhcdUZGMDhcdTc2N0RcdTU0MERcdTUzNTVcdTY3M0FcdTUyMzZcdUZGMDlcclxuICAgICAgICAgIGRlYWRfY29kZTogdHJ1ZSwgLy8gXHU3OUZCXHU5NjY0XHU0RTBEXHU1M0VGXHU4RkJFXHU0RUUzXHU3ODAxXHVGRjA4XHU2RDg4XHU5NjY0XHU2QjdCXHU0RUUzXHU3ODAxXHVGRjA5XHJcbiAgICAgICAgICBhcnJvd3M6IHRydWUsIC8vIFx1NUMwNiBmdW5jdGlvbiBcdThGNkNcdTYzNjJcdTRFM0FcdTdCQURcdTU5MzRcdTUxRkRcdTY1NzBcdUZGMDhcdTRGMThcdTUzMTZcdTRFRTNcdTc4MDFcdTRGNTNcdTc5RUZcdUZGMDlcclxuICAgICAgICAgIHVudXNlZDogdHJ1ZSwgLy8gXHU3OUZCXHU5NjY0XHU2NzJBXHU0RjdGXHU3NTI4XHU3Njg0XHU1M0Q4XHU5MUNGL1x1NTFGRFx1NjU3MFx1RkYwOFx1OTcwMFx1Nzg2RVx1NEZERFx1NEUwRFx1NUY3MVx1NTRDRFx1N0EwQlx1NUU4Rlx1OTAzQlx1OEY5MVx1RkYwOVxyXG4gICAgICAgICAgam9pbl92YXJzOiB0cnVlLCAvLyBcdTU0MDhcdTVFNzZcdThGREVcdTdFRUQgdmFyIFx1NThGMFx1NjYwRVx1RkYwOFx1NEYxOFx1NTMxNlx1NEY1Q1x1NzUyOFx1NTdERlx1RkYwOVxyXG4gICAgICAgICAgY29sbGFwc2VfdmFyczogdHJ1ZSwgLy8gXHU1MTg1XHU4MDU0XHU1MzU1XHU2QjIxXHU0RjdGXHU3NTI4XHU3Njg0XHU1M0Q4XHU5MUNGXHVGRjA4XHU0RjUzXHU3OUVGXHU0RjE4XHU1MzE2XHVGRjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgIGNvbW1lbnRzOiBmYWxzZSwgLy8gXHU3OUZCXHU5NjY0XHU2MjQwXHU2NzA5XHU2Q0U4XHU5MUNBXHVGRjA4XHU0RkREXHU3NTU5XHU3MjQ4XHU2NzQzXHU1OEYwXHU2NjBFXHU5NzAwXHU0RjdGXHU3NTI4XHU2QjYzXHU1MjE5XHU4ODY4XHU4RkJFXHU1RjBGXHVGRjA5XHJcbiAgICAgICAgICBiZWF1dGlmeTogZmFsc2UsIC8vIFx1Nzk4MVx1NzUyOFx1NEVFM1x1NzgwMVx1N0Y4RVx1NTMxNlx1RkYwOFx1OEZEQlx1NEUwMFx1NkI2NVx1NTFDRlx1NUMwRlx1NEY1M1x1NzlFRlx1RkYwOVxyXG4gICAgICAgICAgcHJlYW1ibGU6IFwiLyogXHU5ODc5XHU3NkVFXHU3MjQ4XHU2NzJDIDEuMC4wICovXCIsIC8vIFx1NjU4N1x1NEVGNlx1NTkzNFx1OTBFOFx1NkRGQlx1NTJBMFx1NzI0OFx1Njc0M1x1NThGMFx1NjYwRVx1RkYwOFx1OTcwMFx1OTA3NVx1NUI4OCBNSVQgXHU1MzRGXHU4QkFFXHVGRjA5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYW5nbGU6IHtcclxuICAgICAgICAgIHRvcGxldmVsOiB0cnVlLCAvLyBcdTZERjdcdTZEQzZcdTk4NzZcdTdFQTdcdTRGNUNcdTc1MjhcdTU3REZcdTUzRDhcdTkxQ0ZcdTU0MERcdUZGMDhcdTRGRERcdTc1NTkgY2xhc3MvZnVuY3Rpb24gXHU1NDBEXHU3OUYwXHVGRjA5XHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiBmYWxzZSwgLy8gXHU0RkREXHU3NTU5XHU1QkY5XHU4QzYxXHU1QzVFXHU2MDI3XHU1NDBEXHVGRjA4XHU5NjMyXHU2QjYyXHU3ODM0XHU1NzRGIERPTSBcdTVDNUVcdTYwMjdcdTdFRDFcdTVCOUFcdUZGMDlcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxpY29uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxpY29uXFxcXFN2Z2ljb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdGVlay1oeWRlL2RvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL2ljb24vU3ZnaWNvbi50c1wiO2NvbnN0IEJsb2cgPSBgPHN2ZyB0PVwiMTc0ODA2MzM4MDE4OVwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiNDA0OFwiIHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCI+PHBhdGggZD1cIk0wIDBoMTAyNHYxMDI0SDB6XCIgZmlsbD1cIiM1ZGE4ZmZcIiBvcGFjaXR5PVwiLjAxXCIgcC1pZD1cIjQwNDlcIj48L3BhdGg+PHBhdGggZD1cIk03OTUuNTYyNjY3IDIyOC40MzczMzNBMTI2LjAzNzMzMyAxMjYuMDM3MzMzIDAgMCAxIDkyMS42IDM1NC40NzQ2Njd2NTA0LjEwNjY2NmMwIDM0LjgxNi0yOC4yMDI2NjcgNjMuMDE4NjY3LTYzLjAxODY2NyA2My4wMTg2NjdoLTE0MS41NjhWMzU0LjQ3NDY2N2MwLTY5LjYzMiA4Ljk2LTEyNi4wMzczMzMgNzguNTQ5MzM0LTEyNi4wMzczMzR6XCIgZmlsbD1cIiM3YWFlZWJcIiBwLWlkPVwiNDA1MFwiIGRhdGEtc3BtLWFuY2hvci1pZD1cImEzMTN4LnNlYXJjaF9pbmRleC4wLmkxNS4xZGJjM2E4MWJpeTVTWVwiIGNsYXNzPVwiXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjY5LjUyNTMzMyAxMDIuNGExMjYuMDM3MzMzIDEyNi4wMzczMzMgMCAwIDEgMTI2LjAzNzMzNCAxMjYuMDM3MzMzdjYzMC4xODY2NjdjMCAzNC43NzMzMzMgMjguMjAyNjY3IDYyLjk3NiA2My4wMTg2NjYgNjIuOTc2SDIyOC4zOTQ2NjdBMTI2LjAzNzMzMyAxMjYuMDM3MzMzIDAgMCAxIDEwMi40IDc5NS41NjI2NjdWMjI4LjQzNzMzM0ExMjYuMDM3MzMzIDEyNi4wMzczMzMgMCAwIDEgMjI4LjQzNzMzMyAxMDIuNHogbS0yMjAuNTQ0IDUxOS44OTMzMzNoLTE4OS4wMTMzMzNhNDcuMjc0NjY3IDQ3LjI3NDY2NyAwIDEgMCAwIDk0LjUwNjY2N2gxODkuMDEzMzMzYTQ3LjI3NDY2NyA0Ny4yNzQ2NjcgMCAxIDAgMC05NC41MDY2Njd6IG0xODkuMDEzMzM0LTE4OS4wNTZoLTM3OC4wMjY2NjdhNDcuMjc0NjY3IDQ3LjI3NDY2NyAwIDEgMCAwIDk0LjUwNjY2N2gzNzguMDI2NjY3YTQ3LjI3NDY2NyA0Ny4yNzQ2NjcgMCAwIDAgMC05NC41MDY2Njd6TTMyMi45ODY2NjcgMjQ0LjIyNEgyNTkuOTI1MzMzYTQ3LjI3NDY2NyA0Ny4yNzQ2NjcgMCAwIDAgMCA5NC40NjRIMzIyLjk4NjY2N2E0Ny4yNzQ2NjcgNDcuMjc0NjY3IDAgMSAwIDAtOTQuNTA2NjY3elwiIGZpbGw9XCIjNWRhOGZmXCIgcC1pZD1cIjQwNTFcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pNy4xZGJjM2E4MWJpeTVTWVwiIGNsYXNzPVwiXCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBMaW51eCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiIHZpZXdCb3g9XCIwIDAgMjU2IDI1NlwiPlxyXG5cdDxnIGZpbGw9XCJub25lXCI+XHJcblx0XHQ8cmVjdCB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiIGZpbGw9XCIjZjRmMmVkXCIgcng9XCI2MFwiIC8+XHJcblx0XHQ8cGF0aCBmaWxsPVwiI2VjZWZmMVwiIGQ9XCJtODUuOTUgMTk5LjkyNmwyNC41MyAxMy42MmgzNy4wOTZsMzQuNzAyLTI2LjA1NWwxNS41NTYtNDAuODU5bC0zNS44OTktNDMuMjI3bC0xMC4xNzEtMjQuMjc4bC00OS42NiAxLjc3NmwuNTk4IDEzLjYybC05LjU3MyAxNy43NjRsLTE0Ljk1OCAyOS4wMTZsLTIuOTkxIDI0LjI3OHpcIiAvPlxyXG5cdFx0PHBhdGggZmlsbD1cIiMyNjMyMzhcIiBkPVwiTTE4Ny4wNjQgMTE0LjY1NmMtOS41NzMtMTMuNjItMTcuMzUxLTIxLjkxLTIxLjUzOS0zOS4wODJzMS4xOTctMTIuNDM1LTIuMzkzLTI3LjI0Yy0xLjc5NS03LjY5Ny00Ljc4Ny0xMy4wMjctNy43NzgtMTcuMTcyYy0zLjU5LTQuMTQ1LTcuNzc4LTYuNTE0LTEwLjE3Mi03LjEwNmMtNS4zODQtMi45Ni0xNy45NDktNy42OTgtMzMuNTA1LjU5MmMtMTYuMTU1IDguMjktMTQuMzYgMjYuMDU1LTExLjM2OCA2Mi4xNzdjMCAyLjM2OC0uNTk5IDUuMzMtMS43OTUgNy42OThjLTIuMzkzIDUuMzMtNi41ODIgMTAuMDY2LTEwLjE3MSAxNC4yMTJjLTQuMTg5IDUuOTIxLTguMzc3IDExLjg0My0xMS4zNjggMTguMzU2Yy03LjE4IDEzLjYyLTEzLjc2MiAzMC43OTItMTEuOTY3IDM3LjMwNmMyLjk5Mi0uNTkyIDQwLjY4NiA1Ni4yNTUgNDAuNjg2IDU3LjQzOWMyLjM5My0uNTkyIDEyLjU2NC0uNTkyIDIxLjUzOS0uNTkyYzEyLjU2NS0uNTkyIDE5Ljc0NC0xLjE4NCAyOS45MTYgMS4xODRjMC0xLjc3Ni0uNTk5LTMuNTUzLS41OTktNS4zMjljMC0zLjU1My41OTktNi41MTQgMS4xOTctMTAuNjU5Yy41OTgtMi45NjEgMS4xOTctNS45MjEgMS43OTUtOS40NzRjLTUuOTgzIDUuMzI5LTE2Ljc1MyAxMS4yNTEtMjYuOTI0IDEzLjAyN2MtOC45NzUgMS43NzYtMjMuOTMzLTEuMTg0LTMxLjExMy0xMC4wNjdjLjU5OSAwIDEuNzk1IDAgMi4zOTQtLjU5MmMxLjc5NS0uNTkyIDMuNTktMS4xODQgNC4xODgtMi4zNjhjMS43OTUtMi45NjEuNTk4LTUuOTIyLS41OTgtNy42OThjLTEuMTk3LTEuNzc3LTEwLjE3Mi04LjI5MS0xNC4zNi0xMS44NDNjLTQuMTg4LTMuNTUzLTYuNTgxLTUuMzMtOC45NzUtNy42OThsLTQuNzg2LTQuNzM4Yy0xLjE5Ny0xLjE4NC0xLjc5NS0yLjM2OC0yLjM5My0yLjk2MWMtMS4xOTctMi45Ni0xLjc5NS02LjUxMy0xLjE5Ny0xMS4yNWMuNTk4LTYuNTE0IDIuOTkxLTExLjg0NCA1Ljk4My0xNy43NjVjMS4xOTctMi4zNjkgNC4xODgtNy4xMDYgNC4xODgtNy4xMDZzLTEwLjE3MSAyNC44NzEtNC43ODYgMzIuNTY5YzAgMCAuNTk4LTcuNjk4IDIuOTkxLTE1LjM5NmMxLjc5NS01LjMzIDQuNzg3LTEzLjAyOCA4LjM3Ny0xNy4xNzNzMTIuNTY0LTE5LjU0MSAxMy4xNjMtMjkuMDE2YzAtNC4xNDUuNTk4LTguMjkuNTk4LTExLjI1Yy0yLjM5My0yLjM3IDM5LjQ4OS04LjI5IDQxLjg4Mi0xLjc3N2MuNTk4IDIuMzY5IDguOTc1IDIzLjY4NiAxMy43NjEgMzQuOTM3YzIuMzkzIDUuMzMgNS4zODUgMTAuMDY3IDcuMTggMTUuOTg4YzEuNzk1IDYuNTE0IDIuOTkxIDE1LjM5NiAyLjk5MSAyNC4yNzljMCAxLjc3NiAwIDQuNzM3LS41OTggNy42OThjMS4xOTcgMCAyNC41MzEtMjQuODcxLTIuOTkxLTQ1LjU5NmMwIDAgMTYuNzUyIDcuNjk4IDE3LjM1MSAyMy4wOTRjLjU5OCAxMi40MzUtNC43ODcgMjIuNTAyLTUuOTgzIDI0LjI3OGMuNTk4IDAgMTIuNTY0IDUuMzMgMTMuMTYyIDUuMzNjMi4zOTQgMCA3LjE4LTEuNzc3IDcuMTgtMS43NzdjLjU5OS0xLjc3NiAyLjM5My02LjUxNCAyLjM5My04LjI5YzQuMTg5LTEzLjYyLTUuOTgzLTM1LjUyOS0xNS41NTYtNDkuMTQ5XCIgLz5cclxuXHRcdDxwYXRoIGZpbGw9XCIjZWNlZmYxXCIgZD1cIk0xMTEuMDc4IDc1LjU3NGM0LjI5NiAwIDcuNzc4LTUuMzAzIDcuNzc4LTExLjg0M2MwLTYuNTQxLTMuNDgyLTExLjg0My03Ljc3OC0xMS44NDNTMTAzLjMgNTcuMTkgMTAzLjMgNjMuNzNzMy40ODMgMTEuODQzIDcuNzc4IDExLjg0M20yNi45MjQgMS4xODVjNS42MTggMCAxMC4xNzItNi4wOTggMTAuMTcyLTEzLjYyUzE0My42MiA0OS41MiAxMzguMDAyIDQ5LjUyYy01LjYxNyAwLTEwLjE3MSA2LjA5OC0xMC4xNzEgMTMuNjJzNC41NTQgMTMuNjIgMTAuMTcxIDEzLjYyXCIgLz5cclxuXHRcdDxwYXRoIGZpbGw9XCIjMjEyMTIxXCIgZD1cIk0xMTUuNDI0IDY0LjU0MWMtLjQ5Ny0zLjg5My0yLjc2MS02LjgxNy01LjA1Ni02LjUzcy0zLjc1MiAzLjY3Ni0zLjI1NCA3LjU3Yy40OTcgMy44OTMgMi43NiA2LjgxNyA1LjA1NSA2LjUzYzIuMjk1LS4yODggMy43NTItMy42NzcgMy4yNTUtNy41N20yMS45ODEgOC42NjRjMy4zMDQgMCA1Ljk4My0zLjQ0NiA1Ljk4My03LjY5OGMwLTQuMjUxLTIuNjc5LTcuNjk4LTUuOTgzLTcuNjk4Yy0zLjMwNSAwLTUuOTg0IDMuNDQ3LTUuOTg0IDcuNjk4czIuNjc5IDcuNjk4IDUuOTg0IDcuNjk4XCIgLz5cclxuXHRcdDxwYXRoIGZpbGw9XCIjZmZjMTA3XCIgZD1cIk0yMTYuOTggMTk1Ljc4MWMtMi4zOTMtMS4xODQtNi41ODItMi45NjEtMTAuMTcyLTguMjljLTEuNzk0LTIuOTYxLTEuMTk2LTExLjI1MS00LjE4OC0xNC44MDRjLTEuNzk1LTIuMzY4LTQuMTg4LTEuMTg0LTQuNzg2LTEuMTg0Yy01LjM4NSAxLjE4NC0xNy45NSA5LjQ3NC0yNi4zMjYgMGMtMS4xOTctMS4xODQtMi45OTItMi45NjEtNS45ODMtMi45NjFjLTIuOTkyIDAtNC4xODggMS4xODQtNS4zODUgMy41NTNzLTEuMTk3IDQuMTQ1LTEuMTk3IDEwLjA2N2MwIDQuNzM3IDAgMTAuMDY2LS41OTggMTQuMjExYy0xLjE5NyAxMC4wNjctMi45OTEgMTUuOTg5LTIuOTkxIDIxLjkxYzAgNi41MTQgMS43OTQgMTAuNjU5IDQuMTg4IDEyLjQzNWMxLjc5NSAxLjc3NyA0Ljc4NiAyLjk2MSAxMS4zNjggMi45NjFjNi41ODEgMCAxMC43NjktMi4zNjggMTQuOTU4LTYuNTE0YzIuOTkxLTIuOTYgNS4zODQtNC4xNDUgMTMuNzYxLTEwLjA2NmM2LjU4MS00LjE0NSAxNi43NTMtOS40NzUgMTguNTQ3LTExLjI1MWMxLjE5Ny0xLjE4NCAyLjk5Mi0xLjc3NyAyLjk5Mi01LjMzYzAtMi45Ni0yLjM5My00LjE0NS00LjE4OC00LjczN20tMTIwLjI2MSAxLjc3N2MtNS45ODMtOS40NzUtNi41ODItMTEuMjUxLTEwLjc3LTE3LjE3M2MtMy41OS01LjkyMS0xMS4zNjgtMTcuMTcyLTE2LjE1NC0xNy4xNzJjLTMuNTkgMC01LjM4NSAxLjc3Ni03Ljc3OCA0LjE0NWMtMi4zOTQgMi4zNjgtNC43ODcgNy42OTgtOC45NzUgMTAuNjU5Yy0zLjU5IDIuOTYtMTMuNzYxIDIuMzY4LTE2LjE1NCA1LjkyMXMyLjM5MyA4Ljg4MyAyLjM5MyAxNy43NjVjMCAzLjU1My0yLjk5MiA1LjkyMS0zLjU5IDguMjljLS41OTggMi45NjEtMS4xOTcgNC43MzcgMCA3LjEwNmMyLjM5MyAzLjU1MyA1LjM4NSA0LjczNyAyNS43MjcgOC44ODJjMTAuNzcgMi4zNjkgMjAuOTQxIDguMjkgMjcuNTIzIDguODgzYzYuNTgxLjU5MiAxNy45NDkgMCAxNy45NDktMTUuOTg5Yy41OTktOS40NzQtNC43ODYtMTEuODQzLTEwLjE3MS0yMS4zMTdtMTEuMzY4LTEwNy4xOGMtMy41OS0yLjM2OS02LjU4Mi00LjczOC02LjU4Mi04LjI5YzAtMy41NTMgMi4zOTQtNC43MzggNS45ODQtNy42OThjLjU5OC0uNTkzIDcuMTc5LTYuNTE0IDEzLjc2MS02LjUxNHMxNC4zNTkgNC4xNDUgMTcuMzUxIDUuMzNjNS4zODUgMS4xODMgMTAuNzY5IDIuMzY4IDEwLjE3MSA2LjUxM2MtLjU5OCA1LjkyMS0xLjE5NiA3LjEwNi03LjE4IDEwLjA2N2MtNC4xODggMS4xODQtMTEuOTY2IDcuNjk4LTE3LjM1MSA3LjY5OGMtMi4zOTMgMC01Ljk4MyAwLTguMzc2LS41OTNjLTEuNzk1LS41OTItNC43ODctMy41NTMtNy43NzgtNi41MTNcIiAvPlxyXG5cdFx0PHBhdGggZmlsbD1cIiM2MzQ3MDNcIiBkPVwiTTEwNi44OSA4NS42NGMxLjE5NyAxLjE4NSAyLjk5MiAyLjM3IDQuNzg3IDIuOTYxYzEuMTk2LjU5MiAyLjk5MSAxLjE4NSAyLjk5MSAxLjE4NWg1LjM4NWMyLjk5MiAwIDcuMTgtMS4xODUgMTEuMzY4LTMuNTUzYzQuMTg4LTEuNzc3IDQuNzg3LTIuOTYxIDcuNzc4LTQuMTQ1YzIuOTkyLTEuNzc3IDUuOTgzLTMuNTUzIDQuNzg3LTQuMTQ1Yy0xLjE5Ny0uNTkzLTIuMzk0IDAtNi41ODIgMi4zNjhjLTMuNTkgMi4zNjktNi41ODEgMy41NTMtMTAuMTcxIDUuMzNjLTEuNzk1LjU5Mi00LjE4OCAxLjc3Ni01Ljk4MyAxLjc3NmgtNS4zODVjLTEuNzk1IDAtMi45OTItLjU5Mi00Ljc4Ny0xLjE4NGMtMS4xOTYtLjU5My0xLjc5NS0xLjE4NS0yLjM5My0xLjE4NWMtMS4xOTYtLjU5Mi0zLjU5LTIuOTYtNC43ODYtMy41NTNjMCAwLTEuMTk3IDAtLjU5OS41OTN6bTE3Ljk1LTEzLjAyN2MuNTk4IDEuMTg0IDEuNzk1IDEuMTg0IDIuMzkzIDEuNzc2czEuMTk3LjU5MyAxLjE5Ny41OTNjLjU5OC0uNTkzIDAtMS43NzctLjU5OS0xLjc3N2MwLTEuMTg0LTIuOTkxLTEuMTg0LTIuOTkxLS41OTJtLTkuNTczIDEuMTg0YzAgLjU5MyAxLjE5NiAxLjE4NSAxLjE5Ni41OTNjLjU5OS0uNTkzIDEuMTk3LTEuMTg1IDEuNzk1LTEuMTg1YzEuMTk3LS41OTIuNTk4LTEuMTg0LTEuMTk2LTEuMTg0Yy0xLjE5Ny41OTItMS4xOTcgMS4xODQtMS43OTUgMS43NzZcIiAvPlxyXG5cdFx0PHBhdGggZmlsbD1cIiM0NTVhNjRcIiBkPVwiTTE3My4zMDMgMTc4LjYwOXYxLjc3NmMxLjE5NyAyLjM2OSA0LjE4OCAyLjk2MSA2LjU4MSAyLjk2MWMzLjU5IDAgNy4xOC0yLjM2OSA4Ljk3NS00LjczN2MwLS41OTIuNTk4LTEuMTg1IDEuMTk3LTEuNzc3YzEuMTk2LTEuNzc2IDEuNzk1LTIuOTYgMi4zOTMtMy41NTNjMCAwLS41OTgtLjU5Mi0uNTk4LTEuMTg0Yy0uNTk5LTEuMTg0LTIuMzk0LTIuMzY5LTQuNzg3LTIuOTYxYy0xLjc5NS0uNTkyLTQuNzg2LTEuMTg0LTUuOTgzLTEuMTg0Yy01LjM4NS0uNTkyLTguMzc2IDEuMTg0LTEwLjE3MSAyLjk2MWMwIDAgLjU5OCAwIC41OTguNTkyYzEuMTk3IDEuMTg0IDEuNzk1IDIuMzY5IDEuNzk1IDQuMTQ1Yy41OTggMS4xODQgMCAxLjc3NiAwIDIuOTYxXCIgLz5cclxuXHQ8L2c+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBOZ2lueCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcblx0PHBhdGggZmlsbD1cIiM0M2EwNDdcIiBkPVwiTTE2IDBMMiA4djE2bDE0IDhsMTQtOFY4Wm04IDIzYTEgMSAwIDAgMS0xIDFoLTIuNTJhMSAxIDAgMCAxLS43OC0uMzc1TDEyIDE0djlhMSAxIDAgMCAxLTEgMUg5YTEgMSAwIDAgMS0xLTFWOWExIDEgMCAwIDEgMS0xaDIuNTJhMSAxIDAgMCAxIC43OC4zNzVMMjAgMThWOWExIDEgMCAwIDEgMS0xaDJhMSAxIDAgMCAxIDEgMVpcIiAvPlxyXG48L3N2Zz5gO1xyXG5cclxuY29uc3QgR2l0ID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMzJcIiBoZWlnaHQ9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMzIgMzJcIj5cclxuXHQ8cGF0aCBmaWxsPVwiI2U2NGExOVwiIGQ9XCJNMTMuMTcyIDIuODI4TDExLjc4IDQuMjJsMS45MSAxLjkxbDIgMkEyLjk4NiAyLjk4NiAwIDAgMSAyMCAxMC44MWEzLjI1IDMuMjUgMCAwIDEtLjMxIDEuMzFsMi4wNiAyYTIuNjggMi42OCAwIDAgMSAzLjM3LjU3YTIuODYgMi44NiAwIDAgMSAuODggMi4xMTdhMy4wMiAzLjAyIDAgMCAxLS44NTYgMi4xMDlBMi45IDIuOSAwIDAgMSAyMyAxOS44MWEyLjkzIDIuOTMgMCAwIDEtMi4xMy0uODdhMi42OTQgMi42OTQgMCAwIDEtLjU2LTMuMzhsLTItMi4wNmEzIDMgMCAwIDEtLjMxLjEyVjIwYTMgMyAwIDAgMSAxLjQ0IDEuMDlhMi45MiAyLjkyIDAgMCAxIC41NiAxLjcyYTIuODggMi44OCAwIDAgMS0uODc4IDIuMTI4YTIuOTggMi45OCAwIDAgMS0yLjA0OC44NzFhMi45ODEgMi45ODEgMCAwIDEtMi41MTQtNC43MTlBMyAzIDAgMCAxIDE2IDIwdi02LjM4YTIuOTYgMi45NiAwIDAgMS0xLjQ0LTEuMDlhMi45IDIuOSAwIDAgMS0uNTYtMS43MmEyLjkgMi45IDAgMCAxIC4zMS0xLjMxbC0zLjktMy45bC03LjU3OSA3LjU3MmE0IDQgMCAwIDAtLjAwMSA1LjY1OGwxMC4zNDIgMTAuMzQyYTQgNCAwIDAgMCA1LjY1NiAwbDEwLjM0NC0xMC4zNDRhNCA0IDAgMCAwIDAtNS42NTZMMTguODI4IDIuODI4YTQgNCAwIDAgMC01LjY1NiAwXCIgLz5cclxuPC9zdmc+YDtcclxuXHJcbmNvbnN0IERvY2tlciA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0PHBhdGggZmlsbD1cIiMwMjg4ZDFcIiBkPVwiTTIxLjgxIDEwLjI1Yy0uMDYtLjA0LS41Ni0uNDMtMS42NC0uNDNjLS4yOCAwLS41Ni4wMy0uODQuMDhjLS4yMS0xLjQtMS4zOC0yLjExLTEuNDMtMi4xNGwtLjI5LS4xN2wtLjE4LjI3Yy0uMjQuMzYtLjQzLjc3LS41MSAxLjE5Yy0uMi44LS4wOCAxLjU2LjMzIDIuMjFjLS40OS4yOC0xLjI5LjM1LTEuNDYuMzVIMi42MmMtLjM0IDAtLjYyLjI4LS42Mi42M2MwIDEuMTUuMTggMi4zLjU4IDMuMzhjLjQ1IDEuMTkgMS4xMyAyLjA3IDIgMi42MWMuOTguNiAyLjU5Ljk0IDQuNDIuOTRjLjc5IDAgMS42MS0uMDcgMi40Mi0uMjJjMS4xMi0uMiAyLjItLjU5IDMuMTktMS4xNkE4LjMgOC4zIDAgMCAwIDE2Ljc4IDE2YzEuMDUtMS4xNyAxLjY3LTIuNSAyLjEyLTMuNjVoLjE5YzEuMTQgMCAxLjg1LS40NiAyLjI0LS44NWMuMjYtLjI0LjQ1LS41My41OS0uODdsLjA4LS4yNHptLTE3Ljk2Ljk5aDEuNzZjLjA4IDAgLjE2LS4wNy4xNi0uMTZWOS41YzAtLjA4LS4wNy0uMTYtLjE2LS4xNkgzLjg1Yy0uMDkgMC0uMTYuMDctLjE2LjE2djEuNThjLjAxLjA5LjA3LjE2LjE2LjE2bTIuNDMgMGgxLjc2Yy4wOCAwIC4xNi0uMDcuMTYtLjE2VjkuNWMwLS4wOC0uMDctLjE2LS4xNi0uMTZINi4yOGMtLjA5IDAtLjE2LjA3LS4xNi4xNnYxLjU4Yy4wMS4wOS4wNy4xNi4xNi4xNm0yLjQ3IDBoMS43NWMuMSAwIC4xNy0uMDcuMTctLjE2VjkuNWMwLS4wOC0uMDYtLjE2LS4xNy0uMTZIOC43NWMtLjA4IDAtLjE1LjA3LS4xNS4xNnYxLjU4YzAgLjA5LjA2LjE2LjE1LjE2bTIuNDQgMGgxLjc3Yy4wOCAwIC4xNS0uMDcuMTUtLjE2VjkuNWMwLS4wOC0uMDYtLjE2LS4xNS0uMTZoLTEuNzdjLS4wOCAwLS4xNS4wNy0uMTUuMTZ2MS41OGMwIC4wOS4wNy4xNi4xNS4xNk02LjI4IDloMS43NmMuMDggMCAuMTYtLjA5LjE2LS4xOFY3LjI1YzAtLjA5LS4wNy0uMTYtLjE2LS4xNkg2LjI4Yy0uMDkgMC0uMTYuMDYtLjE2LjE2djEuNTdjLjAxLjA5LjA3LjE4LjE2LjE4bTIuNDcgMGgxLjc1Yy4xIDAgLjE3LS4wOS4xNy0uMThWNy4yNWMwLS4wOS0uMDYtLjE2LS4xNy0uMTZIOC43NWMtLjA4IDAtLjE1LjA2LS4xNS4xNnYxLjU3YzAgLjA5LjA2LjE4LjE1LjE4bTIuNDQgMGgxLjc3Yy4wOCAwIC4xNS0uMDkuMTUtLjE4VjcuMjVjMC0uMDktLjA3LS4xNi0uMTUtLjE2aC0xLjc3Yy0uMDggMC0uMTUuMDYtLjE1LjE2djEuNTdjMCAuMDkuMDcuMTguMTUuMThtMC0yLjI4aDEuNzdjLjA4IDAgLjE1LS4wNy4xNS0uMTZWNWMwLS4xLS4wNy0uMTctLjE1LS4xN2gtMS43N2MtLjA4IDAtLjE1LjA2LS4xNS4xN3YxLjU2YzAgLjA4LjA3LjE2LjE1LjE2bTIuNDYgNC41MmgxLjc2Yy4wOSAwIC4xNi0uMDcuMTYtLjE2VjkuNWMwLS4wOC0uMDctLjE2LS4xNi0uMTZoLTEuNzZjLS4wOCAwLS4xNS4wNy0uMTUuMTZ2MS41OGMwIC4wOS4wNy4xNi4xNS4xNlwiIC8+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBBcHBzdG9yZSA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XHJcblx0PHBhdGggZmlsbD1cIiM1ZGE4ZmZcIiBkPVwiTTIuMDIgMS41MTVhLjUwNS41MDUgMCAwIDAtLjUwNS41MDV2NS4wNWMwIC4yOC4yMjYuNTA2LjUwNS41MDZoNS4wNWEuNTA1LjUwNSAwIDAgMCAuNTA2LS41MDVWMi4wMmEuNTA1LjUwNSAwIDAgMC0uNTA1LS41MDZ6bTUuMDUgOS4zOTRhMi4wMiAyLjAyIDAgMCAxIDIuMDIgMi4wMnY1LjA1QTIuMDIgMi4wMiAwIDAgMSA3LjA3IDIwSDIuMDJBMi4wMiAyLjAyIDAgMCAxIDAgMTcuOTh2LTUuMDVhMi4wMiAyLjAyIDAgMCAxIDIuMDItMi4wMnptMTAuOTEgMEEyLjAyIDIuMDIgMCAwIDEgMjAgMTIuOTN2NS4wNUEyLjAyIDIuMDIgMCAwIDEgMTcuOTggMjBoLTUuMDVhMi4wMiAyLjAyIDAgMCAxLTIuMDItMi4wMnYtNS4wNWEyLjAyIDIuMDIgMCAwIDEgMi4wMi0yLjAyek03LjA3IDEyLjQyNEgyLjAyYS41MDUuNTA1IDAgMCAwLS41MDUuNTA1djUuMDVjMCAuMjguMjI2LjUwNi41MDUuNTA2aDUuMDVhLjUwNS41MDUgMCAwIDAgLjUwNi0uNTA1di01LjA1YS41MDUuNTA1IDAgMCAwLS41MDUtLjUwNm0xMC45MSAwaC01LjA1YS41MDUuNTA1IDAgMCAwLS41MDYuNTA1djUuMDVjMCAuMjguMjI2LjUwNi41MDUuNTA2aDUuMDVhLjUwNS41MDUgMCAwIDAgLjUwNi0uNTA1di01LjA1YS41MDUuNTA1IDAgMCAwLS41MDUtLjUwNk03LjA3IDBhMi4wMiAyLjAyIDAgMCAxIDIuMDIgMi4wMnY1LjA1YTIuMDIgMi4wMiAwIDAgMS0yLjAyIDIuMDJIMi4wMkEyLjAyIDIuMDIgMCAwIDEgMCA3LjA3VjIuMDJBMi4wMiAyLjAyIDAgMCAxIDIuMDIgMHptMTAuOTEgMEEyLjAyIDIuMDIgMCAwIDEgMjAgMi4wMnY1LjA1YTIuMDIgMi4wMiAwIDAgMS0yLjAyIDIuMDJoLTUuMDVhMi4wMiAyLjAyIDAgMCAxLTIuMDItMi4wMlYyLjAyQTIuMDIgMi4wMiAwIDAgMSAxMi45MyAwem0wIDEuNTE1aC01LjA1YS41MDUuNTA1IDAgMCAwLS41MDYuNTA1djUuMDVjMCAuMjguMjI2LjUwNi41MDUuNTA2aDUuMDVhLjUwNS41MDUgMCAwIDAgLjUwNi0uNTA1VjIuMDJhLjUwNS41MDUgMCAwIDAtLjUwNS0uNTA2XCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIgc3Ryb2tlPVwiIzVkYThmZlwiIC8+XHJcbjwvc3ZnPmA7XHJcblxyXG5jb25zdCBQaG90byA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XHJcblx0PGcgZmlsbD1cIm5vbmVcIj5cclxuXHRcdDxwYXRoIHN0cm9rZT1cIiM1ZGE4ZmZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBkPVwiTTIwLjMzIDE3LjY1N2MuMTEtLjM2Ni4xNy0uNzU1LjE3LTEuMTU3di05YTQgNCAwIDAgMC00LTRoLTlhNCA0IDAgMCAwLTQgNHY5LjA3bTE2LjgzIDEuMDg3bC0uMDg4LS4xMDRsLTIuNDY2LTIuOTc2YTIgMiAwIDAgMC0zLjA3My0uMDA4bC0xLjMxMiAxLjU2NmwtLjIxNC4yNjFtNy4xNTMgMS4yNmE0IDQgMCAwIDEtMy43MTMgMi44NDJtMCAwbC0uMTE3LjAwMmgtOWE0IDQgMCAwIDEtNC0zLjkzbTEzLjExNyAzLjkyOGwtLjA5My0uMTA2bC0zLjM0Ny0zLjk5Nm0tOS42NzYuMTc1bC4xNzctLjIwMWwzLjIwNi0zLjgyN2EyIDIgMCAwIDEgMy4wNjYgMGwzLjIyNyAzLjg1M1wiIC8+XHJcblx0XHQ8Y2lyY2xlIGN4PVwiMTUuMDkxXCIgY3k9XCI4LjkwOVwiIHI9XCIxLjVcIiBmaWxsPVwiIzVkYThmZlwiIC8+XHJcblx0PC9nPlxyXG48L3N2Zz5gO1xyXG5cclxuY29uc3QgTXVzaWMgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG5cdDxnIGZpbGw9XCIjODZhZGZmXCI+XHJcblx0XHQ8cGF0aCBkPVwiTTExIDEzLjc1YS43NS43NSAwIDEgMSAwIDEuNWEuNzUuNzUgMCAwIDEgMC0xLjVcIiAvPlxyXG5cdFx0PHBhdGggZD1cIk05LjM2NyAyLjI1Yy0xLjA5MiAwLTEuOTU4IDAtMi42NTUuMDU3Yy0uNzE0LjA1OC0xLjMxNy4xOC0xLjg2OC40NmE0Ljc1IDQuNzUgMCAwIDAtMi4wNzYgMi4wNzdjLS4yODEuNTUtLjQwMyAxLjE1NC0uNDYxIDEuODY4Yy0uMDU3LjY5Ny0uMDU3IDEuNTYzLS4wNTcgMi42NTV2NS4yNjZjMCAxLjA5MiAwIDEuOTU4LjA1NyAyLjY1NWMuMDU4LjcxNC4xOCAxLjMxNy40NiAxLjg2OWE0Ljc1IDQuNzUgMCAwIDAgMi4wNzcgMi4wNzVjLjU1LjI4MSAxLjE1NC40MDMgMS44NjguNDYxYy42OTcuMDU3IDEuNTYzLjA1NyAyLjY1NS4wNTdoNS4yNjZjMS4wOTIgMCAxLjk1OCAwIDIuNjU1LS4wNTdjLjcxNC0uMDU4IDEuMzE3LS4xOCAxLjg2OS0uNDZhNC43NSA0Ljc1IDAgMCAwIDIuMDc1LTIuMDc2Yy4yODEtLjU1Mi40MDMtMS4xNTUuNDYxLTEuODY5Yy4wNTctLjY5Ny4wNTctMS41NjMuMDU3LTIuNjU1VjkuMzY3YzAtMS4wOTIgMC0xLjk1OC0uMDU3LTIuNjU1Yy0uMDU4LS43MTQtLjE4LTEuMzE3LS40Ni0xLjg2OGE0Ljc1IDQuNzUgMCAwIDAtMi4wNzYtMi4wNzZjLS41NTItLjI4MS0xLjE1NS0uNDAzLTEuODY5LS40NjFjLS42OTctLjA1Ny0xLjU2My0uMDU3LTIuNjU1LS4wNTd6bTUuMTMzIDYuNWgtMS4yNXY1Ljc1YTIuMjUgMi4yNSAwIDEgMS0xLjUtMi4xMjJWOC42YzAtLjc0Ni42MDQtMS4zNSAxLjM1LTEuMzVoMS40YS43NS43NSAwIDAgMSAwIDEuNVwiIC8+XHJcblx0PC9nPlxyXG48L3N2Zz5gO1xyXG5cclxuY29uc3QgRmlsbSA9IGA8c3ZnIHQ9XCIxNzQ4MzkyNzM1Njk3XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxMDk3M1wiIHdpZHRoPVwiMjU2XCIgaGVpZ2h0PVwiMjU2XCI+PHBhdGggZD1cIk05MDQgODQ4SDEyMGMtMzAuOTMgMC01Ni0yNS4wNy01Ni01NlYyMzJjMC0zMC45MyAyNS4wNy01NiA1Ni01Nmg3ODRjMzAuOTMgMCA1NiAyNS4wNyA1NiA1NnY1NjBjMCAzMC45My0yNS4wNyA1Ni01NiA1NnpcIiBmaWxsPVwiIzhDOUVGRlwiIHAtaWQ9XCIxMDk3NFwiPjwvcGF0aD48cGF0aCBkPVwiTTY0IDc5MmMwIDMwLjkzIDI1LjA3IDU2IDU2IDU2aDg0VjY4MEg2NHYxMTJ6XCIgZmlsbD1cIiNFMUY1RkZcIiBwLWlkPVwiMTA5NzVcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjQuNTgzYjNhODFyMVFxcVRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNMTIwIDE3NmMtMzAuOTMgMC01NiAyNS4wNy01NiA1NnYxMTJoMTQwVjE3NmgtODR6XCIgZmlsbD1cIiM3YWFlZWJcIiBwLWlkPVwiMTA5NzZcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjAuNTgzYjNhODFyMVFxcVRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjQgMzQ0aDE0MHYxNjhINjR6XCIgZmlsbD1cIiNFMUY1RkZcIiBwLWlkPVwiMTA5NzdcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjUuNTgzYjNhODFyMVFxcVRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjQgNTEyaDE0MHYxNjhINjR6XCIgZmlsbD1cIiM3YWFlZWJcIiBwLWlkPVwiMTA5NzhcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMjEuNTgzYjNhODFyMVFxcVRcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNODE5LjIxIDg0OGg4NGMzMC45MyAwIDU2LTI1LjA3IDU2LTU2VjY4MGgtMTQwdjE2OHpcIiBmaWxsPVwiI0UxRjVGRlwiIHAtaWQ9XCIxMDk3OVwiIGRhdGEtc3BtLWFuY2hvci1pZD1cImEzMTN4LnNlYXJjaF9pbmRleC4wLmkyMy41ODNiM2E4MXIxUXFxVFwiIGNsYXNzPVwic2VsZWN0ZWRcIj48L3BhdGg+PHBhdGggZD1cIk05MDMuMjEgMTc2aC04NHYxNjhoMTQwVjIzMmMwLTMwLjkzLTI1LjA3LTU2LTU2LTU2elwiIGZpbGw9XCIjN2FhZWViXCIgcC1pZD1cIjEwOTgwXCIgZGF0YS1zcG0tYW5jaG9yLWlkPVwiYTMxM3guc2VhcmNoX2luZGV4LjAuaTE5LjU4M2IzYTgxcjFRcXFUXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvcGF0aD48cGF0aCBkPVwiTTgxOS4yMSAzNDRoMTQwdjE2OGgtMTQwelwiIGZpbGw9XCIjRTFGNUZGXCIgcC1pZD1cIjEwOTgxXCIgZGF0YS1zcG0tYW5jaG9yLWlkPVwiYTMxM3guc2VhcmNoX2luZGV4LjAuaTIyLjU4M2IzYTgxcjFRcXFUXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvcGF0aD48cGF0aCBkPVwiTTgxOS4yMSA1MTJoMTQwdjE2OGgtMTQwelwiIGZpbGw9XCIjN2FhZWViXCIgcC1pZD1cIjEwOTgyXCIgZGF0YS1zcG0tYW5jaG9yLWlkPVwiYTMxM3guc2VhcmNoX2luZGV4LjAuaTE4LjU4M2IzYTgxcjFRcXFUXCIgY2xhc3M9XCJzZWxlY3RlZFwiPjwvcGF0aD48cGF0aCBkPVwiTTYxOS4yNCA1MzYuMjVsLTE1OC40OSA5MS41Yy0xOC42NyAxMC43OC00Mi0yLjY5LTQyLTI0LjI1di0xODNjMC0yMS41NSAyMy4zMy0zNS4wMyA0Mi0yNC4yNWwxNTguNDkgOTEuNWMxOC42NyAxMC43OCAxOC42NyAzNy43MiAwIDQ4LjV6XCIgZmlsbD1cIiNGRkQ2MDBcIiBwLWlkPVwiMTA5ODNcIj48L3BhdGg+PC9zdmc+YDtcclxuXHJcbmNvbnN0IEFib3V0ID0gYDxzdmcgdD1cIjE3NDgzOTMyNDA5MjlcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjE4ODM5XCIgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIj48cGF0aCBkPVwiTTUxMiAwUTM3My44MDUzMSAwIDI1My43MzQ1MTMgNzAuMjMwMDg4IDEzOC4xOTQ2OSAxMzguMTk0NjkgNzAuMjMwMDg4IDI1My43MzQ1MTMgMCAzNzIuNjcyNTY2IDAgNTEydDcwLjIzMDA4OCAyNTguMjY1NDg3cTY3Ljk2NDYwMiAxMTUuNTM5ODIzIDE4My41MDQ0MjUgMTgzLjUwNDQyNSAxMjAuMDcwNzk2IDcwLjIzMDA4OCAyNTguODMxODU5IDcwLjIzMDA4OFQ3NzAuMjY1NDg3IDk1My43Njk5MTJxMTE2LjY3MjU2Ni02Ny45NjQ2MDIgMTgzLjUwNDQyNS0xODMuNTA0NDI1IDcwLjIzMDA4OC0xMTguOTM4MDUzIDcwLjIzMDA4OC0yNTguMjY1NDg3dC03MC4yMzAwODgtMjU4LjI2NTQ4N1E4ODYuOTM4MDUzIDEzOC4xOTQ2OSA3NzAuMjY1NDg3IDcwLjIzMDA4OCA2NTEuMzI3NDM0IDAgNTEyIDB6IG0wIDk2OC40OTU1NzVxLTEyMy40NjkwMjcgMC0yMjkuOTQ2OTAzLTYyLjMwMDg4NS0xMDMuMDc5NjQ2LTYwLjAzNTM5OC0xNjQuMjQ3Nzg3LTE2My4xMTUwNDQtNjIuMzAwODg1LTEwNi40Nzc4NzYtNjIuMzAwODg1LTIzMC41MTMyNzRUMTE3LjgwNTMxIDI4Mi4wNTMwOTdxNjEuMTY4MTQyLTEwMy4wNzk2NDYgMTY0LjI0Nzc4Ny0xNjQuMjQ3Nzg3IDEwNi40Nzc4NzYtNjIuMzAwODg1IDIzMC41MTMyNzUtNjIuMzAwODg1VDc0My4wNzk2NDYgMTE3LjgwNTMxcTEwMy4wNzk2NDYgNjEuMTY4MTQyIDE2My4xMTUwNDQgMTY0LjI0Nzc4NyA2Mi4zMDA4ODUgMTA2LjQ3Nzg3NiA2Mi4zMDA4ODUgMjMwLjUxMzI3NVQ5MDYuMTk0NjkgNzQzLjA3OTY0NnEtNjAuMDM1Mzk4IDEwMy4wNzk2NDYtMTYzLjExNTA0NCAxNjMuMTE1MDQ0LTEwNi40Nzc4NzYgNjIuMzAwODg1LTIzMS4wNzk2NDYgNjIuMzAwODg1eiBtMC02OTUuNTA0NDI1cS0xNS44NTg0MDcgMTguMTIzODk0LTE1Ljg1ODQwNyA0My4wNDQyNDggMCAyMC4zODkzODEgMTMuMDI2NTQ5IDMzLjk4MjMwMXQzMy40MTU5MjkgMTMuNTkyOTJxMjIuNjU0ODY3IDAgMzkuNjQ2MDE3LTE4LjY5MDI2NXQxNi45OTExNTEtNDIuNDc3ODc2cTAtMjAuMzg5MzgxLTEzLjU5MjkyLTM0LjU0ODY3M1Q1NDkuOTQ2OTAzIDI1NC44NjcyNTdxLTIyLjA4ODQ5NiAxLjEzMjc0My0zNy45NDY5MDMgMTguMTIzODkzeiBtMzkuNjQ2MDE4IDM0MC45NTU3NTNxLTE1Ljg1ODQwNyAxNS44NTg0MDctMjkuNDUxMzI4IDI2LjA1MzA5NyA2Ljc5NjQ2LTMyLjg0OTU1OCAzMS43MTY4MTQtMTE2LjY3MjU2NiAyMC4zODkzODEtNzEuMzYyODMyIDIwLjM4OTM4MS04Mi42OTAyNjYgMC0xNC43MjU2NjQtMTEuMzI3NDM0LTI0LjM1Mzk4MnQtMzEuNzE2ODE0LTcuOTI5MjA0cS0yMC4zODkzODEgMS42OTkxMTUtNDYuNDQyNDc4IDE2LjQyNDc3OS0yNy4xODU4NDEgMTUuODU4NDA3LTYxLjE2ODE0MSA1My4yMzg5MzhsLTEyLjQ2MDE3NyAxMi40NjAxNzcgMzkuNjQ2MDE3IDMwLjU4NDA3MSAzMi44NDk1NTgtMzEuNzE2ODE0cS00NC4xNzY5OTEgMTQ0Ljk5MTE1LTQ0LjE3Njk5MSAxODUuNzY5OTExIDAgMTguMTIzODk0IDEwLjc2MTA2MiAzMC4wMTc2OTl0MjguMzE4NTg0IDExLjg5MzgwNnExNy41NTc1MjIgMCA0MS4zNDUxMzMtMTIuNDYwMTc3IDIxLjUyMjEyNC0xMi40NjAxNzcgNjYuODMxODU4LTU1LjUwNDQyNWwxMi40NjAxNzctMTEuMzI3NDM0LTM1LjExNTA0NC0zNS4xMTUwNDR6XCIgcC1pZD1cIjE4ODQwXCIgZmlsbD1cIiM3YWFlZWJcIj48L3BhdGg+PC9zdmc+YDtcclxuXHJcbmNvbnN0IExpbmsgPSBgPHN2ZyB0PVwiMTc0ODE1NjIzOTY5NVwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjcxODlcIiB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiPjxwYXRoIGQ9XCJNMCAwaDEwMjR2MTAyNEgwelwiIGZpbGw9XCIjZmZmZmZmMDBcIiBwLWlkPVwiMjcxOTBcIj48L3BhdGg+PHBhdGggZD1cIk0zNjEuMzc2IDYxNy4zNzZhMzIgMzIgMCAwIDAgNDUuMjQ4IDQ1LjI0OGwtNDUuMjQ4LTQ1LjI0OHogbTMwMS4yNDgtMjEwLjc1MmEzMiAzMiAwIDAgMC00NS4yNDgtNDUuMjQ4bDQ1LjI0OCA0NS4yNDh6TTYyMi43MiAxNDcuNTUybC0yMi42MjQtMjIuNjI0IDIyLjYyNCAyMi42MjR6IG0yNDguODk2IDI0OC44OTZsLTIyLjYyNC0yMi42MjQgMjIuNjI0IDIyLjYyNHogbS00MDIuMjQtMTQwLjhhMzIgMzIgMCAxIDAgNDUuMjE2IDQ1LjI4TDQ2OS4zNDQgMjU1LjY4eiBtLTcyLjkyOCA2MTZsLTIyLjYyNC0yMi42NTYgMjIuNjI0IDIyLjYyNHogbS0yNDguODk2IDBsMjIuNjI0LTIyLjY1Ni0yMi42MjQgMjIuNjI0eiBtMC0yNDguOTI4bDIyLjYyNCAyMi42MjQtMjIuNjI0LTIyLjYyNHogbTQwMi41OTIgMTQwLjQ4YTMyIDMyIDAgMCAwLTQ1LjI0OC00NS4yOGw0NS4yNDggNDUuMjQ4eiBtMTk3LjAyNC0yODcuNTUyYTMyIDMyIDAgMSAwIDQ1LjI4IDQ1LjI0OGwtNDUuMjgtNDUuMjQ4ek0yOTQuNjI0IDUyMC44OTZhMzIgMzIgMCAxIDAtNDUuMjQ4LTQ1LjI0OGw0NS4yNDggNDUuMjQ4eiBtMTEyIDE0MS43NmwyNTYtMjU2LTQ1LjI0OC00NS4yOC0yNTYgMjU2IDQ1LjI0OCA0NS4yNDh6IG0yMzguNzItNDkyLjQ4YTE0NCAxNDQgMCAwIDEgMjAzLjY0OCAwbDQ1LjI0OC00NS4yNDhhMjA4IDIwOCAwIDAgMC0yOTQuMTQ0IDBsNDUuMjQ4IDQ1LjI0OHogbTIwMy42NDggMGExNDQgMTQ0IDAgMCAxIDAgMjAzLjY0OGw0NS4yNDggNDUuMjQ4YTIwOCAyMDggMCAwIDAgMC0yOTQuMTQ0bC00NS4yNDggNDUuMjQ4eiBtLTI0OC44OTYtNDUuMjQ4TDQ2OS4zNDQgMjU1LjY4bDQ1LjI0OCA0NS4yNDggMTMwLjc1Mi0xMzAuNzUyLTQ1LjI0OC00NS4yNDh6TTM3My44MjQgODQ4Ljk2YTE0NCAxNDQgMCAwIDEtMjAzLjY0OCAwbC00NS4yNDggNDUuMjhhMjA4IDIwOCAwIDAgMCAyOTQuMTQ0IDBsLTQ1LjI0OC00NS4yOHogbS0yMDMuNjQ4IDBhMTQ0IDE0NCAwIDAgMSAwLTIwMy42NDhsLTQ1LjI0OC00NS4yNDhhMjA4IDIwOCAwIDAgMCAwIDI5NC4xNDRsNDUuMjQ4LTQ1LjI0OHogbTI0OC44OTYgNDUuMjhsMTMxLjA3Mi0xMzEuMTA0LTQ1LjI0OC00NS4yNDgtMTMxLjA3MiAxMzEuMDcyIDQ1LjI0OCA0NS4yOHogbTQyOS45Mi01MjAuNDQ4bC0xMDEuODI0IDEwMS44MjQgNDUuMjggNDUuMjQ4IDEwMS43OTItMTAxLjgyNC00NS4yNDgtNDUuMjQ4ek0xNzAuMTc2IDY0NS4zNDRsMTI0LjQ4LTEyNC40NDgtNDUuMjgtNDUuMjQ4LTEyNC40OCAxMjQuNDggNDUuMjggNDUuMjE2elwiIGZpbGw9XCIjN2FhZWViXCIgcC1pZD1cIjI3MTkxXCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBOYXYgPSBgPHN2ZyB0PVwiMTc0ODE1NjUwNTU3OFwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMzIxODRcIiB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiPjxwYXRoIGQ9XCJNMCAwaDEwMjR2MTAyNEgwelwiIGZpbGw9XCIjN2FhZWViXCIgZmlsbC1vcGFjaXR5PVwiMFwiIHAtaWQ9XCIzMjE4NVwiPjwvcGF0aD48cGF0aCBkPVwiTTU4Ny41NjI2NjcgODk2bC0yLjQ3NDY2Ny0wLjA4NTMzM2E0My41MiA0My41MiAwIDAgMS0zOS42OC0zMi4wNjRsLTgyLjc3MzMzMy0zMDAuOTQ5MzM0LTMwMi42NTYtODQuMzczMzMzYTQzLjYyNjY2NyA0My42MjY2NjcgMCAwIDEtMzEuOTE0NjY3LTM5Ljk1NzMzMyA0My42NjkzMzMgNDMuNjY5MzMzIDAgMCAxIDI3Ljc5NzMzMy00Mi45MjI2NjdMODM2LjQxNiAxMzAuOTg2NjY3YTQzLjczMzMzMyA0My43MzMzMzMgMCAwIDEgNTYuNjE4NjY3IDU2LjYxODY2NmwtMjY0LjcyNTMzNCA2ODAuNTMzMzM0QTQ0LjAxMDY2NyA0NC4wMTA2NjcgMCAwIDEgNTg3LjU2MjY2NyA4OTZ6TTIwMy4xMzYgNDM0Ljg1ODY2N2wzMDMuMTY4IDg0LjUyMjY2NiA4Mi44OCAzMDEuMjkwNjY3TDgzNC44MTYgMTg5LjE2MjY2NyAyMDMuMTM2IDQzNC44NTg2Njd6XCIgZmlsbD1cIiM3YWFlZWJcIiBmaWxsLW9wYWNpdHk9XCIuNjVcIiBwLWlkPVwiMzIxODZcIj48L3BhdGg+PC9zdmc+YDtcclxuXHJcbmNvbnN0IFNpdGVBbmFseXRpY3MgPSBgPHN2ZyB0PVwiMTc0ODE1NjgwMzYwMFwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMzgyMzVcIiB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiPjxwYXRoIGQ9XCJNMTcwLjY2NjY2NyA4NS4zMzMzMzN2NzY4aDc2OHY4NS4zMzMzMzRIODUuMzMzMzMzVjg1LjMzMzMzM2g4NS4zMzMzMzR6IG01MTIgMTcwLjY2NjY2N2gyNTZ2MjU2aC04NS4zMzMzMzRWNDAyLjA0OGwtNjcuMzcwNjY2IDY3LjJhMjAzOTU3LjU4OTMzMyAyMDM5NTcuNTg5MzMzIDAgMCAwLTExNS43OTczMzQgMTE1LjU0MTMzM2wtMzAuMTY1MzMzIDMwLjE2NTMzNC0xNzAuNjY2NjY3LTE3MC42NjY2NjctMjEzLjMzMzMzMyAyMTMuMzMzMzMzTDE5NS42NjkzMzMgNTk3LjMzMzMzMyA0NjkuMzMzMzMzIDMyMy42MjY2NjdsMTcwLjY2NjY2NyAxNzAuNjY2NjY2IDg1LjcxNzMzMy04NS40NjEzMzNMNzkzLjM0NCAzNDEuMzMzMzMzSDY4Mi42NjY2NjdWMjU2elwiIGZpbGw9XCIjN2FhZWViXCIgcC1pZD1cIjM4MjM2XCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBTdGF0dXMgPSBgPHN2ZyB0PVwiMTc0ODE1NjkyNjc4MVwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTAyNCAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiNDAyNzFcIiB3aWR0aD1cIjI1NlwiIGhlaWdodD1cIjI1NlwiPjxwYXRoIGQ9XCJNODAwLjI1NiA3NTYuNzM2SDIxNS43MjI2NjdhNjguMjY2NjY3IDY4LjI2NjY2NyAwIDAgMS02OC4yNjY2NjctNjguMjY2NjY3VjIzNS41MmE2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAxIDY4LjI2NjY2Ny02OC4yNjY2NjdoNTg0LjUzMzMzM2E2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAxIDY4LjI2NjY2NyA2OC4yNjY2Njd2NDUyLjc3ODY2N2E2OC4yNjY2NjcgNjguMjY2NjY3IDAgMCAxLTY4LjI2NjY2NyA2OC40MzczMzN6TTIxNS43MjI2NjcgMjE5LjY0OGExNS43MDEzMzMgMTUuNzAxMzMzIDAgMCAwLTE1LjcwMTMzNCAxNS43MDEzMzN2NDUyLjk0OTMzNGExNS44NzIgMTUuODcyIDAgMCAwIDE1LjcwMTMzNCAxNS44NzJoNTg0LjUzMzMzM2ExNS44NzIgMTUuODcyIDAgMCAwIDE1Ljg3Mi0xNS44NzJWMjM1LjUyYTE1Ljg3MiAxNS44NzIgMCAwIDAtMTUuODcyLTE1Ljg3MnpcIiBmaWxsPVwiIzdhYWVlYlwiIHAtaWQ9XCI0MDI3MlwiPjwvcGF0aD48cGF0aCBkPVwiTTY3Ni41MjI2NjcgODUxLjYyNjY2N0gzMzkuNDU2YTI2LjQ1MzMzMyAyNi40NTMzMzMgMCAwIDEgMC01Mi43MzZoMzM3LjA2NjY2N2EyNi40NTMzMzMgMjYuNDUzMzMzIDAgMSAxIDAgNTIuNzM2elwiIGZpbGw9XCIjN2FhZWViXCIgcC1pZD1cIjQwMjczXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNTYzLjIgNTgyLjk5NzMzM2gtMy4wNzJhMjYuNDUzMzMzIDI2LjQ1MzMzMyAwIDAgMS0yMS41MDQtMTcuMDY2NjY2bC03MS42OC0xODYuMzY4LTc2LjI4OCAxMjcuODI5MzMzYTI2LjQ1MzMzMyAyNi40NTMzMzMgMCAwIDEtMjIuNTI4IDEyLjhoLTg1LjMzMzMzM2EyNi40NTMzMzMgMjYuNDUzMzMzIDAgMCAxIDAtNTIuNzM2aDY5LjYzMmw5Ni4yNTYtMTYxLjI4YTI2LjQ1MzMzMyAyNi40NTMzMzMgMCAwIDEgMzYuMTgxMzMzLTkuMDQ1MzMzIDI2LjYyNCAyNi42MjQgMCAwIDEgMTEuMDkzMzMzIDEyLjk3MDY2Nmw3My44OTg2NjcgMTkwLjgwNTMzNCAyOC44NDI2NjctNDEuNDcyYTI2LjI4MjY2NyAyNi4yODI2NjcgMCAwIDEgMjEuNjc0NjY2LTExLjQzNDY2N2gxMTEuNjE2YTI2LjQ1MzMzMyAyNi40NTMzMzMgMCAwIDEgMCA1Mi43MzZINjM0Ljg4bC00OS4zMjI2NjcgNzAuOTk3MzMzYTI2LjQ1MzMzMyAyNi40NTMzMzMgMCAwIDEtMjIuMzU3MzMzIDExLjI2NHpcIiBmaWxsPVwiIzdhYWVlYlwiIHAtaWQ9XCI0MDI3NFwiPjwvcGF0aD48L3N2Zz5gO1xyXG5cclxuZXhwb3J0IHtcclxuICBCbG9nLFxyXG4gIExpbnV4LFxyXG4gIE5naW54LFxyXG4gIEdpdCxcclxuICBEb2NrZXIsXHJcbiAgQXBwc3RvcmUsXHJcbiAgUGhvdG8sXHJcbiAgTXVzaWMsXHJcbiAgRmlsbSxcclxuICBBYm91dCxcclxuICBMaW5rLFxyXG4gIE5hdixcclxuICBTaXRlQW5hbHl0aWNzLFxyXG4gIFN0YXR1cyxcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxpY29uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxpY29uXFxcXE5hdkljb24udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdGVlay1oeWRlL2RvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL2ljb24vTmF2SWNvbi50c1wiO2ltcG9ydCB7XHJcbiAgQmxvZyxcclxuICBMaW51eCxcclxuICBOZ2lueCxcclxuICBHaXQsXHJcbiAgRG9ja2VyLFxyXG4gIEFwcHN0b3JlLFxyXG4gIFBob3RvLFxyXG4gIE11c2ljLFxyXG4gIEZpbG0sXHJcbiAgQWJvdXQsXHJcbiAgTGluayxcclxuICBOYXYsXHJcbiAgU2l0ZUFuYWx5dGljcyxcclxuICBTdGF0dXMsXHJcbn0gZnJvbSBcIi4vU3ZnaWNvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRlZWtJY29uID0ge1xyXG4gIHRleHQ6IFwiVGVla1x1NEUzQlx1OTg5OFwiLFxyXG4gIGxpbms6IFwiL1RlZWtcIixcclxuICBzdWJNZW51OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY3MDlcdTVCNTBcdTgzRENcdTUzNTVcclxuICBpY29uUHJvcHM6IHtcclxuICAgIGljb246IFwiaHR0cHM6Ly92cC50ZWVrLnRvcC90ZWVrLWxvZ28tbWluaS5zdmdcIixcclxuICAgIGljb25UeXBlOiBcImltZ1wiLFxyXG4gICAgLy8gc2l6ZTogMTIsIC8vIFx1NTZGRVx1NjgwN1x1NTkyN1x1NUMwRlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVmRvaW5nSWNvbiA9IHtcclxuICB0ZXh0OiBcIlZkb2luZ1x1NEUzQlx1OTg5OFwiLFxyXG4gIGxpbms6IFwiL1Zkb2luZ1wiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogXCJodHRwczovL3Z1ZXByZXNzLnZ1ZWpzLm9yZy9pbWFnZXMvaGVyby5wbmdcIixcclxuICAgIGljb25UeXBlOiBcImltZ1wiLFxyXG4gICAgc2l6ZTogMTYsIC8vIFx1NTZGRVx1NjgwN1x1NTkyN1x1NUMwRlxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU1NMSWNvbiA9IHtcclxuICB0ZXh0OiBcIlNTTFx1OEJDMVx1NEU2NlwiLFxyXG4gIGxpbms6IFwiL1NTTFwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogXCJodHRwczovL2FsbGluc3NsLmNvbS9sb2dvLnN2Z1wiLFxyXG4gICAgaWNvblR5cGU6IFwiaW1nXCIsXHJcbiAgICBzaXplOiAxMiwgLy8gXHU1NkZFXHU2ODA3XHU1OTI3XHU1QzBGXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBCbG9nSWNvbiA9IHtcclxuICB0ZXh0OiBcIlx1NTM1QVx1NUJBMlx1NjQyRFx1NUVGQVwiLFxyXG4gIGxpbms6IFwiL0Jsb2dcIixcclxuICBzdWJNZW51OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY3MDlcdTVCNTBcdTgzRENcdTUzNTVcclxuICBpY29uUHJvcHM6IHtcclxuICAgIGljb246IEJsb2csXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOZ2lueEljb24gPSB7XHJcbiAgdGV4dDogXCJOZ2lueFwiLFxyXG4gIGxpbms6IFwiL05naW54XCIsXHJcbiAgc3ViTWVudTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NzA5XHU1QjUwXHU4M0RDXHU1MzU1XHJcbiAgaWNvblByb3BzOiB7XHJcbiAgICBpY29uOiBOZ2lueCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExpbnV4SWNvbiA9IHtcclxuICB0ZXh0OiBcIkxpbnV4XCIsXHJcbiAgbGluazogXCIvTGludXhcIixcclxuICBzdWJNZW51OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY3MDlcdTVCNTBcdTgzRENcdTUzNTVcclxuICBpY29uUHJvcHM6IHtcclxuICAgIGljb246IExpbnV4LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgR2l0SWNvbiA9IHtcclxuICB0ZXh0OiBcIkdpdFwiLFxyXG4gIGxpbms6IFwiL0dpdFwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogR2l0LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRG9ja2VySWNvbiA9IHtcclxuICB0ZXh0OiBcIkRvY2tlclwiLFxyXG4gIGxpbms6IFwiL0RvY2tlclwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogRG9ja2VyLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXBwc3RvcmVJY29uID0ge1xyXG4gIHRleHQ6IFwiXHU1QjlFXHU3NTI4XHU4RjZGXHU0RUY2XCIsXHJcbiAgbGluazogXCIvQXBwc3RvcmVcIixcclxuICBzdWJNZW51OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY3MDlcdTVCNTBcdTgzRENcdTUzNTVcclxuICBpY29uUHJvcHM6IHtcclxuICAgIGljb246IEFwcHN0b3JlLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGhvdG9JY29uID0ge1xyXG4gIHRleHQ6IFwiXHU3NkY4XHU1MThDXCIsXHJcbiAgbGluazogXCJodHRwczovL3Bob3RvLnNlYXNpci50b3AvXCIsXHJcbiAgc3ViTWVudTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NzA5XHU1QjUwXHU4M0RDXHU1MzU1XHJcbiAgaWNvblByb3BzOiB7XHJcbiAgICBpY29uOiBQaG90byxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE11c2ljSWNvbiA9IHtcclxuICB0ZXh0OiBcIlx1OTdGM1x1NEU1MFwiLFxyXG4gIGxpbms6IFwiaHR0cDovL211c2ljLmFsZ2VyLmZ1bi8jL1wiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogTXVzaWMsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBGaWxtSWNvbiA9IHtcclxuICB0ZXh0OiBcIlx1NUY3MVx1NzI0N1wiLFxyXG4gIGxpbms6IFwiL0ZpbG1cIixcclxuICBzdWJNZW51OiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTY3MDlcdTVCNTBcdTgzRENcdTUzNTVcclxuICBpY29uUHJvcHM6IHtcclxuICAgIGljb246IEZpbG0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBYm91dEljb24gPSB7XHJcbiAgdGV4dDogXCJcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDlcIixcclxuICBsaW5rOiBcIi9BYm91dFwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogQWJvdXQsXHJcbiAgfSxcclxuICBzaXplOiAyNiwgLy8gXHU1NkZFXHU2ODA3XHU1OTI3XHU1QzBGXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0ljb24gPSB7XHJcbiAgdGV4dDogXCJcdTUzQ0JcdTk0RkVcdTk0RkVcdTYzQTVcIixcclxuICBsaW5rOiBcIi9MaW5rXCIsXHJcbiAgc3ViTWVudTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NzA5XHU1QjUwXHU4M0RDXHU1MzU1XHJcbiAgaWNvblByb3BzOiB7XHJcbiAgICBpY29uOiBMaW5rLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2SWNvbiA9IHtcclxuICB0ZXh0OiBcIlx1N0Y1MVx1N0FEOVx1NUJGQ1x1ODIyQVwiLFxyXG4gIGxpbms6IFwiL25hdlwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogTmF2LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2l0ZUFuYWx5dGljc0ljb24gPSB7XHJcbiAgdGV4dDogXCJcdTdBRDlcdTcwQjlcdTdFREZcdThCQTFcIixcclxuICBsaW5rOiBcImh0dHBzOi8vdW1hbWkuc2Vhc2lyLnRvcC9zaGFyZS9ydlZCTlpXYTBzVUNONndHL3RlZWsuc2Vhc2lyLnRvcFwiLFxyXG4gIHN1Yk1lbnU6IHRydWUsIC8vIFx1NjYyRlx1NTQyNlx1NjcwOVx1NUI1MFx1ODNEQ1x1NTM1NVxyXG4gIGljb25Qcm9wczoge1xyXG4gICAgaWNvbjogU2l0ZUFuYWx5dGljcyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXR1c0ljb24gPSB7XHJcbiAgdGV4dDogXCJcdTdBRDlcdTcwQjlcdTcyQjZcdTYwMDFcIixcclxuICBsaW5rOiBcImh0dHBzOi8vc3RhdHVzLnNlYXNpci50b3AvXCIsXHJcbiAgc3ViTWVudTogdHJ1ZSwgLy8gXHU2NjJGXHU1NDI2XHU2NzA5XHU1QjUwXHU4M0RDXHU1MzU1XHJcbiAgaWNvblByb3BzOiB7XHJcbiAgICBpY29uOiBTdGF0dXMsXHJcbiAgfSxcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZWVrLWh5ZGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXENvbmZpZ0h5ZGVcXFxcTmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3RlZWstaHlkZS9kb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9OYXYudHNcIjsvLyBuYXZcdTVCRkNcdTgyMkFcdTY4MEZcdTkxNERcdTdGNkVcclxuaW1wb3J0IHtcclxuICBUZWVrSWNvbixcclxuICBWZG9pbmdJY29uLFxyXG4gIFNTTEljb24sXHJcbiAgQmxvZ0ljb24sXHJcbiAgTGludXhJY29uLFxyXG4gIE5naW54SWNvbixcclxuICBHaXRJY29uLFxyXG4gIERvY2tlckljb24sXHJcbiAgQXBwc3RvcmVJY29uLFxyXG4gIFBob3RvSWNvbixcclxuICBNdXNpY0ljb24sXHJcbiAgRmlsbUljb24sXHJcbiAgQWJvdXRJY29uLFxyXG4gIExpbmtJY29uLFxyXG4gIE5hdkljb24sXHJcbiAgU2l0ZUFuYWx5dGljc0ljb24sXHJcbiAgU3RhdHVzSWNvbixcclxufSBmcm9tIFwiLi9pY29uL05hdkljb25cIjtcclxuZXhwb3J0IGNvbnN0IE5hdiA9IFtcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1RDgzQ1x1REZFMVx1OTk5Nlx1OTg3NVwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiBcIlx1OTk5Nlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiXHU4RDc3XHU1OUNCXHU5ODc1XCIsIGxpbms6IFwiaHR0cHM6Ly9oeWRlLnNlYXNpci50b3AvXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1RDgzRFx1RENENlx1N0IxNFx1OEJCMFx1NEUxM1x1NjgwRlwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJOYXZJY29uXCIsXHJcbiAgICAgICAgcHJvcHM6IFRlZWtJY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogVmRvaW5nSWNvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJOYXZJY29uXCIsXHJcbiAgICAgICAgcHJvcHM6IFNTTEljb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21wb25lbnQ6IFwiTmF2SWNvblwiLFxyXG4gICAgICAgIHByb3BzOiBCbG9nSWNvbixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1RDgzRVx1RERGMFx1NURFNVx1NTE3N1x1OEQ0NFx1NkU5MFwiLCAvLyBcdTc2RUVcdTVGNTVcdTk4NzVcdTk0RkVcdTYzQTVcdUZGMENcdTZCNjRcdTU5MDQgbGluayBcdTY2MkYgdmRvaW5nIFx1NEUzQlx1OTg5OFx1NjVCMFx1NTg5RVx1NzY4NFx1OTE0RFx1N0Y2RVx1OTg3OVx1RkYwQ1x1NjcwOVx1NEU4Q1x1N0VBN1x1NUJGQ1x1ODIyQVx1NjVGNlx1RkYwQ1x1NTNFRlx1NEVFNVx1NzBCOVx1NTFGQlx1NEUwMFx1N0VBN1x1NUJGQ1x1ODIyQVx1OERGM1x1NTIzMFx1NzZFRVx1NUY1NVx1OTg3NVxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJOYXZJY29uXCIsXHJcbiAgICAgICAgcHJvcHM6IExpbnV4SWNvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJOYXZJY29uXCIsXHJcbiAgICAgICAgcHJvcHM6IE5naW54SWNvbixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbXBvbmVudDogXCJOYXZJY29uXCIsXHJcbiAgICAgICAgcHJvcHM6IEdpdEljb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21wb25lbnQ6IFwiTmF2SWNvblwiLFxyXG4gICAgICAgIHByb3BzOiBEb2NrZXJJY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogQXBwc3RvcmVJY29uLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHVEODNDXHVERkQ5XHVGRTBGXHU3NTFGXHU2RDNCXHU1QTMxXHU0RTUwXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogUGhvdG9JY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogTXVzaWNJY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogRmlsbUljb24sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgeyB0ZXh0OiBcIlx1RDgzRFx1REM0Mlx1NzU0NVx1NjI0MFx1NkIzMlx1OEEwMFwiLCBsaW5rOiBcIi9tZXNzYWdlLWFyZWEvXCIgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1RDgzRFx1REM0Rlx1NjU4N1x1N0FFMFx1N0QyMlx1NUYxNVwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU2NzJDXHU3QUQ5XCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTY1ODdcdTdBRTBcdTUyMDZcdTdDN0JcIiwgbGluazogXCIvY2F0ZWdvcmllcy9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjU4N1x1N0FFMFx1NjgwN1x1N0I3RVwiLCBsaW5rOiBcIi90YWdzL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU1RjUyXHU2ODYzXCIsIGxpbms6IFwiL2FyY2hpdmVzL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU2RTA1XHU1MzU1XCIsIGxpbms6IFwiL2FydGljbGVPdmVydmlldy9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1N0FEOVx1NzBCOVx1NzY3Qlx1NUY1NVwiLCBsaW5rOiBcIi9sb2dpbi9cIiB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1OThDRVx1OTY2OVx1NjNEMFx1NzkzQVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi9yaXNrLWxpbms/dGFyZ2V0PWh0dHBzOi8vdGVlay5zZWFzaXIudG9wL1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHVEODNDXHVERjEwXHU3QUQ5XHU3MEI5XHU0RkUxXHU2MDZGXCIsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogQWJvdXRJY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogTGlua0ljb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21wb25lbnQ6IFwiTmF2SWNvblwiLFxyXG4gICAgICAgIHByb3BzOiBOYXZJY29uLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tcG9uZW50OiBcIk5hdkljb25cIixcclxuICAgICAgICBwcm9wczogU2l0ZUFuYWx5dGljc0ljb24sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21wb25lbnQ6IFwiTmF2SWNvblwiLFxyXG4gICAgICAgIHByb3BzOiBTdGF0dXNJY29uLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdGVlay1oeWRlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxDb25maWdIeWRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxIZWFkLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3RlZWstaHlkZS9kb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9IZWFkLnRzXCI7Y29uc3QgZGVzY3JpcHRpb24gPSBbXCJIZCBTZWN1cml0eSBcdTRGN0ZcdTc1MjhcdTY1ODdcdTY4NjNcIiwgXCJcdThCQTRcdThCQzFcdTY4NDZcdTY3QjZcIl0udG9TdHJpbmcoKTtcclxuXHJcbi8vIFx1NUJGQ1x1NTFGQWhlYWQudHNcclxuZXhwb3J0IGNvbnN0IEhlYWREYXRhID0gW1xyXG4gIC8vIDUxLmxhXHU2NTcwXHU2MzZFXHU2MzAyXHU0RUY2XHJcbiAgW1xyXG4gICAgXCJzY3JpcHRcIixcclxuICAgIHtcclxuICAgICAgY2hhcnNldDogXCJVVEYtOFwiLFxyXG4gICAgICBpZDogXCJMQV9DT0xMRUNUXCIsXHJcbiAgICAgIHNyYzogXCIvL3Nkay41MS5sYS9qcy1zZGstcHJvLm1pbi5qc1wiLFxyXG4gICAgICBkZWZlcjogXCJkZWZlclwiLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIFwic2NyaXB0XCIsXHJcbiAgICB7IGRlZmVyOiBcImRlZmVyXCIgfSxcclxuICAgIGBMQS5pbml0KHtpZDpcIjNMbURWODQzU2dHeUMyWnBcIixjazpcIjNMbURWODQzU2dHeUMyWnBcIixhdXRvVHJhY2s6dHJ1ZSxoYXNoTW9kZTp0cnVlLHNjcmVlblJlY29yZDp0cnVlfSlgLFxyXG4gIF0sXHJcbiAgW1wibWV0YVwiLCB7IG5hbWU6IFwicmVmZXJyZXJcIiwgY29udGVudDogXCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIH1dLCAvL1x1NEUwRFx1ODQ5Q1x1NUI1MFx1N0VERlx1OEJBMVxyXG4gIFtcIm1ldGFcIiwgeyBuYW1lOiBcImF1dGhvclwiLCBjb250ZW50OiBcIlRpYW5rZVwiIH1dLFxyXG4gIFtcclxuICAgIFwibWV0YVwiLFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInZpZXdwb3J0XCIsXHJcbiAgICAgIGNvbnRlbnQ6XHJcbiAgICAgICAgXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MS4wLG1heGltdW0tc2NhbGU9MS4wLHVzZXItc2NhbGFibGU9bm9cIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICBcIm1ldGFcIixcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJrZXl3b3Jkc1wiLCBkZXNjcmlwdGlvbiB9XSxcclxuICBbXCJtZXRhXCIsIHsgbmFtZTogXCJiYWlkdS1zaXRlLXZlcmlmaWNhdGlvblwiLCBjb250ZW50OiBcImNvZGV2YS1RblkxWGg3NThqXCIgfV0sIC8vIFx1NzY3RVx1NUVBNlx1NjUzNlx1NUY1NVxyXG4gIFtcclxuICAgIFwibWV0YVwiLFxyXG4gICAgeyBuYW1lOiBcIm1zdmFsaWRhdGUuMDFcIiwgY29udGVudDogXCI0OENBQkU3MEY1MzhCOEQxMTc1NjcxNzZBQkYzMjVBRlwiIH0sXHJcbiAgXSwgLy8gQmluZyBcdTY1MzZcdTVGNTVcdTlBOENcdThCQzFcclxuICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCIvZmF2aWNvbi5pY29cIiwgdHlwZTogXCJpbWFnZS9wbmdcIiB9XSxcclxuICAvLyBcdTk2M0ZcdTkxQ0NcdTU3MjhcdTdFQkZcdTc3RTJcdTkxQ0ZcdTVFOTNcclxuICBbXHJcbiAgICBcImxpbmtcIixcclxuICAgIHtcclxuICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcclxuICAgICAgaHJlZjogXCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzI5ODkzMDZfdzMwM2VyYmlwOS5jc3NcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICAvLyBcdTk2M0ZcdTkxQ0NcdTU2RkVcdTY4MDdcdTVFOTNzeW1ib2wgXHU1RjE1XHU3NTI4XHJcbiAgICBcInNjcmlwdFwiLFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiaHR0cHM6Ly9hdC5hbGljZG4uY29tL3QvYy9mb250XzQ4OTk0NTJfeGo3YWNibHhweGouanNcIixcclxuICAgICAgbWVkaWE6IFwicHJpbnRcIixcclxuICAgICAgb25sb2FkOiBcInRoaXMubWVkaWE9J2FsbCdcIixcclxuICAgIH0sXHJcbiAgXSxcclxuICAvLyB1bWFtaVx1N0VERlx1OEJBMVxyXG4gIFtcclxuICAgIFwic2NyaXB0XCIsXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJodHRwczovL3VtYW1pLnNlYXNpci50b3Avc2NyaXB0LmpzXCIsXHJcbiAgICAgIFwiZGF0YS13ZWJzaXRlLWlkXCI6IFwiYWE1MTllYWQtNDJiYi00ZjBjLTk2YjUtMGNjZjYzMGY4MmJlXCIsXHJcbiAgICAgIGRlZmVyOiBcImRlZmVyXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1wibm9zY3JpcHRcIiwge30sICc8bWV0YSBodHRwLWVxdWl2PVwicmVmcmVzaFwiIGNvbnRlbnQ9XCIwOyB1cmw9e2h0dHBzOi8vd3d3LmJhaWR1LmNvbS99XCI+J10sIC8vIFx1Nzk4MVx1NzUyOGpzXHU4REYzXHU4RjZDXHJcbiAgLy9cdTUxNERcdThEMzlcdTc2ODRcdTk3RjNcdTRFNTBcdTY0QURcdTY1M0VcdTU2NjhcclxuICAvLyBbXHJcbiAgLy8gICBcInNjcmlwdFwiLFxyXG4gIC8vICAge1xyXG4gIC8vICAgICB0eXBlOiBcInRleHQvamF2YXNjcmlwdFwiLFxyXG4gIC8vICAgICBzcmM6IFwiaHR0cHM6Ly9jZG4uYm9vdGNkbi5uZXQvYWpheC9saWJzL2pxdWVyeS8zLjcuMS9qcXVlcnkubWluLmpzXCIsXHJcbiAgLy8gICAgIGRlZmVyOiBcImRlZmVyXCIsIC8vIFx1NkRGQlx1NTJBMGRlZmVyXHU1QzVFXHU2MDI3XHVGRjBDXHU3ODZFXHU0RkREXHU4MTFBXHU2NzJDXHU1NzI4RE9NXHU1MkEwXHU4RjdEXHU1QjhDXHU2MjEwXHU1NDBFXHU2MjY3XHU4ODRDXHJcbiAgLy8gICB9LFxyXG4gIC8vIF0sIC8vIFx1NjNEMlx1NTE2NVx1ODFFQVx1NUI5QVx1NEU0OVx1ODExQVx1NjcyQ1xyXG4gIC8vIFtcclxuICAvLyAgIFwic2NyaXB0XCIsXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHR5cGU6IFwidGV4dC9qYXZhc2NyaXB0XCIsXHJcbiAgLy8gICAgIGlkOiBcIm15aGtcIixcclxuICAvLyAgICAgc3JjOiBcImh0dHBzOi8vbXloa3cuY24vYXBpL3BsYXllci8xNzQxMzE4NTA2NzVcIixcclxuICAvLyAgICAga2V5OiBcIjE3NDEzMTg1MDY3NVwiLFxyXG4gIC8vICAgICBtOiBcIlwiLFxyXG4gIC8vICAgICBkZWZlcjogXCJkZWZlclwiLCAvLyBcdTZERkJcdTUyQTBkZWZlclx1NUM1RVx1NjAyN1x1RkYwQ1x1Nzg2RVx1NEZERFx1ODExQVx1NjcyQ1x1NTcyOERPTVx1NTJBMFx1OEY3RFx1NUI4Q1x1NjIxMFx1NTQwRVx1NjI2N1x1ODg0Q1xyXG4gIC8vICAgfSxcclxuICAvLyBdLFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdGVlay1oeWRlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFx0aGVtZVxcXFxpY29uXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcdGhlbWVcXFxcaWNvblxcXFxpY29ucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovY29kZS90ZWVrLWh5ZGUvZG9jcy8udml0ZXByZXNzL3RoZW1lL2ljb24vaWNvbnMudHNcIjtjb25zdCBnaXRlZSA9IGA8c3ZnIHQ9XCIxNzQzODc1Mjk4Mjk4XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIyMzg4XCIgd2lkdGg9XCIyMDBcIiBoZWlnaHQ9XCIyMDBcIj48cGF0aCBkPVwiTTUxMiAxMDI0QzIyOS4yMjI0IDEwMjQgMCA3OTQuNzc3NiAwIDUxMlMyMjkuMjIyNCAwIDUxMiAwczUxMiAyMjkuMjIyNCA1MTIgNTEyLTIyOS4yMjI0IDUxMi01MTIgNTEyeiBtMjU5LjE0ODgtNTY4Ljg4MzJINDgwLjQwOTZhMjUuMjkyOCAyNS4yOTI4IDAgMCAwLTI1LjI5MjggMjUuMjkyOGwtMC4wMjU2IDYzLjIwNjRjMCAxMy45NTIgMTEuMzE1MiAyNS4yOTI4IDI1LjI2NzIgMjUuMjkyOGgxNzcuMDI0YzEzLjk3NzYgMCAyNS4yOTI4IDExLjMxNTIgMjUuMjkyOCAyNS4yNjcydjEyLjY0NjRhNzUuODUyOCA3NS44NTI4IDAgMCAxLTc1Ljg1MjggNzUuODUyOEgzNjYuNTkyYTI1LjI5MjggMjUuMjkyOCAwIDAgMS0yNS4yNjcyLTI1LjI5Mjh2LTI0MC4xNzkyYTc1Ljg1MjggNzUuODUyOCAwIDAgMSA3NS44MjcyLTc1Ljg1MjhoMzUzLjk0NTZhMjUuMjkyOCAyNS4yOTI4IDAgMCAwIDI1LjI2NzItMjUuMjkyOGwwLjA3NjgtNjMuMjA2NGEyNS4yOTI4IDI1LjI5MjggMCAwIDAtMjUuMjY3Mi0yNS4yOTI4SDQxNy4xNTJhMTg5LjYxOTIgMTg5LjYxOTIgMCAwIDAtMTg5LjYxOTIgMTg5LjY0NDh2MzUzLjk0NTZjMCAxMy45Nzc2IDExLjMxNTIgMjUuMjkyOCAyNS4yOTI4IDI1LjI5MjhoMzcyLjk0MDhhMTcwLjY0OTYgMTcwLjY0OTYgMCAwIDAgMTcwLjY0OTYtMTcwLjY0OTZ2LTE0NS40MDhhMjUuMjkyOCAyNS4yOTI4IDAgMCAwLTI1LjI5MjgtMjUuMjY3MnpcIiBmaWxsPVwiI0M3MUQyM1wiIHAtaWQ9XCIyMzg5XCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBlbWFpbCA9IGA8c3ZnIHQ9XCIxNzQzODc1NjIwMTg3XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIxNjY5N1wiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PHBhdGggZD1cIk01MTIgMEE1MTIgNTEyIDAgMSAxIDAgNTEyIDUxMiA1MTIgMCAwIDEgNTEyIDB6XCIgZmlsbD1cIiNmZjQ4NWZcIiBwLWlkPVwiMTY2OThcIiBkYXRhLXNwbS1hbmNob3ItaWQ9XCJhMzEzeC5zZWFyY2hfaW5kZXguMC5pMTMuNzAxODNhODF5VHlsZklcIiBjbGFzcz1cInNlbGVjdGVkXCI+PC9wYXRoPjxwYXRoIGQ9XCJNNzI2Ljk4MDkyMyAyOTUuMzg0NjE1SDI4MC4xMjMwNzdBNjMuNjA2MTU0IDYzLjYwNjE1NCAwIDAgMCAyMTYuNjE1Mzg1IDM1OC44OTIzMDh2Mjk1LjE4NzY5MmE2My42MDYxNTQgNjMuNjA2MTU0IDAgMCAwIDYzLjUwNzY5MiA2My41MDc2OTJoNDQ2Ljg1Nzg0NmE2My42MDYxNTQgNjMuNjA2MTU0IDAgMCAwIDYzLjUwNzY5Mi02My41MDc2OTJ2LTI5NS4xODc2OTJBNjMuNjA2MTU0IDYzLjYwNjE1NCAwIDAgMCA3MjYuOTgwOTIzIDI5NS4zODQ2MTV6IG0yNS40MDMwNzcgMzU4LjcxNTA3N2EyNS40ODE4NDYgMjUuNDgxODQ2IDAgMCAxLTI1LjQwMzA3NyAyNS40MDMwNzdIMjgwLjEyMzA3N2EyNS40ODE4NDYgMjUuNDgxODQ2IDAgMCAxLTI1LjQwMzA3Ny0yNS40MDMwNzd2LTI5NS4xODc2OTJhMjUuNDgxODQ2IDI1LjQ4MTg0NiAwIDAgMSAyNS40MDMwNzctMjUuNDAzMDc3aDQ0Ni44NTc4NDZhMjUuNDgxODQ2IDI1LjQ4MTg0NiAwIDAgMSAyNS40MDMwNzcgMjUuNDAzMDc3elwiIGZpbGw9XCIjRkZGRkZGXCIgcC1pZD1cIjE2Njk5XCI+PC9wYXRoPjxwYXRoIGQ9XCJNNjkzLjcyMDYxNSAzOTYuMzA3NjkybC0xOTAuMTQ4OTIzIDExOS45NjU1MzktMTkwLjE0ODkyMy0xMTkuOTY1NTM5YTE5LjA2MjE1NCAxOS4wNjIxNTQgMCAwIDAtMjAuMzIyNDYxIDMyLjIzNjMwOGwyMDAuMDczODQ2IDEyNi4yNDczODVhMTkuMDYyMTU0IDE5LjA2MjE1NCAwIDAgMCAxMC4xNjEyMzEgMi45MzQxNTNoMC42MzAxNTNhMTkuMDYyMTU0IDE5LjA2MjE1NCAwIDAgMCAxMC4xNjEyMzEtMi45MzQxNTNsMjAwLjA3Mzg0Ni0xMjYuMjQ3Mzg1YTE5LjEwMTUzOCAxOS4xMDE1MzggMCAxIDAtMjAuNDgtMzIuMjM2MzA4elwiIGZpbGw9XCIjRkZGRkZGXCIgcC1pZD1cIjE2NzAwXCI+PC9wYXRoPjwvc3ZnPmA7XHJcblxyXG5jb25zdCBXaGF0c0FwcCA9IGA8c3ZnIHQ9XCIxNzQzODc1NzQ5NjA0XCIgY2xhc3M9XCJpY29uXCIgdmlld0JveD1cIjAgMCAxMDI0IDEwMjRcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHAtaWQ9XCIyMDQ3OVwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PHBhdGggZD1cIk01MTIgNTEybS01MTIgMGE1MTIgNTEyIDAgMSAwIDEwMjQgMCA1MTIgNTEyIDAgMSAwLTEwMjQgMFpcIiBmaWxsPVwiIzFCRDc0MVwiIHAtaWQ9XCIyMDQ4MFwiPjwvcGF0aD48cGF0aCBkPVwiTTc2MC4yIDI2OS41Yy02Mi4xLTYxLjQtMTQ0LjYtOTUuMi0yMzIuNS05NS4yLTE4MS4xIDAtMzI4LjUgMTQ1LjctMzI4LjUgMzI0LjggMCA1Ny4yIDE1LjEgMTEzLjIgNDMuOSAxNjIuM2wtNDYuNiAxNjguMyAxNzQuMi00NS4yYzQ4LjIgMjUuOSAxMDIuMSAzOS41IDE1NyAzOS42aDAuMWMxODEuMSAwIDMyOC42LTE0NS43IDMyOC42LTMyNC44IDAuMS04Ni44LTM0LjEtMTY4LjMtOTYuMi0yMjkuOHpNNTI3LjggNzY5LjNjLTQ5IDAtOTctMTMtMTM5LjEtMzcuNmwtMTAtNS45LTEwMy40IDI2LjcgMjcuNi05OS42LTYuNS0xMC4yYy0yNy40LTQzLTQyLTkyLjgtNDEuOC0xNDMuNiAwLTE0OC45IDEyMi41LTI3MCAyNzMuMy0yNzAgNzIuOSAwIDE0MS42IDI4LjIgMTkzLjIgNzkuMSA1MS40IDUwLjYgODAuMSAxMTkuMyA3OS45IDE5MS0wLjEgMTQ5LTEyMi42IDI3MC4xLTI3My4yIDI3MC4xek02NzcuNiA1NjdjLTguMi00LjEtNDguNi0yMy43LTU2LjEtMjYuNC03LjUtMi43LTEzLTQuMS0xOC41IDQuMS01LjQgOC4xLTIxLjIgMjYuNC0yNiAzMS45LTQuOCA1LjQtOS42IDYuMS0xNy43IDIuMS04LjItNC4xLTM0LjctMTIuNy02Ni4xLTQwLjMtMjQuNC0yMS41LTQwLjktNDguMS00NS43LTU2LjItNC44LTguMS0wLjUtMTIuNiAzLjYtMTYuNSAzLjgtMy42IDguMi05LjUgMTIuMy0xNC4yIDQuMS00LjcgNS40LTguMSA4LjItMTMuNiAyLjctNS40IDEuNC0xMC4xLTAuNi0xNC4yLTIuMS00LjEtMTguNS00NC0yNS4zLTYwLjMtNi42LTE1LjktMTMuNS0xMy43LTE4LjUtMTMuOS00LjgtMC4yLTEwLjItMC4yLTE1LjctMC4yLTUuNCAwLTE0LjQgMi0yMS45IDEwLjEtNy41IDguMS0yOC43IDI3LjgtMjguNyA2Ny43IDAgMzkuOSAyOS40IDc4LjUgMzMuNiA4NCA0LjEgNS40IDU3LjkgODcuNCAxNDAuMyAxMjIuNSAxOS42IDguMyAzNC44IDEzLjMgNDYuOCAxNy4xIDE5LjcgNi4xIDM3LjYgNS4yIDUxLjcgMy4yIDE1LjgtMi4zIDQ4LjYtMTkuNiA1NS40LTM4LjUgNi45LTE4LjkgNi45LTM1LjIgNC44LTM4LjUtMi4xLTMuNy03LjYtNS44LTE1LjktOS45eiBtMCAwXCIgZmlsbD1cIiNGRkZGRkZcIiBwLWlkPVwiMjA0ODFcIj48L3BhdGg+PC9zdmc+YDtcclxuXHJcbmNvbnN0IHRlbGVncmFtID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCAyNCAyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEyXCIgZmlsbD1cIiMwMzliZTVcIj48L2NpcmNsZT5cclxuICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJtNS40OTEgMTEuNzQgMTEuNTctNC40NjFjLjUzNy0uMTk0IDEuMDA2LjEzMS44MzIuOTQzbC4wMDEtLjAwMS0xLjk3IDkuMjgxYy0uMTQ2LjY1OC0uNTM3LjgxOC0xLjA4NC41MDhsLTMtMi4yMTEtMS40NDcgMS4zOTRjLS4xNi4xNi0uMjk1LjI5NS0uNjA1LjI5NWwuMjEzLTMuMDUzIDUuNTYtNS4wMjNjLjI0Mi0uMjEzLS4wNTQtLjMzMy0uMzczLS4xMjFsLTYuODcxIDQuMzI2LTIuOTYyLS45MjRjLS42NDMtLjIwNC0uNjU3LS42NDMuMTM2LS45NTN6XCI+PC9wYXRoPlxyXG48L3N2Zz5gO1xyXG5cclxuZXhwb3J0IHsgZ2l0ZWUsIGVtYWlsLCBXaGF0c0FwcCwgdGVsZWdyYW0gfTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZWVrLWh5ZGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXENvbmZpZ0h5ZGVcXFxcU29jaWFsTGlua3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdGVlay1oeWRlL2RvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL1NvY2lhbExpbmtzLnRzXCI7aW1wb3J0IHsgZ2l0ZWUsIGVtYWlsLCBXaGF0c0FwcCwgdGVsZWdyYW0gfSBmcm9tIFwiLi4vdGhlbWUvaWNvbi9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbExpbmtzID0gW1xyXG4gIHtcclxuICAgIGljb246IHsgc3ZnOiBnaXRlZSB9LFxyXG4gICAgbGluazogXCJodHRwczovL2dpdGVlLmNvbS9TZWFzaXJIeWRlL3RlZWstaHlkZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogeyBzdmc6IGVtYWlsIH0sXHJcbiAgICBsaW5rOiBcIm1haWx0bzpzZWFzaXI2NjZAZ21haWwuY29tXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpY29uOiB7IHN2ZzogV2hhdHNBcHAgfSxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQvP3Bob25lPTEzNTI3MDYzNDE5JnRleHQ9SGVsbG9cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IHsgc3ZnOiB0ZWxlZ3JhbSB9LFxyXG4gICAgbGluazogXCJodHRwczovL3QubWUvc2Vhc2lyX0JvdFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogXCJnaXRodWJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0tlbGUtQmluZ3Rhbmcvdml0ZXByZXNzLXRoZW1lLXRlZWsvdHJlZS9kZXZcIixcclxuICB9LFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdGVlay1oeWRlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxDb25maWdIeWRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVxcXFxDb21tZW50LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3RlZWstaHlkZS9kb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9Db21tZW50LnRzXCI7Ly8gXHU4QkM0XHU4QkJBXHU5MTREXHU3RjZFXHJcbmV4cG9ydCBjb25zdCBDb21tZW50RGF0YSA9IHtcclxuICAvLyB0d2lrb28gXHU5MTREXHU3RjZFXHVGRjBDXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly90d2lrb28uanMub3JnL1xyXG4gIGVudklkOiBcImh0dHBzOi8vdHdpa29vLnNlYXNpci50b3AvXCIsXHJcbiAgLy8gbGluazogXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3R3aWtvb0AxLjYuNDEvZGlzdC90d2lrb28uYWxsLm1pbi5qc1wiLCAvL3RlZWtcdTRFM0JcdTk4OThcdTUxODVcdTdGNkVcclxuICB2ZXJzaW9uOiBcIjEuNi40MlwiLFxyXG5cclxuICAvLyB3YWxpbmUgXHU5MTREXHU3RjZFXHVGRjBDXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly93YWxpbmUuanMub3JnL1xyXG4gIC8vIHNlcnZlclVSTDogXCJodHRwczovL3RrLndhbGluZS55b3VuZ2tidC5jbi9cIixcclxuICAvLyBqc0xpbms6IFwiaHR0cHM6Ly91bnBrZy5jb20vQHdhbGluZS9jbGllbnRAdjMvZGlzdC93YWxpbmUuanNcIixcclxuICAvLyBjc3NMaW5rOiBcImh0dHBzOi8vdW5wa2cuY29tL0B3YWxpbmUvY2xpZW50QHYzL2Rpc3Qvd2FsaW5lLmNzc1wiLFxyXG5cclxuICAvLyBnaXNjdXMgXHU5MTREXHU3RjZFXHVGRjBDXHU1Qjk4XHU3RjUxXHVGRjFBaHR0cHM6Ly9naXNjdXMuYXBwL3poLUNOXHJcbiAgLy8gcmVwbzogXCJLZWxlLUJpbmd0YW5nL3ZpdGVwcmVzcy10aGVtZS10ZWVrXCIsXHJcbiAgLy8gcmVwb0lkOiBcIlJfa2dET05wVmZCQVwiLFxyXG4gIC8vIGNhdGVnb3J5OiBcIkFubm91bmNlbWVudHNcIixcclxuICAvLyBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPTnBWZkJNNENtM3Y5XCIsXHJcblxyXG4gIC8vIGFydGFsayBcdTkxNERcdTdGNkVcdUZGMENcdTVCOThcdTdGNTFcdUZGMUFodHRwczovL2FydGFsay5qcy5vcmcvXHJcbiAgLy8gc2VydmVyOiBcIlwiLFxyXG4gIC8vIHNpdGU6IFwiXCIsXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZWVrLWh5ZGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXENvbmZpZ0h5ZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGNvZGVcXFxcdGVlay1oeWRlXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxDb25maWdIeWRlXFxcXEZvb3Rlckdyb3VwLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2RlL3RlZWstaHlkZS9kb2NzLy52aXRlcHJlc3MvQ29uZmlnSHlkZS9Gb290ZXJHcm91cC50c1wiOy8vIFx1OTg3NVx1ODExQVx1NEZFMVx1NjA2Rlx1N0VDNFx1OTE0RFx1N0Y2RVxyXG5leHBvcnQgY29uc3QgRm9vdGVyR3JvdXAgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU1MzVBXHU1QkEyXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IG5hbWU6IFwiXHU1MTY4XHU5MEU4XHU1MjA2XHU3QzdCXCIsIGxpbms6IFwiL2NhdGVnb3JpZXNcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiXHU1MTY4XHU5MEU4XHU2ODA3XHU3QjdFXCIsIGxpbms6IFwiL3RhZ3NcIiB9LFxyXG4gICAgICB7IG5hbWU6IFwiXHU2NTg3XHU3QUUwXHU1RjUyXHU2ODYzXCIsIGxpbms6IFwiL2FyY2hpdmVzUGFnZVwiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJcdTUxNjhcdTkwRThcdTZFMDVcdTUzNTVcIiwgbGluazogXCIvYXJ0aWNsZU92ZXJ2aWV3XCIgfSxcclxuXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXHU0RTEzXHU2ODBGXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7IG5hbWU6IFwiVGVlSyBcdTRFM0JcdTk4OThcIiwgbGluazogXCIvVGVla1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJWZG9pbmdcdTRFM0JcdTk4OThcIiwgbGluazogXCIvVmRvaW5nL1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJTU0xcdThCQzFcdTRFNjZcIiwgbGluazogXCIvU1NMXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcdTk4NzVcdTk3NjJcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJcdTc1NDVcdTYyNDBcdTZCMzJcdThBMDBcIiwgbGluazogXCIvbWVzc2FnZS1hcmVhL1wiIH0sXHJcbiAgICAgIHsgbmFtZTogXCJcdTUxNzNcdTRFOEVcdTY3MkNcdTdBRDlcIiwgbGluazogXCIvYWJvdXQtd2Vic2l0ZS9cIiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlx1NjcwRFx1NTJBMVwiLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IFwiXHU3QUQ5XHU3MEI5XHU3RURGXHU4QkExXCIsXHJcbiAgICAgICAgbGluazogXCJodHRwczovL3VtYW1pLnNlYXNpci50b3Avc2hhcmUvcnZWQk5aV2Ewc1VDTjZ3Ry90ZWVrLnNlYXNpci50b3BcIixcclxuICAgICAgfSxcclxuICAgICAgeyBuYW1lOiBcIlx1N0FEOVx1NzBCOVx1NzJCNlx1NjAwMVwiLCBsaW5rOiBcImh0dHBzOi8vc3RhdHVzLnNlYXNpci50b3AvXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2RlXFxcXHRlZWstaHlkZVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcQ29uZmlnSHlkZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcY29kZVxcXFx0ZWVrLWh5ZGVcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXENvbmZpZ0h5ZGVcXFxcV2FsbGFwZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2NvZGUvdGVlay1oeWRlL2RvY3MvLnZpdGVwcmVzcy9Db25maWdIeWRlL1dhbGxhcGVyLnRzXCI7Ly8gXHU5OTk2XHU5ODc1XHU1OEMxXHU3RUI4XHJcbmV4cG9ydCBjb25zdCBXYWxscGFwZXIgPSBbXHJcbiAgXCIvaG9tZS9iZzEud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcyLndlYnBcIixcclxuICBcIi9ob21lL2JnMy53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzQud2VicFwiLFxyXG4gIFwiL2hvbWUvYmc1LndlYnBcIixcclxuICBcIi9ob21lL2JnNi53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzcud2VicFwiLFxyXG4gIFwiL2hvbWUvYmc4LndlYnBcIixcclxuICBcIi9ob21lL2JnOS53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzEwLndlYnBcIixcclxuICBcIi9ob21lL2JnMTEud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcxMi53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzEzLndlYnBcIixcclxuICBcIi9ob21lL2JnMTQud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcxNS53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzE2LndlYnBcIixcclxuICBcIi9ob21lL2JnMTcud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcxOC53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzE5LndlYnBcIixcclxuICBcIi9ob21lL2JnMjAud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcyMS53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzIyLndlYnBcIixcclxuICBcIi9ob21lL2JnMjMud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcyNC53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzI1LndlYnBcIixcclxuICBcIi9ob21lL2JnMjYud2VicFwiLFxyXG4gIFwiL2hvbWUvYmcyNy53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzI4LndlYnBcIixcclxuICBcIi9ob21lL2JnMjkud2VicFwiLFxyXG4gIFwiL2hvbWUvYmczMC53ZWJwXCIsXHJcbiAgXCIvaG9tZS9iZzMxLndlYnBcIixcclxuXTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UixTQUFTLG9CQUFvQjtBQUNwVCxTQUFTLHdCQUF3QjtBQUVqQztBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUNQLE9BQU8sY0FBYzs7O0FDUHNULElBQU0sT0FBTztBQUV4VixJQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYWQsSUFBTSxRQUFRO0FBQUE7QUFBQTtBQUlkLElBQU0sTUFBTTtBQUFBO0FBQUE7QUFJWixJQUFNLFNBQVM7QUFBQTtBQUFBO0FBSWYsSUFBTSxXQUFXO0FBQUE7QUFBQTtBQUlqQixJQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT2QsSUFBTSxRQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9kLElBQU0sT0FBTztBQUViLElBQU0sUUFBUTtBQUVkLElBQU0sT0FBTztBQUViLElBQU0sTUFBTTtBQUVaLElBQU0sZ0JBQWdCO0FBRXRCLElBQU0sU0FBUzs7O0FDdENSLElBQU0sV0FBVztBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBO0FBQUEsRUFFWjtBQUNGO0FBRU8sSUFBTSxhQUFhO0FBQUEsRUFDeEIsTUFBTTtBQUFBLEVBQ04sTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBO0FBQUEsRUFDVCxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUE7QUFBQSxFQUNSO0FBQ0Y7QUFFTyxJQUFNLFVBQVU7QUFBQSxFQUNyQixNQUFNO0FBQUEsRUFDTixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUE7QUFBQSxFQUNULFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sV0FBVztBQUFBLEVBQ3RCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sVUFBVTtBQUFBLEVBQ3JCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sYUFBYTtBQUFBLEVBQ3hCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sZUFBZTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1QsTUFBTTtBQUFBLEVBQ1I7QUFDRjtBQUVPLElBQU0sWUFBWTtBQUFBLEVBQ3ZCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQTtBQUFBLEVBQ1QsV0FBVztBQUFBLElBQ1Qs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
