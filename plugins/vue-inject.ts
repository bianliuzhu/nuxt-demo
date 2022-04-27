/*
 * @Description:
 * @Author: Gleason
 * @Date: 2022-04-27 14:16:35
 * @LastEditors: Gleason
 * @LastEditTime: 2022-04-27 14:18:30
 */
import Vue from 'vue'

Vue.prototype.$MyInjectedFunc = (string: string) =>
	console.log('绑定的Vue实例的参数', string)
