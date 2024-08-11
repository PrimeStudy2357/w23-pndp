const mongoose = require('mongoose');

// 프로그램 엔트리 포인트
async function main() {
    // mongoDB는 일반적으로 27017 포트를 사용함
    // URL 뒤에 사용할 데이터베이스 이름을 명시
    await mongoose.connect('mongodb://127.0.0.1:27017/myDB');

    // 고양이 스키마
    const kittySchema = new mongoose.Schema({
        name: String,
        age: Number,
    });

    // 고양이 클래스 (Mongoose 스키마로부터 생성)
    const Kitten = mongoose.model('Kitten', kittySchema);

    // fluffy라는 이름을 가지는 고양이 객체 생성
    const fluffy = new Kitten({name:'fluffy'});

    // fluffy를 데이터베이스에 저장
    await fluffy.save();

    // MongoDB에 저장된 모든 고양이들을 조회
    const kittens = await Kitten.find();
    console.log(kittens);

    process.exit(0);
}

// 에러 처리
main().catch((err) => console.log(err));