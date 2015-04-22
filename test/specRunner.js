var chai = require('chai');
var request = require('supertest');
var app = require('../server.js');

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var testWaypoints = {distance: 50, waypoints: [ "38.44543,-122.70404",  "38.445330000000006,-122.70454000000001",  "38.445330000000006,-122.70497",  "38.445310000000006,-122.70526000000001",  "38.44534,-122.70687000000001",  "38.44538,-122.70812000000001",  "38.44552,-122.71350000000001",  "38.44565,-122.71795000000002",  "38.445780000000006,-122.72254000000001",  "38.44581,-122.72310000000002",  "38.44585,-122.7232",  "38.44586,-122.72325000000001",  "38.445870000000006,-122.72345000000001",  "38.44603,-122.72358000000001",  "38.44661,-122.72405",  "38.44735,-122.72468",  "38.44791,-122.72508",  "38.44816,-122.72525000000002",  "38.44827,-122.72542000000001",  "38.44847,-122.72551000000001",  "38.448890000000006,-122.72567000000001",  "38.44921,-122.72578000000001",  "38.449740000000006,-122.72592000000002",  "38.450010000000006,-122.72597",  "38.4506,-122.72604000000001",  "38.45140000000001,-122.72605000000001",  "38.454550000000005,-122.72596000000001",  "38.45557,-122.72592000000002",  "38.45656,-122.72593",  "38.45759,-122.72600000000001",  "38.46036,-122.72621000000001",  "38.46273,-122.72636000000001",  "38.46311,-122.72639000000001",  "38.463640000000005,-122.72649000000001",  "38.46407000000001,-122.7266",  "38.46453,-122.72675000000001",  "38.465340000000005,-122.72708000000002",  "38.46904,-122.72865000000002",  "38.47661,-122.73184",  "38.478060000000006,-122.73246",  "38.47854,-122.73269",  "38.47909000000001,-122.73301000000001",  "38.47966,-122.73342000000001",  "38.480230000000006,-122.73391000000001",  "38.4806,-122.73428000000001",  "38.480920000000005,-122.73464000000001",  "38.481300000000005,-122.73512000000001",  "38.48422,-122.73924000000001",  "38.488800000000005,-122.74570000000001",  "38.495850000000004,-122.75562000000001",  "38.49822,-122.75896000000002",  "38.498940000000005,-122.75998000000001",  "38.499550000000006,-122.76078000000001",  "38.501470000000005,-122.76318",  "38.50247,-122.76443",  "38.50365,-122.76591",  "38.50683,-122.76988000000001",  "38.51323,-122.77790000000002",  "38.51431,-122.77921",  "38.514520000000005,-122.77945000000001",  "38.514920000000004,-122.77988",  "38.515750000000004,-122.78072000000002",  "38.52806,-122.79199000000001",  "38.52933,-122.79319000000001",  "38.531580000000005,-122.79525000000001",  "38.537200000000006,-122.80040000000001",  "38.54104,-122.80394000000001",  "38.541740000000004,-122.80455",  "38.54234,-122.80501000000001",  "38.54298,-122.80546000000001",  "38.544230000000006,-122.80623000000001",  "38.545010000000005,-122.80669",  "38.54565,-122.80707000000001",  "38.5463,-122.80749000000002",  "38.54688,-122.80788000000001",  "38.5473,-122.80822",  "38.54843,-122.80924000000002",  "38.549290000000006,-122.81013000000002",  "38.550200000000004,-122.81119000000001",  "38.553000000000004,-122.8144",  "38.553630000000005,-122.81507",  "38.55436,-122.81581000000001",  "38.55707,-122.81837000000002",  "38.561220000000006,-122.82231000000002",  "38.56875,-122.82946000000001",  "38.569750000000006,-122.83040000000001",  "38.57076,-122.83131000000002",  "38.571850000000005,-122.83218000000001",  "38.57395,-122.83373000000002",  "38.57724,-122.83617000000001",  "38.582910000000005,-122.84037000000001",  "38.587810000000005,-122.84400000000001",  "38.59004,-122.84566000000001",  "38.59055,-122.84607000000001",  "38.59098,-122.84647000000001",  "38.591480000000004,-122.84698000000002",  "38.59197,-122.84756000000002",  "38.59244,-122.84821000000001",  "38.59272,-122.84863000000001",  "38.593140000000005,-122.84936"]};

describe('Server Routes', function(){

  it('should successfully get the home page', function(done) {
    request(app)
      .get('/')
      .end(function(error, response){
        if(error){ throw error; }
        response.status.should.equal(200);
        done();
      });
  });

  it('should successfully post to /search', function(done) {
    request(app)
      .post('/search')
      .send(testWaypoints)
      .end(function(error, response){
        if(error){ throw error; }
        response.status.should.equal(200);
        done();
      });
  });
});
