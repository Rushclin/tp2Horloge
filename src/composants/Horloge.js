import React from 'react';
import './../css/bootstrap.min.css';

class Horloge extends React.Component{
	state = {
		heure : '01',
		minute : '00',
		seconde : '00',
		jourSemaine : "Lundi",
		mois : "Janvier",
		annee : 2020,
		statut : "Apres midi",
		jour : '09',
	}

	funcJour = (jour) =>{
		let jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Samedi"];
		return jourSemaine[jour];
	}

	funcMois = (mois) =>{
		let moisAnnee = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
		return moisAnnee[mois];
	}
	funcStatut = (heure) =>{
		return (heure <= 12) ? "Matinee" : "Apres midi";
	}

	funcModificationHeure = (myDate) =>{
		myDate = myDate.target.value;
		let date = myDate.split(":");
		console.log(date[0])
		this.timer = window.setInterval(() =>{
			const time = new Date(date[0]+" "+date[1]);
			this.setState({
				minute : time.getMinutes(),
				heure : time.getHours(),
				seconde : time.getSeconds()
			})
		}, 1000)
	}
	
	componentDidMount(){
		this.timer = window.setInterval(() => {
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
							<div className="row">
								<div className="col-md-6">
									<div className="row">
										<div className="col-md-12">
											<label>Date</label>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<input type="date" className="form-control" />	
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
											<input type="time" className="form-control" onChange={this.funcModificationHeure}/>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
}
export default Horloge;