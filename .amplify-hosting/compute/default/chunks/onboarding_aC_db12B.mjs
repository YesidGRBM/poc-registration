const onboarding = new Proxy({"src":"/_astro/onboarding.BkCWdo2_.webp","width":186,"height":159,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/oyquintero/projects/pocs/poc-registration-gateway/src/assets/images/onboarding.webp";
							}
							
							return target[name];
						}
					});

export { onboarding as o };
