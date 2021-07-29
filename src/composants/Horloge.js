import React from 'react';
import './../css/bootstrap.min.css';

class Horloge extends React.Component{
	state = {
		heure : 12,
		minute : 12,
		seconde : 12,
		mois : "Janvier",
		annee : 2020,
		jour : "Lundi",
		statut : "Matinee",
		jourMois : 19
	}
	funcStatut = (heure) =>{
		if(heure <= 12){
			return "Matinee"
		}
		else{
			return "Soiree";
		}
	}
	funcMois = (mois) =>{
		let moisAnnee = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
		return moisAnnee[mois];
	}
	funcJour = (jour) => {
		let jourSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "VEndredi", "Samedi", "Dimache"];
		return jourSemaine[jour];
	}

	setMinute = (e) =>{
		this.setState ({
			minute : this.state.minute + e.target.value
		})
	}

	componentDidMount(){
		this.timer = window.setInterval(() => {
			const time = new Date()
			this.setState({
				heure : time.getHours(),
				minute : time.getMinutes(),
				seconde : time.getSeconds(),
			})
		})
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}
	render() {
		return (
			<div>
				<div className="row mt-2 text-center">
					<div className="col-md-12">
						<button className="btn btn-success" onClick={this.funcDate}>Activer l'horloge</button>
					</div>
				</div>
				<div className="row mt-1">
					<div className="col-md-12">
						<div className="card bg-success">
							<div className="card-header">
								<p className="lead text-uppercase"> {this.state.jour} </p>
								<div className="text-uppercase"> {this.state.statut} </div>
							</div>
							<div className="card-body">
								<h1 className="text-uppercase">{this.state.heure} : {this.state.minute} : {this.state.seconde}</h1> 
							</div>
							<div className="card-footer">
								<p className="text-uppercase">{this.state.jourMois} {this.state.mois} {this.state.annee}</p>
							</div>	
						</div>	
					</div>
				</div>
				
				<div className="row mt-5">
					<div className="col-md-12">
						<h1 className="text-uppercase">Modification ici </h1>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<label>Nouvelle heure </label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<input type="number" className="form-control" placeholder="Entrez la nouvelle heure que vous souhaitez"/>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="row">
							<div className="col-md-12">
								<label>Nouvelle minute </label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<input type="number" className="form-control" placeholder="Entrez la nouvelle minute que vous souhaitez" onChange = {this.setMinute} value = {this.state.minute}/>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-12">
								<label>Nouveau jour</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<select className="form-control">
									<option>Lundi</option>
									<option>Mardi</option>
									<option>Mercredi</option>
									<option>Jeudi</option>
									<option>Vendredi</option>
									<option>Samedi</option>
									<option>Dimanche</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-12">
								<label>Nouveau mois</label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<select className="form-control">
									<option>Janvier</option>
									<option>Fevrier</option>
									<option>Mars</option>
									<option>Avril</option>
									<option>Mai</option>
									<option>Juin</option>
									<option>Juillet</option>
								</select>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row">
							<div className="col-md-12">
								<label>Nouvelle annee </label>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<input type="number" className="form-control" placeholder="Entrez la nouvelle minute que vous souhaitez"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Horloge;