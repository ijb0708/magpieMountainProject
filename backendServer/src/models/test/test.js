import Sequelize from sequelize;

class test extends Sequelize.Model {
    static init(sequelize) {

        // 부모로 부터 init 사용
        return super.init({
            // 테이블의 속성

        },
        
        {
            // 테이블 설정
            sequelize,
            charset:'utf8',
            modelName:'Test',
            tableName:'Test'
        })
    }

};

export default test;