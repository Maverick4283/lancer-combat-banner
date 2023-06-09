
export function buildSettings(){
	game.settings.register("LancerCombatBanner", "announceTurn", {
		name: "ADA_COMBATBANNER.Settings.announceTurn.Name",
		hint: "ADA_COMBATBANNER.Settings.announceTurn.Hint",
		scope: "world",
		config: true,
		type: Boolean,
		default: true
	});
	game.settings.register("LancerCombatBanner", "announceRound", {
		name: "ADA_COMBATBANNER.Settings.announceRound.Name",
		hint: "ADA_COMBATBANNER.Settings.announceRound.Hint",
		scope: "world",
		config: true,
		type: Boolean,
		default: true
	});
	game.settings.register("LancerCombatBanner", "forceDefaultColor", {
		name: "ADA_COMBATBANNER.Settings.forceDefaultColor.Name",
		hint: "ADA_COMBATBANNER.Settings.forceDefaultColor.Hint",
		scope: "world",
		config: true,
		type: Boolean,
		default: false
	});
	 
	game.settings.register("LancerCombatBanner", "defaultColor", {
		name: "ADA_COMBATBANNER.Settings.defaultColor.Name",
		hint: "ADA_COMBATBANNER.Settings.defaultColor.Hint",
		scope: "world",
		config: true,
		default: "#008141",
		type: String
	});

}