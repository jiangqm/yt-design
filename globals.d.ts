/*
 * @Author: jiangqm
 * @Date: 2023-09-12 17:20:59
 * @Description: 
 */
declare module '*.scss';

declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
  }

  declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }