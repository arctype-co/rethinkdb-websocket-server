'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rethinkdb = require('rethinkdb');

var _rethinkdb2 = _interopRequireDefault(_rethinkdb);

// The exported object here maps from reql term type name (keys in
// protodef.Term.TermType) to an example AST term instance.
//
// This is used in ReqlAstBuilder to convert from wire protocol JSON terms to
// rethinkdb driver AST terms.
//
// This is necessary because the JavaScript rethinkdb driver does not export
// its AST classes, but we need to reconstruct the AST in order to run
// toString() on the query.

exports['default'] = {
  DATUM: (0, _rethinkdb2['default'])(1),
  MAKE_ARRAY: (0, _rethinkdb2['default'])([]),
  MAKE_OBJ: (0, _rethinkdb2['default'])({}),
  VAR: (0, _rethinkdb2['default'])(function (x) {
    return x;
  }).args[1],
  JAVASCRIPT: _rethinkdb2['default'].js(''),
  UUID: _rethinkdb2['default'].uuid(),
  HTTP: _rethinkdb2['default'].http(''),
  ERROR: _rethinkdb2['default'].error(),
  IMPLICIT_VAR: _rethinkdb2['default'].row,
  DB: _rethinkdb2['default'].db(''),
  TABLE: _rethinkdb2['default'].table(''),
  GET: (0, _rethinkdb2['default'])({}).get(''),
  GET_ALL: (0, _rethinkdb2['default'])({}).getAll(''),
  EQ: _rethinkdb2['default'].eq(),
  NE: _rethinkdb2['default'].ne(),
  LT: _rethinkdb2['default'].lt(),
  LE: _rethinkdb2['default'].le(),
  GT: _rethinkdb2['default'].gt(),
  GE: _rethinkdb2['default'].ge(),
  NOT: _rethinkdb2['default'].not(),
  ADD: _rethinkdb2['default'].add(),
  SUB: _rethinkdb2['default'].sub(),
  MUL: _rethinkdb2['default'].mul(),
  DIV: _rethinkdb2['default'].div(),
  MOD: _rethinkdb2['default'].mod(),
  FLOOR: _rethinkdb2['default'].floor(),
  CEIL: _rethinkdb2['default'].ceil(),
  ROUND: _rethinkdb2['default'].round(),
  APPEND: (0, _rethinkdb2['default'])([]).append(),
  PREPEND: (0, _rethinkdb2['default'])([]).prepend(),
  DIFFERENCE: (0, _rethinkdb2['default'])([]).difference(),
  SET_INSERT: (0, _rethinkdb2['default'])([]).setInsert(),
  SET_INTERSECTION: (0, _rethinkdb2['default'])([]).setIntersection(),
  SET_UNION: (0, _rethinkdb2['default'])([]).setUnion(),
  SET_DIFFERENCE: (0, _rethinkdb2['default'])([]).setDifference(),
  SLICE: (0, _rethinkdb2['default'])([]).slice(0),
  SKIP: (0, _rethinkdb2['default'])([]).skip(),
  LIMIT: (0, _rethinkdb2['default'])([]).limit(),
  OFFSETS_OF: (0, _rethinkdb2['default'])([]).offsetsOf(),
  CONTAINS: (0, _rethinkdb2['default'])([]).contains(),
  GET_FIELD: (0, _rethinkdb2['default'])({}).getField(),
  KEYS: (0, _rethinkdb2['default'])({}).keys(),
  VALUES: (0, _rethinkdb2['default'])({}).values(),
  OBJECT: _rethinkdb2['default'].object(),
  HAS_FIELDS: (0, _rethinkdb2['default'])([]).hasFields(),
  WITH_FIELDS: (0, _rethinkdb2['default'])([]).withFields(),
  PLUCK: (0, _rethinkdb2['default'])([]).pluck(''),
  WITHOUT: (0, _rethinkdb2['default'])([]).without(),
  MERGE: (0, _rethinkdb2['default'])({}).merge(),
  BETWEEN: (0, _rethinkdb2['default'])([]).between(0, 1),
  REDUCE: (0, _rethinkdb2['default'])([]).reduce(),
  MAP: (0, _rethinkdb2['default'])([]).map({}),
  FILTER: (0, _rethinkdb2['default'])([]).filter({}),
  CONCAT_MAP: (0, _rethinkdb2['default'])([]).concatMap({}),
  ORDER_BY: (0, _rethinkdb2['default'])([]).orderBy(),
  DISTINCT: (0, _rethinkdb2['default'])([]).distinct(),
  COUNT: (0, _rethinkdb2['default'])([]).count(),
  IS_EMPTY: (0, _rethinkdb2['default'])([]).isEmpty(),
  UNION: (0, _rethinkdb2['default'])([]).union(),
  NTH: (0, _rethinkdb2['default'])([]).nth(),
  BRACKET: (0, _rethinkdb2['default'])([]).bracket(0),
  INNER_JOIN: (0, _rethinkdb2['default'])([]).innerJoin(),
  OUTER_JOIN: (0, _rethinkdb2['default'])([]).outerJoin(),
  EQ_JOIN: (0, _rethinkdb2['default'])([]).eqJoin('', ''),
  ZIP: (0, _rethinkdb2['default'])([]).zip(),
  RANGE: _rethinkdb2['default'].range(),
  INSERT_AT: (0, _rethinkdb2['default'])([]).insertAt(),
  DELETE_AT: (0, _rethinkdb2['default'])([]).deleteAt(),
  CHANGE_AT: (0, _rethinkdb2['default'])([]).changeAt(),
  SPLICE_AT: (0, _rethinkdb2['default'])([]).spliceAt(),
  COERCE_TO: (0, _rethinkdb2['default'])([]).coerceTo(),
  TYPE_OF: (0, _rethinkdb2['default'])([]).typeOf(),
  UPDATE: (0, _rethinkdb2['default'])([]).update({}),
  DELETE: (0, _rethinkdb2['default'])([])['delete'](),
  REPLACE: (0, _rethinkdb2['default'])([]).replace({}),
  INSERT: (0, _rethinkdb2['default'])([]).insert({}),
  DB_CREATE: _rethinkdb2['default'].dbCreate(),
  DB_DROP: _rethinkdb2['default'].dbDrop(),
  DB_LIST: _rethinkdb2['default'].dbList(),
  TABLE_CREATE: _rethinkdb2['default'].tableCreate(''),
  TABLE_DROP: _rethinkdb2['default'].tableDrop(''),
  TABLE_LIST: _rethinkdb2['default'].tableList(),
  CONFIG: (0, _rethinkdb2['default'])([]).config(),
  STATUS: (0, _rethinkdb2['default'])([]).status(),
  WAIT: _rethinkdb2['default'].db('').wait(),
  RECONFIGURE: _rethinkdb2['default'].db('').reconfigure(),
  REBALANCE: _rethinkdb2['default'].db('').rebalance(),
  SYNC: (0, _rethinkdb2['default'])([]).sync(),
  INDEX_CREATE: (0, _rethinkdb2['default'])([]).indexCreate(''),
  INDEX_DROP: (0, _rethinkdb2['default'])([]).indexDrop(''),
  INDEX_LIST: (0, _rethinkdb2['default'])([]).indexList(),
  INDEX_STATUS: (0, _rethinkdb2['default'])([]).indexStatus(),
  INDEX_WAIT: (0, _rethinkdb2['default'])([]).indexWait(),
  INDEX_RENAME: (0, _rethinkdb2['default'])([]).indexRename('', ''),
  FUNCALL: _rethinkdb2['default']['do'](function () {
    return 0;
  }),
  BRANCH: _rethinkdb2['default'].branch(0, 0, 0),
  OR: (0, _rethinkdb2['default'])(0).or(0),
  AND: (0, _rethinkdb2['default'])(0).and(0),
  FOR_EACH: (0, _rethinkdb2['default'])([]).forEach(function () {
    return 0;
  }),
  FUNC: (0, _rethinkdb2['default'])(function () {
    return 0;
  }),
  ASC: _rethinkdb2['default'].asc(),
  DESC: _rethinkdb2['default'].desc(),
  INFO: _rethinkdb2['default'].info(),
  MATCH: (0, _rethinkdb2['default'])('').match(''),
  UPCASE: (0, _rethinkdb2['default'])('').upcase(),
  DOWNCASE: (0, _rethinkdb2['default'])('').downcase(),
  SAMPLE: (0, _rethinkdb2['default'])([]).sample(0),
  DEFAULT: (0, _rethinkdb2['default'])({})['default'](0),
  JSON: _rethinkdb2['default'].json(''),
  TO_JSON_STRING: (0, _rethinkdb2['default'])('').toJsonString(),
  ISO8601: _rethinkdb2['default'].ISO8601(''),
  TO_ISO8601: _rethinkdb2['default'].now().toISO8601(),
  EPOCH_TIME: _rethinkdb2['default'].epochTime(0),
  TO_EPOCH_TIME: _rethinkdb2['default'].now().toEpochTime(),
  NOW: _rethinkdb2['default'].now(),
  IN_TIMEZONE: _rethinkdb2['default'].now().inTimezone(''),
  DURING: (0, _rethinkdb2['default'])('').during(_rethinkdb2['default'].now(), _rethinkdb2['default'].now()),
  DATE: _rethinkdb2['default'].now().date(),
  TIME_OF_DAY: _rethinkdb2['default'].now().timeOfDay(),
  TIMEZONE: _rethinkdb2['default'].now().timezone(),
  YEAR: _rethinkdb2['default'].now().year(),
  MONTH: _rethinkdb2['default'].now().month(),
  DAY: _rethinkdb2['default'].now().day(),
  DAY_OF_WEEK: _rethinkdb2['default'].now().dayOfWeek(),
  DAY_OF_YEAR: _rethinkdb2['default'].now().dayOfYear(),
  HOURS: _rethinkdb2['default'].now().hours(),
  MINUTES: _rethinkdb2['default'].now().minutes(),
  SECONDS: _rethinkdb2['default'].now().seconds(),
  TIME: _rethinkdb2['default'].time(),
  MONDAY: _rethinkdb2['default'].monday,
  TUESDAY: _rethinkdb2['default'].tuesday,
  WEDNESDAY: _rethinkdb2['default'].wednesday,
  THURSDAY: _rethinkdb2['default'].thursday,
  FRIDAY: _rethinkdb2['default'].friday,
  SATURDAY: _rethinkdb2['default'].saturday,
  SUNDAY: _rethinkdb2['default'].sunday,
  JANUARY: _rethinkdb2['default'].january,
  FEBRUARY: _rethinkdb2['default'].february,
  MARCH: _rethinkdb2['default'].march,
  APRIL: _rethinkdb2['default'].april,
  MAY: _rethinkdb2['default'].may,
  JUNE: _rethinkdb2['default'].june,
  JULY: _rethinkdb2['default'].july,
  AUGUST: _rethinkdb2['default'].august,
  SEPTEMBER: _rethinkdb2['default'].september,
  OCTOBER: _rethinkdb2['default'].october,
  NOVEMBER: _rethinkdb2['default'].november,
  DECEMBER: _rethinkdb2['default'].december,
  LITERAL: _rethinkdb2['default'].literal({}),
  GROUP: (0, _rethinkdb2['default'])([]).group(''),
  SUM: (0, _rethinkdb2['default'])([]).sum(),
  AVG: (0, _rethinkdb2['default'])([]).avg(),
  MIN: (0, _rethinkdb2['default'])([]).min(),
  MAX: (0, _rethinkdb2['default'])([]).max(),
  SPLIT: (0, _rethinkdb2['default'])([]).split(),
  UNGROUP: (0, _rethinkdb2['default'])([]).ungroup(),
  RANDOM: _rethinkdb2['default'].random(),
  CHANGES: (0, _rethinkdb2['default'])([]).changes(),
  ARGS: _rethinkdb2['default'].args([]),
  BINARY: _rethinkdb2['default'].binary(new Buffer(0)),
  GEOJSON: _rethinkdb2['default'].geojson({}),
  TO_GEOJSON: (0, _rethinkdb2['default'])({}).toGeojson(),
  POINT: _rethinkdb2['default'].point(0, 0),
  LINE: _rethinkdb2['default'].line([], []),
  POLYGON: _rethinkdb2['default'].polygon([], [], []),
  DISTANCE: _rethinkdb2['default'].distance([], []),
  INTERSECTS: _rethinkdb2['default'].intersects(),
  INCLUDES: (0, _rethinkdb2['default'])([]).includes([]),
  CIRCLE: _rethinkdb2['default'].circle([], 0),
  GET_INTERSECTING: (0, _rethinkdb2['default'])([]).getIntersecting([]),
  FILL: _rethinkdb2['default'].line([], []).fill(),
  GET_NEAREST: (0, _rethinkdb2['default'])([]).getNearest([]),
  POLYGON_SUB: _rethinkdb2['default'].polygon([], [], []).polygonSub([]),
  MINVAL: _rethinkdb2['default'].minval,
  MAXVAL: _rethinkdb2['default'].maxval
};
module.exports = exports['default'];