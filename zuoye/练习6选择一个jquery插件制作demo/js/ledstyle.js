//��ʾled���͵����ֵ�js���빤����
class LedStyle {
	/*
	 width:led�����Ŀ�ȣ�Ĭ��Ϊ50px
	 height��led�����ĸ߶ȣ�Ĭ��Ϊ100px��ʵ�ʸ߶�Ҫ����100px,ʵ�ʸ߶�Ϊheight+lineWidth��
	 lineWidth:led�ƵĿ�ȣ�Ĭ��Ϊ5px
	 selector:��Ҫչʾled�Ƶ�ѡ��������
	 color:led�Ƶ���ɫ��Ĭ��Ϊ��ɫ
	 italics:��б�Ƕȣ�Ĭ��Ϊ0������б��
	 
	 */
	constructor(width, height, lineWidth,selector, color, italics) {
		this.width = width;
		this.height = height;
		this.lineWidth = lineWidth;
		this.color = color;
		this.italics = italics;
		//���������ʱ������һ�������class����
		this.selector = selector;
		//����ڳ�ʼ����ʱ��û��ָ����������ʹ������Ĭ��ֵ���г�ʼ��
		this.setLedStyle(width?width:50, height?height:100, lineWidth?lineWidth:5, color?color:'red', italics?italics:'0')
	}

	setLedStyle(width = 50, height = 100, lineWidth = 5, color = 'red', italics = '0') {
		let style = `
			<style>
				${this.selector} .led-segment{
					width: ${width + 'px'};
					height: ${height + 'px'};
					position: relative;
					transform: skewX(${italics + 'deg'});
					margin:${lineWidth/2 + 'px'};
					border:none;
				}
				${this.selector} .led-segment1{
					width: calc(100% - ${lineWidth*2 + 'px'});
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
				}
				${this.selector} .led-segment2{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					border:none;
					position: absolute;
					top: ${lineWidth + 'px'};
					right:0;
				}
				${this.selector} .led-segment3{
					width: calc(100% - ${lineWidth*2 + 'px'});
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
					position: absolute;
					top: 50%;
					left: ${lineWidth + 'px'};
				}
				${this.selector} .led-segment4{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					margin: 0 0 0 calc(100% - ${lineWidth + 'px'});
					border:none;
					position: absolute;
					bottom: 0px;
				}
				${this.selector} .led-segment5{
					width: calc(100% - ${lineWidth*2 + 'px'});;
					height: ${lineWidth + 'px'};
					border-radius: ${lineWidth + 'px'};
					margin: 0 auto;
					border:none;
					position: absolute;
					top: 100%;
					left: ${lineWidth + 'px'};
				}
				${this.selector} .led-segment6{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					position: absolute;
					top: ${lineWidth + 'px'};
					border:none;
				}
				${this.selector} .led-segment7{
					width: ${lineWidth + 'px'};
					height: calc(50% - ${lineWidth + 'px'});
					border-radius: ${lineWidth + 'px'};
					position: absolute;
					bottom: 0px;
					border:none;
				}
				
				${this.selector} .led-color{
					background: ${color};
					opacity:0.05;
				}
				
				${this.selector} .float-v{
					position: absolute;
					bottom: 0;
					width: ${lineWidth + 'px'};
					left: 50%;
					height: ${lineWidth + 'px'};
					border: none;
					background: ${color};
				}
				${this.selector} .led-segment-float{
					width: ${width/2 + 'px'};
					height: ${height + 'px'};
					position: relative;
					transform: skewX(${italics + 'deg'});
					margin:1px;
					float:left;
					border:none;
				}
			</style>
			`;

		$("body").append(style);
	}
	//�Ե���led�Ƶ���ʽ������ʽ����
	setValue(v, random) {
		let styleLed = '';
		switch(v.toString()) {
			case '0':
				styleLed = ".led-segment1,.led-segment2,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '1':
				styleLed = ".led-segment2,.led-segment4";
				break;
			case '2':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment5,.led-segment7";
				break;
			case '3':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5";
				break;
			case '4':
				styleLed = ".led-segment2,.led-segment3,.led-segment4,.led-segment6";
				break;
			case '5':
				styleLed = ".led-segment1,.led-segment3,.led-segment4,.led-segment5,.led-segment6";
				break;
			case '6':
				styleLed = ".led-segment1,.led-segment3,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '7':
				styleLed = ".led-segment1,.led-segment2,.led-segment4";
				break;
			case '8':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5,.led-segment6,.led-segment7";
				break;
			case '9':
				styleLed = ".led-segment1,.led-segment2,.led-segment3,.led-segment4,.led-segment5,.led-segment6";
				break;
			case '-':
				styleLed = ".led-segment3";
				break;
			default:
				styleLed = "";
				break;
		}
		//�Ե�ǰ�ĵ���led��ʽ���м�¼��ÿ��led�Ƶ���ʽ��Ӧ����Ψһ�ģ���������ʹ�������ڼ����������classѡ����
		var styleLedArr = styleLed.split(',').map((item, index) => {
			return '.' + random + ' ' + item;
		})
		return styleLedArr.join(',') + '{opacity:1 !important}   ';
	}
	//������ֵ�ķ���
	setValues(values) {
		let selector = this.selector;
		//���ԭֵ
		$(selector).html("");
		/*�˴�����ͨ���Լ�ѡ����������һ��ֻ�����������֣�С���㣬�������������жϣ����Բ��򿪣����򿪵�ʱ����������֡�С���㡢��������ʱ����ʾ��
		if(!/^[\d.-]+$/.test(values.toString())){
			alert("�봫���������͵�ֵ!");
			return;		
		}*/
		
		let vArr = values.toString().split('');
		var style = '<style>';
		let ledHtml = ``;
		if(vArr) {
			vArr.forEach((item, index) => {
				//ͨ��ʱ��������������class��������ֹҳ������ظ�������
				let random = 'child' + new Date().getTime().toString() + (Math.random() * 10000000).toString().substring(0, 6).replace(/\./g, '');
				if(item == '.'){
					ledHtml += `
						<div class=${random} style="display:inline-block">
							<div class="led-segment-float">
								<div class="float-v"></div>
							</div>
						</div>
						
					`;
				}else{
					ledHtml += `
						<div class=${random} style="display:inline-block">
							<div class="led-segment">
								<div class="led-segment1 led-color"></div>
								<div class="led-segment2 led-color"></div>
								<div class="led-segment3 led-color"></div>
								<div class="led-segment4 led-color"></div>
								<div class="led-segment5 led-color"></div>
								<div class="led-segment6 led-color"></div>
								<div class="led-segment7 led-color"></div>
							</div>
						</div>
					`;

					style += this.setValue(item, random);
				}
				
			})
		}
		/*���inline-block��ļ�϶����*/
		style += (selector + '{font-size:0 !important}');
		style += '</style>';
		$("body").append(style);
		$(selector).append(ledHtml);
	}

}


/*
ʹ��ʾ�� 
html���֣�
	<div class="led-segment-parent"></div>
	<div class="led-segment-parent1"></div>

js���֣�
	������Ϊled-segment-parent�������Զ��壩�Ľڵ���ʾ���Ϊ50px���߶�Ϊ100px���Ƶ��߿�5px����ɫΪ��ɫ�ģ�������б10�ȵ�led��
	let led = new LedStyle(50,100,5,'.led-segment-parent','orange','-10');
	led.setValues('0123456789');
	
	let led1 = new LedStyle(100,200,10,'.led-segment-parent1','skyblue','10');
	led1.setValues('123');
*/