exports.question = function(req, res){
	res.render('quizes/question', {pregunta:'Capital de Italia'});
};
exports.answer = function(req, res){
	if (req.query.respuesta.match(/roma/ig) != null ){
		res.render('quizes/answer',{respuesta:'Correcto'});
	} else{
		res.render('quizes/answer', {respuesta:'Incorrecto'});
	}
};