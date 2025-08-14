/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
//导入直播源
import { m3u_txt } from './scms-ctcc.js';

export default {
  async fetch(request, env, ctx) {
    /*
    fetch('./scms-ctcc.m3u')
    .then(response => response.json())
    .then(data => {
      console.log(data); // 处理你的数据
    })
    .catch(error => console.error('Error loading the data:', error));
    */
    //b64_to_utf8(m3ub_ase64);
    return new Response(m3u_txt);
  }
};

function b64_to_utf8(str) {
  //atob函数来对Base64编码的字符串进行解码，
  //但需要注意的是，atob函数只能处理ASCII字符
  return decodeURIComponent(escape(atob(str)));
}

