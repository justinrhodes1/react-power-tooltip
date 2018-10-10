
        // switch (arrowPos) {
        //     case 'topLeft':
        //         top = '8px';
        //         left = calcHPos(perc, 4);
        //         break;
        //     case 'topCenter':
        //         top = '8px';
        //         left = calcHPos(perc, 2, 5);
        //         break;
        //     case 'topRight':
        //         top = '8px';
        //         left = calc(perc, 4, null, 3);
        //         break;
        //     case 'bottomLeft':
        //         top = calcVPos(0, totHeight, 1, 11);
        //         left = calcHPos(perc, 4);
        //         break;
        //     case 'bottomCenter':
        //         top = calcVPos(0, totHeight, 1, 11)
        //         left = calcHPos(perc, 2, 5);
        //         break;
        //     case 'bottomRight':
        //         top = calcVPos(0, totHeight, 1, 11)
        //         left = calcHPos(perc, 4, null, 3);
        //         break;
        //     case 'leftTop':
        //         left = '8px';
        //         top = calcVPos(0, firstSpanH, 2, 8);
        //         if (tooltip.center) {
        //             top = calcVPos(50, firstSpanH, 2);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, firstSpanH, 2, -8);
        //         }
        //         break;
        //     case 'leftCenter':
        //         left = '8px';
        //         top = calcVPos(0, totHeight, 2, 8);
        //         if (tooltip.center) {
        //             top = calcVPos(50, totHeight, 2);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, totHeight, 2, -8);
        //         }
        //         break;
        //     case 'leftBottom':
        //         left = '8px';
        //         top = calcVPos(0, lastSpanH, 2, 8, totHeight);
        //         if (tooltip.center) {
        //             top = calcVPos(50, lastSpanH, 2, null, totHeight);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, lastSpanH, 2, -8, totHeight);
        //         }
        //         break;
        //     case 'rightTop':
        //         left = '-8px';
        //         top = calcVPos(0, firstSpanH, 2, 8);
        //         if (tooltip.center) {
        //             top = calcVPos(50, firstSpanH, 2);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, firstSpanH, 2, -8);
        //         }
        //         break;
        //     case 'rightCenter':
        //         left = '-8px';
        //         top = calcVPos(0, totHeight, 2, 8);
        //         if (tooltip.center) {
        //             top = calcVPos(50, totHeight, 2);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, totHeight, 2);
        //         }
        //         break;
        //     case 'rightBottom':
        //         left = '-8px';
        //         top = calcVPos(0, lastSpanH, 2, 8, totHeight);
        //         if (tooltip.center) {
        //             top = calcVPos(50, lastSpanH, 2, null, totHeight);
        //         } else if (tooltip.bottom) {
        //             top = calcVPos(100, lastSpanH, 2, -8, totHeight);
        //         }
        //         break;
        //     default:
        //         left = '';
        //         top = '';
        //         break;
        // }

        // let left = '';
        // let top = '';
        // let perc = calcPerc(50, 0, 100);

        // if (arrow.topLeft) {
        //     top = '8px';
        //     left = calcHPos(perc, 4);
        // } else if (arrow.topCenter) {
        //     top = '8px';
        //     left = calcHPos(perc, 2, 5);
        // } else if (arrow.topRight) {
        //     top = '8px';
        //     left = calc(perc, 4, null, 3);
        // } else if (arrow.bottomLeft) {
        //     top = calcVPos(0, totHeight, 1, 11);
        //     left = calcHPos(perc, 4);
        // } else if (arrow.bottomCenter) {
        //     top = calcVPos(0, totHeight, 1, 11)
        //     left = calcHPos(perc, 2, 5);
        // } else if (arrow.bottomRight) {
        //     top = calcVPos(0, totHeight, 1, 11)
        //     left = calcHPos(perc, 4, null, 3);
        // } else if (arrow.leftTop) {
        //     left = '8px';
        //     top = calcVPos(0, firstSpanH, 2, 8);
        //     if (tooltip.center) {
        //         top = calcVPos(50, firstSpanH, 2);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, firstSpanH, 2, -8);
        //     }
        // } else if (arrow.leftCenter) {
        //     left = '8px';
        //     top = calcVPos(0, totHeight, 2, 8);
        //     if (tooltip.center) {
        //         top = calcVPos(50, totHeight, 2);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, totHeight, 2, -8);
        //     }
        // } else if (arrow.leftBottom) {
        //     left = '8px';
        //     top = calcVPos(0, lastSpanH, 2, 8, totHeight);
        //     if (tooltip.center) {
        //         top = calcVPos(50, lastSpanH, 2, null, totHeight);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, lastSpanH, 2, -8, totHeight);
        //     }

        // } else if (arrow.rightTop) {
        //     left = '-8px';
        //     top = calcVPos(0, firstSpanH, 2, 8);
        //     if (tooltip.center) {
        //         top = calcVPos(50, firstSpanH, 2);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, firstSpanH, 2, -8);
        //     }

        // } else if (arrow.rightCenter) {
        //     left = '-8px';
        //     top = calcVPos(0, totHeight, 2, 8);
        //     if (tooltip.center) {
        //         top = calcVPos(50, totHeight, 2);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, totHeight, 2);
        //     }

        // } else if (arrow.rightBottom) {
        //     left = '-8px';
        //     top = calcVPos(0, lastSpanH, 2, 8, totHeight);
        //     if (tooltip.center) {
        //         top = calcVPos(50, lastSpanH, 2, null, totHeight);
        //     } else if (tooltip.bottom) {
        //         top = calcVPos(100, lastSpanH, 2, -8, totHeight);
        //     }
        // }