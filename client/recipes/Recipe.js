import { AutoForm } from 'meteor/aldeed:autoform';
import { FlashMessages } from 'meteor/mrt:flash-messages';

if (Meteor.isClient) {

	var hooksObject = {
		onSuccess: function (formType, result) {
			if (formType == 'update') {
				recipeName = this.currentDoc.name;
				FlashMessages.sendSuccess("Changes are saved successfully!");
				Bert.alert({
					title: 'Recipe Updated: ' + this.currentDoc.name,
					message: 'Changes are saved successfully!',
					type: 'success',
					style: 'growl-top-right',
					icon: 'fa fa-check'
				});
			}
		}
	};
	AutoForm.addHooks(null, hooksObject);

};

Template.Recipe.onCreated(function () {
	this.editMode = new ReactiveVar(false);
});

Template.Recipe.helpers({
	updateRecipeId: function () {
		return this._id;
	},
	editMode: function () {
		return Template.instance().editMode.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu': function () {
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
		if (!this.inMenu) {
			Bert.alert({
				title: 'Recipe Added to Menu ',
				message: this.name + ' is added to Menus',
				type: 'info',
				style: 'growl-top-right',
				icon: 'fa fa-info'
			});
		}
		else {
			Bert.alert({
				title: 'Recipe Removed from the Menu ',
				message: this.name + ' is removed from the Menu',
				type: 'info',
				style: 'growl-top-right',
				icon: 'fa fa-info'
			});
		}
	},
	'click .fa-trash': function () {

		swal({
			title: 'Delete: ' + this.name + '?',
			text: 'You will not be able to recover this record once deleted!',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!',
			cancelButtonText: 'No, keep it'
		}).then((result) => {
			if (result.value) {
				if (this.inMenu) {
					swal(
						'Cancelled',
						'Cannot delete recipes that are listed in menus',
						'error'
					)
				}
				else {
					Meteor.call('deleteRecipe', this._id, (error, result) =>  {
						if(result)
						{
						swal(
							'Deleted!',
							this.name + ' has been deleted!',
							'success'
						);
						}else{
							console.log(error);
						}
					})
				}
				// result.dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
			} else if (result.dismiss === 'cancel') {
				swal(
					'Cancelled',
					'Your record is safe :)',
					'error'
				)
			}
		});
	},
	'click .fa-pencil': function (event, template) {
		// Session.set('editMode', !Session.get('editMode'));
		template.editMode.set(!template.editMode.get());

		//show notification
		if (template.editMode.get() == true) {
			Bert.alert({
				title: 'Recipe for Edit: ' + this.name,
				message: 'You can now edit ' + this.name,
				type: 'info',
				style: 'growl-top-right',
				icon: 'fa fa-pencil'
			});
		}
	}
});