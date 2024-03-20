//@ts-nocheck
import { bitable, UIBuilder } from "@lark-base-open/web-api";

export default async function main(uiBuilder: UIBuilder) {
    uiBuilder.form((form) => ({
        formItems: [
            form.select('select', { label: '基本使用', options: [{ label: 'Apple', value: 'Apple' }, { label: 'Orange', value: 'Orange' }], defaultValue: 'Apple' }),
            form.select('multipleSelect', { label: '多选模式', options: [{ label: 'Apple', value: 'Apple' }, { label: 'Orange', value: 'Orange' }], multiple: true, defaultValue: ['Apple', 'Orange'] }),
            form.select('tags', { label: '标签模式（允许用户输入新选项）', options: [{ label: 'Apple', value: 'Apple' }, { label: 'Orange', value: 'Orange' }], tags: true, defaultValue: ['Apple', 'Orange'] }),
        ],
        buttons: ['确定'],
    }), async ({ values }) => {
        const { select, multipleSelect, tags } = values;
    });
}