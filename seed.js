import {prisma} from './lib/prisma.js'

async function main(){
    await prisma.role.createMany({
        data:[
            {name: 'user'},
            {name: 'author'}
        ],
        skipDuplicates: true
    });
    console.log('Roles seeded')
}
main().catch((e)=>{
    console.log(e);
    process.exit(1);
})
.finally(async ()=>{
    await prisma.$disconnect();
});