<script setup>
import ExpansionPanel from "../components/ExpansionPanel.vue";
</script>

<template>
  <h1 class="text-center text-h3 font-weight-bold my-5">FAQ's</h1>

  <v-card flat class="py-5">
    <v-card-title class="text-h5 text-center">
      Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier
      problema que tengas.
    </v-card-title>

    <ExpansionPanel
      title="¿Como funciona el proceso de compra de una propiedad?"
      description="El proceso de compra de una propiedad puede variar según la ubicación y las regulaciones locales, pero generalmente sigue estos pasos:"
    >
      <template v-slot:item>
        <ExpansionPanel
          title="1. Búsqueda y Selección"
          description="Comienza buscando propiedades que se adapten a tus necesidades y presupuesto. Utiliza nuestro sitio web para filtrar y encontrar propiedades que te interesen."
        />
        <ExpansionPanel
          title="2. Contacto con nosotros"
          description="Una vez que encuentres una propiedad que te interese, puedes ponerte en contacto con nosotros a través de nuestras redes sociales, correo o número de teléfono."
        />
        <ExpansionPanel
          title="3. Visitas a las Propiedades"
          description="Programa visitas a las propiedades que te interesen. Esto te permitirá inspeccionar la propiedad y hacer preguntas al vendedor o agente."
        />
        <ExpansionPanel
          title="4. Oferta"
          description="Cuando encuentres la propiedad adecuada, puedes presentar una oferta al vendedor. La oferta incluirá el precio que estás dispuesto a pagar y cualquier condición específica."
        />
        <ExpansionPanel
          title="5. Negociación"
          description="Puede haber una fase de negociación donde tú y el vendedor acuerdan los términos de la venta, incluyendo el precio y las condiciones de cierre."
        />
        <ExpansionPanel
          title="6. Inspecciones y Tasación"
          description="Antes del cierre, es común realizar inspecciones de la propiedad y una tasación para evaluar su estado y valor."
        />
        <ExpansionPanel
          title="7. Financiamiento"
          description="Si requieres financiamiento, deberás solicitar una hipoteca y completar el proceso de aprobación."
        />
        <ExpansionPanel
          title="8. Cierre de la Venta"
          description="Una vez que se hayan cumplido todas las condiciones y se haya aprobado la financiación, se procede al cierre de la venta. En esta etapa, se firman los documentos legales y se transfiere la propiedad."
        />
        <ExpansionPanel
          title="9. Entrega de Llaves"
          description="Después del cierre, se entregan las llaves de la propiedad y te conviertes oficialmente en el propietario."
        />
      </template>
    </ExpansionPanel>

    <ExpansionPanel title="¿Cómo puedo buscar propiedades en el sitio?">
      <template v-slot:item>
        <ExpansionPanel
          title="1. Ingresa a la página de inicio"
          description="En la página de inicio, puedes ver las propiedades más recientes y populares. También puedes utilizar el buscador para encontrar propiedades que se adapten a tus necesidades."
        />
        <ExpansionPanel
          title="2. Filtrar por criterios"
          description="Puede utilizar los filtros disponibles para refinar su búsqueda. Puede filtrar por tipo de propiedad, rango de precios, número de habitaciones, número de baños y otras características específicas que sean importantes para usted."
        />
        <ExpansionPanel
          title="3. Vista detallada"
          description="Haga clic en una propiedad en la lista para ver más detalles. En la vista detallada, encontrará fotos, descripciones, información de contacto y, a menudo, un mapa de ubicación."
        />
        <ExpansionPanel
          title="4. Programar visitas"
          description="Si está interesado en una propiedad en particular, puede utilizar la información de contacto proporcionada programar una visita o hacer preguntas a un vendedor o agente."
        />
      </template>
    </ExpansionPanel>

    <ExpansionPanel
      title="¿Cuáles son los costos asociados a la compra de una propiedad? "
    >
      <template v-slot:item>
        <ExpansionPanel
          title="1. Precio de compra"
          description="El costo principal es el precio de compra de la propiedad en sí. Este es el monto acordado con el vendedor."
        />
        <ExpansionPanel
          title="2. Impuestos de transferencia"
          description="Al comprar una propiedad, es posible que debas pagar impuestos de transferencia, que son impuestos estatales o locales sobre la transacción."
        />
        <ExpansionPanel
          title="3. Gastos de cierre"
          description="Los gastos de cierre incluyen costos legales, tasas de registro de escrituras, seguros de título y otros gastos relacionados con la transferencia de la propiedad."
        />
        <ExpansionPanel
          title="4. Inspecciones y tasaciones"
          description="Antes de comprar una propiedad, es común realizar inspecciones y tasaciones para evaluar su estado y valor."
        />
        <ExpansionPanel
          title="5. Costos de financiamiento"
          description="Si estás obteniendo un préstamo hipotecario, debes considerar los costos de financiamiento, que pueden incluir tasas de interés, costos de solicitud y otros cargos relacionados con el préstamo."
        />
        <ExpansionPanel
          title="6. Seguros"
          description="Algunos compradores optan por comprar seguros, como el seguro de propietario, que puede tener costos iniciales."
        />
      </template>
    </ExpansionPanel>

    <ExpansionPanel
      title="¿Cómo puedo vender mi propiedad a través de su plataforma?"
      description="Por el momento no hemos habilitado esta funcionalidad, pero estamos trabajando por incluir esta funcionalidad y ser los socios adecuados en la venta de tu propiedad y conseguir el mejor precio posible."
    />

    <ExpansionPanel
      title="¿Qué tipos de propiedades se pueden encontrar en el sitio?"
      description="En nuestro sitio web puedes encontrar diferentes tipos de propiedades, entre ellas podemos mencionar:"
    >
      <template v-slot:item>
        <ExpansionPanel
          title="1. Casas Unifamiliares"
          description="Propiedades independientes ideales para familias que desean su propio espacio."
        />
        <ExpansionPanel
          title="2. Condominios"
          description="Unidades en edificios de condominios que ofrecen una combinación de propiedad privada y áreas comunes."
        />
        <ExpansionPanel
          title="3. Terrenos y Parcelas"
          description="Terrenos y parcelas disponibles para la construcción de tu propia vivienda o proyecto."
        />
        <ExpansionPanel
          title="4. Locales Comerciales"
          description="Espacios comerciales ideales para establecer negocios y empresas."
        />
        <ExpansionPanel
          title="5. Propiedades Rurales"
          description="Propiedades en áreas rurales o fuera de la ciudad, perfectas para quienes buscan la tranquilidad del campo."
        />
        <ExpansionPanel
          title="6. Propiedades de Lujo"
          description="Residencias de alto standing con comodidades y características excepcionales."
        />
      </template>
    </ExpansionPanel>

    <ExpansionPanel
      title="¿Cómo puedo programar una visita a una propiedad?"
      description="Para programar una visita a una propiedad ponte en contacto con nosotros a través de nuestras redes sociales u otros medios de contacto para establecer una cita con uno de nuestros agentes."
    />
    <ExpansionPanel
      title="¿Cómo puedo calcular una hipoteca?"
      description="Próximamente Estaremos integrando una calculadora para que puedas realizar los cálculos para la hipoteca de tu propiedad de interés."
    />
    <ExpansionPanel
      title="¿Qué medidas de seguridad tienen en su sitio para proteger mis datos?"
      description="En INMOMAC, nos tomamos muy en serio la seguridad y la protección de los datos de nuestros usuarios. Hemos implementado una serie de medidas de seguridad para garantizar la confidencialidad y la integridad de su información personal. Estas medidas incluyen:"
    >
      <template v-slot:item>
        <ExpansionPanel
          title="1. Protección de Datos Personales"
          description="Utilizamos tecnologías de encriptación para proteger los datos personales que nos proporciona. Esto garantiza que su información esté segura durante la transmisión y el almacenamiento."
        />
        <ExpansionPanel
          title="2. Actualizaciones Continuas"
          description="Mantenemos nuestro software y sistemas actualizados para protegernos contra las amenazas de seguridad más recientes."
        />
        <ExpansionPanel
          title="3. Auditorías de Seguridad"
          description="Realizamos auditorías regulares de seguridad para identificar y abordar posibles vulnerabilidades en nuestros sistemas."
        />
        <ExpansionPanel
          title="4. Política de Privacidad"
          description=" Hemos establecido una política de privacidad sólida que describe cómo manejamos y protegemos su información personal. Puede revisar nuestra política de privacidad [enlace a la política de privacidad] para obtener más detalles."
        />
      </template>
    </ExpansionPanel>

    <ExpansionPanel
      title="¿Ofrecen servicios de alquiler de propiedades? "
      description="Por el momento no ofrecemos este tipo de servicios, pero estamos trabajando por ampliar nuestras ofertas y apoyarte para obtener el mejor sitio para que alquiles."
    />
  </v-card>
</template>
