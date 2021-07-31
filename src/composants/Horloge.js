import React from 'react';
import './../css/bootstrap.min.css';

class Horloge extends React.Component{
	funcMois = (mois) =>{
		let moisAnnee = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
		return moisAnnee[mois];
	}

	funcStatut = (heure) =>{
		return (heure <= 12) ? "Matinee" : "Apres midi";
	}

	funcJour = (jour) =>{
		let a = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Samedi"];
		return a[jour];
	}

	state = {
		heure : new Date().getHours(),
		minute : new Date().getMinutes(),
		seconde : new Date().getSeconds(),
		jourSemaine : this.funcJour(new Date().getDay()),
		mois : this.funcMois(new Date().getMonth()),
		annee : new Date().getFullYear(),
		statut : this.funcStatut(new Date().getHours()),
		jour : new Date().getDate(),
	}

	funcModification = () =>{
		console.log("Je suis appele")
		this.setState({
			heure : '12',
		})
	}

	funcMontage = () =>{
		this.timer = setInterval(() => {
			const time = new Date()
			this.setState({
				heure : time.getHours(),
				minute : time.getMinutes(),
				seconde : time.getSeconds(),
				jourSemaine : this.funcJour(time.getDay()),
				statut : this.funcStatut(time.getHours()),
				mois : this.funcMois(time.getMonth()),
				jour : time.getDate(),
				annee : time.getFullYear()
			})
		},1000)
	}
	
	componentDidMount(){
		this.funcMontage();
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-4 mt-5 mr-auto ml-auto">
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">{this.state.jourSemaine}</h3>
									<p>{this.state.statut}</p>
								</div>
								<div className="card-body">
									<h1 className="h1 ">{this.state.heure} : {this.state.minute} : {this.state.seconde}</h1>
								</div>
								<div className="card-footer">
									<p className="card-title">{this.state.jour} {this.state.mois} {this.state.annee}</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4 mt-3 mr-auto ml-auto">
							<div className="row py-2">
								<div className="col-md-12">
									<h1 className="lead">Modification ici</h1>
								</div>
							</div>
							<form>
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div className="col-md-12">
												<label>Date</label>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<input type="date" className="form-control" id="date"/>	
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="row">
											<div className="col-md-12">
												<label>Heure</label>
											</div>
										</div>
										<div className="row">
											<div className="col-md-12">
												<input type="time" className="form-control" id="heure"/>	
											</div>
										</div>
									</div>
								</div>
								<div className="row mt-2">
									<div className="col-md-12">
										<button  className="btn btn-success" onClick={this.funcModification}>Appliquer</button>
									</div>
								</div>
							</form>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}
export default Horloge;