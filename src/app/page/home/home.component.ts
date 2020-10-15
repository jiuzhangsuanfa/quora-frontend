import { Component, OnInit } from '@angular/core';

interface Question {
  title: string;
  date: Date;
  text: string;
  image: string;
  action: {
    like: number;
    dislike: number;
    comment: number;
  }
}

function random() {
  return Math.trunc(Math.random() * 1000 + 300);
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions: Question[] = [];

  constructor() { }

  ngOnInit() {
    this.questions.push(
      {
        title: '当初群众对人民公社为什么积极性不高？',
        image: this.randomImage(),
        date: new Date(),
        text: '最近网上推崇毛主席，推崇公有制，民愤积累太久。 有些答案家里靠经商发了财，开始反感公有制，实在是太没礼貌了。 靠私有制发了财的人，怎么会和劳动…',
        action: {
          like: random(),
          dislike: random(),
          comment: random(),
        }
      }, {
      title: '前端必备javascript书籍测评【含红宝书和绿皮书】',
      image: this.randomImage(),
      date: new Date(),
      text: '近日，俄罗斯一家商店的保安公布了一段监控视频，曝光了一女子的行窃全程。视频中，该女子身穿灰色连衣裙，1、生病我感觉不可能，按局座的性格生病停更肯定会和小橘子说的。 2、商业纠纷，这更不可能了……局座的地位和影响力和他纠纷不就是放着钱不赚吗？1、生病我感觉不可能，按局座的性格生病停更肯定会和小橘子说的。 2、商业纠纷，这更不可能了……局座的地位和影响力和他纠纷不就是放着钱不赚吗？接连拿了六件商品塞进裙里。别的顾客路过时，她也旁若无人照偷无误。目前，警方已介入此事，正寻找这名涉…',
      action: {
        like: random(),
        dislike: random(),
        comment: random(),
      }
    }, {
      title: '男生怎么跟理发店店员描述要剪的发型？',
      image: this.randomImage(),
      date: new Date(),
      text: '1、生病我感觉不可能，按局座的性格生病停更肯定会和小橘子说的。 2、商业纠纷，这更不可能了……局座的地位和影响力和他纠纷不就是放着钱不赚吗？1、生病我感觉不可能，按局座的性格生病停更肯定会和小橘子说的。 2、商业纠纷，这更不可能了……局座的地位和影响力和他纠纷不就是放着钱不赚吗？1、生病我感觉不可能，按局座的性格生病停更肯定会和小橘子说的。 2、商业纠纷，这更不可能了……局座的地位和影响力和他纠纷不就是放着钱不赚吗？',
      action: {
        like: random(),
        dislike: random(),
        comment: random(),
      }
    }, {
      title: '一次搞定前端“核心主线”——从输入URL到页面展示发生了什么',
      image: this.randomImage(),
      date: new Date(),
      text: '卧槽！让我来，目前有着5万多小金库的女大学生可以拥有回答的资格趴！！！看了辣辣么辣么多滴回答， 感觉俺这个是最简单粗暴的，是最适合懒人的，只要动动手指就可以，核心一点“信息差=最牛逼的兼职”',
      action: {
        like: random(),
        dislike: random(),
        comment: random(),
      }
    }, {
      title: '罗斯福总统为什么拒绝马云的福报',
      image: this.randomImage(),
      date: new Date(),
      text: '卧槽！让我来，目前有着5万多小金库的女大学生可以拥有回答的资格趴！！！看了辣辣么辣么多滴回答， 感觉俺这个是最简单粗暴的，是最适合懒人的，只要动动手指就可以，核心一点“信息差=最牛逼的兼职”',
      action: {
        like: random(),
        dislike: random(),
        comment: random(),
      }
    }
    );
  }

  randomImage() {
    return `https://picsum.photos/20${Math.trunc(Math.random() * 10)}/110?random`;
  }

}
