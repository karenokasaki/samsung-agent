import { get, writable } from 'svelte/store';

const data = {
	tree: {
		name: 'Phone battery drains too quickly',
		description: '',
		published: false,
		id: 'samsung',
		rootNode: '014ed8c2-80d8-4afb-8552-ba926830d523',
		productThumb: '/images/icon.png'
	},
	nodes: {
		'014ed8c2-80d8-4afb-8552-ba926830d523': {
			name: 'Root node',
			type: 'normal',
			question: 'How would you like to optimize your apps?',
			text: '<img src="/images/root_image.png" alt="UPLOADED IMAGE"><p style="text-align: center"> </p><p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Phone battery draining too quickly</span></strong><br></p><p><span style="color: rgb(89, 89, 89)">If you are having issues with battery, there are few ways to diagnose and resolve the issue.</span></p>',
			choices: [
				{
					to: '0d63d2cb-b0d4-4d07-a2d3-31830a568d89',
					text_button: 'Battery drains quickly on 5G network'
				},
				{
					to: 'c44c6ba8-a965-453a-bcd2-03a6cbd3982f',
					text_button: 'Phone is draining too quickly'
				},
				{
					to: 'd3c52901-afeb-4ea2-b072-bbe11db07737',
					text_button: 'Cooling down pop up appears'
				},
				{
					to: '60b91b36-0cb4-402b-a4d6-0314b41833a3',
					text_button: 'Optimize apps to improve battery usage'
				}
			],
			id: '014ed8c2-80d8-4afb-8552-ba926830d523',
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			createdAt: '2024-04-30T21:32:06.527Z',
			updatedAt: '2024-04-30T22:33:58.125Z',
			localId: 1
		},
		'0d63d2cb-b0d4-4d07-a2d3-31830a568d89': {
			type: 'normal',
			name: 'Battery drains quickly on 5G network',
			text: '<img src="/images/batterydrains.png" alt="UPLOADED IMAGE"><p></p><p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Battery drains quickly on 5G network</span></strong></p><p><span style="color: rgb(13, 13, 13)">Currently, 5G networks support only data connections, not calls or messages. Phones must stay connected to 3G or LTE alongside 5G for consistent delivery of calls, texts, and data. This simultaneous connection may drain the battery faster and cause the phone to heat up more than usual. To counter this, consider using features to optimize performance.&nbsp;</span></p><p><br><span style="color: rgb(13, 13, 13)">Explore our </span><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.samsung.com/us/support/answer/ANS00078987/"><span style="color: rgb(33, 137, 255)">battery optimization guide for tips</span></a><span style="color: rgb(13, 13, 13)">.</span></p><p></p><p></p>',
			question: 'Did it resolve the issue?',
			resolution: '',
			choices: [
				{
					to: '4ccf6617-f718-4538-8981-a10600358d62',
					text_button: 'Yes'
				},
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '0d63d2cb-b0d4-4d07-a2d3-31830a568d89',
			createdAt: '2024-04-30T21:36:06.038Z',
			updatedAt: '2024-04-30T22:34:39.775Z',
			localId: 2,
			data: {}
		},
		'c44c6ba8-a965-453a-bcd2-03a6cbd3982f': {
			type: 'normal',
			name: 'Phone is draining too quickly',
			text: '<img src="/images/phonedraining.png" alt="UPLOADED IMAGE"><p> </p><p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Phone is draining too quickly</span></strong></p><p><span style="color: rgb(13, 13, 13)">If your phone or tablet is not holding a charge or if it turns on for just a few minutes before powering off, your battery is likely the cause of the problem. You can check the device\'s internal or external battery, as well as the Liquid Damage indicator.</span></p><p><br></p>',
			question: 'Is the battery or charging port damaged?',
			resolution: '',
			choices: [
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'Yes'
				},
				{
					to: '75841cb6-12c6-4fa1-a2f3-8269c5f192c5',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: 'c44c6ba8-a965-453a-bcd2-03a6cbd3982f',
			createdAt: '2024-04-30T21:38:36.917Z',
			updatedAt: '2024-04-30T22:34:57.516Z',
			localId: 3,
			data: {}
		},
		'd3c52901-afeb-4ea2-b072-bbe11db07737': {
			type: 'normal',
			name: 'Cooling down pop up appears',
			text: '<p></p><img src="/images/colling.png" alt="UPLOADED IMAGE"><p><strong><p><span style="font-size: 20px; color: rgb(0, 0, 0)">Cooling down pop up appears</span></p></strong><p><span style="color: rgb(13, 13, 13)">Certain apps or environmental factors can cause your phone or tablet to overheat. When this happens, your device will display a message that says "Device cooling down" and will automatically change settings to prevent damage from overheating.</span></p><p></p><p>Learn how to <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.samsung.com/us/support/troubleshooting/TSG01001413/"><span style="color: rgb(33, 137, 255)">cool down battery</span></a><span style="color: rgb(13, 13, 13)">.</span></p>',
			question: 'Did it resolve the issue?',
			resolution: '',
			choices: [
				{
					to: '4ccf6617-f718-4538-8981-a10600358d62',
					text_button: 'Yes'
				},
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: 'd3c52901-afeb-4ea2-b072-bbe11db07737',
			createdAt: '2024-04-30T22:10:47.588Z',
			updatedAt: '2024-04-30T22:35:50.827Z',
			localId: 4,
			data: {}
		},
		'60b91b36-0cb4-402b-a4d6-0314b41833a3': {
			type: 'normal',
			name: 'I want to optimize apps to improve battery usage',
			text: '<img src="/images/apps_draining_battery.png" alt="UPLOADED IMAGE"><p><p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">I want to optimize apps to improve battery usage</span></strong></p><p><span style="color: rgb(13, 13, 13)">To extend the battery life of your phone or tablet and address quick draining issues, optimize your app usage. You can achieve this by limiting app functions or leveraging your device\'s power management settings. Another effective method is putting apps to sleep to conserve power.</span></p><p><br></p>',
			question: 'How would you like to optimize your apps?',
			resolution: '',
			choices: [
				{
					to: 'd409ac97-7a61-4631-aac7-38632677b214',
					text_button: 'Optimize all apps'
				},
				{
					to: 'de0530a0-fe40-45ba-a116-144dc35d19af',
					text_button: 'Adjust app power management'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '60b91b36-0cb4-402b-a4d6-0314b41833a3',
			createdAt: '2024-04-30T22:10:55.809Z',
			updatedAt: '2024-04-30T22:36:21.625Z',
			localId: 5,
			data: {}
		},
		'5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7': {
			type: 'normal',
			name: 'Yes',
			text: '<img src="/images/contact_support.jpg" alt="UPLOADED IMAGE"><p><p><strong><span style="font-size: 20px; color: rgb(13, 13, 13)">Contact customer support</span></strong></p></p><p><span style="color: rgb(13, 13, 13)">If you still have issues with your battery, please visit a </span><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.samsung.com/us/support/service/locations/"><span style="color: rgb(33, 137, 255)">walk-in service center</span></a><span style="color: rgb(13, 13, 13)"> or you can </span><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.samsung.com/us/support/service/"><span style="color: rgb(33, 137, 255)">schedule a repair service online</span></a><span style="color: rgb(13, 13, 13)">. </span></p>',
			question: '',
			resolution: '',
			choices: [],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
			createdAt: '2024-04-30T22:12:56.726Z',
			updatedAt: '2024-04-30T22:15:32.301Z',
			localId: 6,
			data: {}
		},
		'75841cb6-12c6-4fa1-a2f3-8269c5f192c5': {
			type: 'normal',
			name: 'No',
			text: '<img src="/images/liquiddamage.png" alt="UPLOADED IMAGE"><p><span style="color: rgb(0, 0, 0)">   <p><span style="font-size: 20px; color: rgb(33, 33, 33)"><strong>Verify the device has no liquid damage.</strong></span></p><p></p><p><span style="color: rgb(13, 13, 13)">To check for liquid damage on your phone or tablet, locate the Liquid Damage Indicator (LDI). For newer devices, it\'s typically inside the SIM card tray slot, while for older ones, it\'s often on the removable battery.</span></p><p></p><p><span style="color: rgb(13, 13, 13)">To access the LDI in the SIM card tray slot, insert the ejector tool into the hole on the tray, pushing until it pops out. Look inside the slot to find the LDI.</span></p><p></p><p><span style="color: rgb(13, 13, 13)">For devices with removable batteries, simply take out the battery and inspect it.</span></p><p></p><p><span style="color: rgb(13, 13, 13)">A normal LDI shows solid white or white with visible pink or purple X\'s. If the device has encountered moisture, the LDI will be solid pink, purple, or red.</span></p><p></p><p><span style="color: rgb(13, 13, 13)">',
			question: 'Is there water damage?',
			resolution: '',
			choices: [
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'Yes'
				},
				{
					to: '3f3262d1-16e4-447c-81a6-b26f869d2db8',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '75841cb6-12c6-4fa1-a2f3-8269c5f192c5',
			createdAt: '2024-04-30T22:13:03.188Z',
			updatedAt: '2024-04-30T22:17:16.719Z',
			localId: 7,
			data: {}
		},
		'3f3262d1-16e4-447c-81a6-b26f869d2db8': {
			type: 'normal',
			name: 'No',
			text: '<img src="/images/fully_charged.jpg" alt="UPLOADED IMAGE"><p style="text-align: center"> <p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Optimize the device\'s battery life</span></strong></p><p><span style="color: rgb(13, 13, 13)">Once you\'ve determined that the battery and device are in good condition, it\'s time to get the most out of your battery by following our helpful guides.</span></p><p><br><span style="color: rgb(13, 13, 13)">You can set power saving modes to limit battery usage and make your device\'s battery last longer. There are different battery saving options and tips to </span><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.samsung.com/us/support/answer/ANS00078987/"><span style="color: rgb(33, 137, 255)">maximize your battery life</span></a><span style="color: rgb(13, 13, 13)">. </span></p>',
			question: 'Did it resolve the issue?',
			resolution: '',
			choices: [
				{
					to: '4ccf6617-f718-4538-8981-a10600358d62',
					text_button: 'Yes'
				},
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '3f3262d1-16e4-447c-81a6-b26f869d2db8',
			createdAt: '2024-04-30T22:17:16.491Z',
			updatedAt: '2024-04-30T22:21:37.101Z',
			localId: 8,
			data: {}
		},
		'4ccf6617-f718-4538-8981-a10600358d62': {
			type: 'normal',
			name: 'Yes',
			text: '<img src="/images/case_resolved.jpg" alt="UPLOADED IMAGE"><p><p style="font-size: 20px; color: rgb(0, 0, 0)"><strong>Thank you</strong></p> <p>Your case is resolved. </p></p>',
			question: '',
			resolution: '',
			choices: [],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: '4ccf6617-f718-4538-8981-a10600358d62',
			createdAt: '2024-04-30T22:19:28.102Z',
			updatedAt: '2024-04-30T22:20:41.250Z',
			localId: 9,
			data: {}
		},
		'd409ac97-7a61-4631-aac7-38632677b214': {
			type: 'normal',
			name: 'Optimize all apps',
			text: '<img src="/images/optimize_apps.jpg" alt="UPLOADED IMAGE"><p style="text-align: center"> <p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Optimize all apps</span></strong></p><p><strong><span style="color: rgb(102, 102, 102)">Note:</span></strong><span style="color: rgb(102, 102, 102)"> Before optimizing, make sure all your apps are updated to the latest version.</span><span style="color: rgb(0, 0, 0)"><br><br><p><ol><li><p><strong><span style="color: rgb(13, 13, 13)">Navigate to Device Care.</span></strong></p></li></ol></p><ul><li><p><span style="color: rgb(13, 13, 13)"> Navigate to <strong>Settings</strong>, and then tap <strong>Device care</strong>. </span></p></li> <p> <br><hr></p></span></p>  </ul><br><ol start="2"><li><p><strong><span style="font-size: 16px; color: rgb(13, 13, 13)">Optimize apps</span></strong>.</p></li></ol><p></p><ul><li><p>Tap <strong><span style="color: rgb(13, 13, 13)">Optimize apps</span></strong>.<span style="color: rgb(13, 13, 13)"> Device care will automatically optimize your apps. If Device care determines your device is in great conditions, you will not be able to optimize it.<p> <br><hr></p></span></p></span></p></li></ul>',
			question: 'Did it resolve the issue?',
			resolution: '',
			choices: [
				{
					to: '4ccf6617-f718-4538-8981-a10600358d62',
					text_button: 'Yes'
				},
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: 'd409ac97-7a61-4631-aac7-38632677b214',
			createdAt: '2024-04-30T22:23:13.761Z',
			updatedAt: '2024-04-30T22:23:30.222Z',
			localId: 10,
			data: {}
		},
		'de0530a0-fe40-45ba-a116-144dc35d19af': {
			type: 'normal',
			name: 'Adjust app power management',
			text: '<img src="/images/app_power_adjustment.jpg" alt="UPLOADED IMAGE"><p style="text-align: center"> <p><strong><span style="font-size: 20px; color: rgb(0, 0, 0)">Adjust app power management</span></strong></p><p><ol><li><p><strong><span style="color: rgb(13, 13, 13)">Navigate to App power management.</span></strong></p></li></ol><ul><li><p><span style="color: rgb(13, 13, 13)"> Navigate to <strong>Settings</strong>, and then tap <strong>Battery</strong>. Next, tap <strong>Background usage limits</strong>.<p> <br><hr></p></span></p></li></ul></p></span></p><ol start="2"><li><p><strong><span style="font-size: 16px; color: rgb(13, 13, 13)">Adjust your desired settings.</span></strong></p></li></ol><p></p><ul><li><p><strong><span style="color: rgb(13, 13, 13)">Put unused apps to sleep</span></strong><span style="color: rgb(13, 13, 13)"> will automatically put apps to sleep if they have not been used for a while.</span></p></li></ul><p></p><ul><li><p><strong><span style="color: rgb(13, 13, 13)">Sleeping apps</span></strong><span style="color: rgb(13, 13, 13)"> allows you to choose the apps that won\'t run in the background. You can view your current sleeping apps as well.</span></p></li></ul><p></p><ul><li><p><span style="color: rgb(13, 13, 13)"><strong>Deep sleeping apps</strong> will never run in the background and will only work when you open them.</span></p></li></ul><p></p><ul><li><p><span style="color: rgb(13, 13, 13)"><strong>Never sleeping apps</strong> allows you to choose which apps will not automatically be set to sleeping mode. <p> <br><hr></p></span></p></span></p></li></ul>',
			question: 'Did it resolve the issue?',
			resolution: '',
			choices: [
				{
					to: '4ccf6617-f718-4538-8981-a10600358d62',
					text_button: 'Yes'
				},
				{
					to: '5ce3b2bd-146b-43c4-9bc7-cf4402fb72d7',
					text_button: 'No'
				}
			],
			tree: '737ae380-bfac-4742-9a81-b7e677b4d94d',
			id: 'de0530a0-fe40-45ba-a116-144dc35d19af',
			createdAt: '2024-04-30T22:23:17.133Z',
			updatedAt: '2024-04-30T22:23:49.621Z',
			localId: 11,
			data: {}
		}
	}
};

export const tree = writable({});
export const nodes = writable({});
export const activeNode = writable(null);

export async function revalidateTree(treeID) {
	//const res = await fetch(`/api/bucket/${treeID}.json`);
	//const { data } = await res.json();
	if ('tree' in data && 'nodes' in data) {
		tree.set(data.tree);
		nodes.set(data.nodes);
		activeNode.set(data.nodes[data.tree.rootNode]);
	}
}

export async function setActiveNode(nodeID) {
	const nodesData = get(nodes);
	if (!(nodeID in nodesData)) throw new Error('unable to find node id in nodes');
	activeNode.set(nodesData[nodeID]);
}
